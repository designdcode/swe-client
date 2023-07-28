import React, { FC, useCallback, useEffect, useState } from "react";
import {
  Button,
  Descriptions,
  Image,
  Modal,
  Spin,
  Typography,
  Upload,
} from "antd";
import { useBoardContext } from "../../../contexts";
import { useLocation } from "react-router";
import { BoardQuery, useCreateBoardMutation } from "../../../typings/api.d";
import { toast } from "react-toastify";
import { attachmentUploader } from "../../../utils/attachmentUploader";

export const ImageUploadWithModal: FC = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[3];
  const { boards, refetch } = useBoardContext();
  const [data, setData] = useState<BoardQuery["board"]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();

  const [createBoard] = useCreateBoardMutation();

  useEffect(() => {
    setLoading(true);
    if (boards) {
      const foundBoard = boards.filter((v) => v.category === category);
      if (foundBoard) {
        setData(foundBoard[foundBoard.length - 1]);
      }
    }
    setLoading(false);
  }, [boards, category]);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleImageUpload = useCallback(
    (file: any) => {
      setImgName(file.name);
      setLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(category) || "",
        })
      )
        .then((url) => {
          setImgUrl(url);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setLoading(false);
        });
    },
    [category]
  );

  const handleSubmit = useCallback(async () => {
    if (imgUrl) {
      await createBoard({
        variables: {
          args: {
            category,
            images: [{ url: imgUrl, fileName: imgName || "" }],
          },
        },
        onCompleted: () => {
          if (refetch) {
            refetch();
          }
          toast.success("성공적으로 수정되었습니다.");
          handleCancel();
        },
      });
    } else {
      toast.error("이미지 업로드에 실패 하였습니다. 다시한번 시도해 주세요");
      handleCancel();
    }
  }, [createBoard, imgUrl, imgName, category, refetch, handleCancel]);

  return (
    <div>
      <div>
        <Button type="primary" onClick={showModal}>
          사진 올리기
        </Button>
        <Modal
          title="이미지 올리기"
          open={isModalOpen}
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          <Descriptions size="middle" bordered column={1}>
            <Descriptions.Item label="이미지 업로드">
              <Upload
                accept="image/*"
                maxCount={1}
                disabled={loading}
                customRequest={({ file }) => handleImageUpload(file)}
                showUploadList={false}
              >
                <Button disabled={loading}>이미지 업로드</Button>
              </Upload>
            </Descriptions.Item>
            <Descriptions.Item label="미리보기">
              {loading ? (
                <Spin tip="업로드 중입니다">
                  <div className="content" />
                </Spin>
              ) : (
                <Image width={300} src={imgUrl} />
              )}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>

      <Descriptions
        size="middle"
        bordered
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "15px",
        }}
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="업로드된 이미지">
          {loading && (
            <Spin tip="업로드된 이미지를 불러오고 있습니다">
              <div className="content" />
            </Spin>
          )}
          {!data?.images || (data?.images && data.images.length === 0) ? (
            <Typography>업로드된 이미지가 없습니다</Typography>
          ) : (
            <Image width={300} src={data?.images[0].url} />
          )}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
