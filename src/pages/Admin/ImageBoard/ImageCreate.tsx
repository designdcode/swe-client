import React, { FC, useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useBoardContext } from "../../../contexts";
import { useCreateBoardMutation } from "../../../typings/api.d";
import { toast } from "react-toastify";
import { attachmentUploader } from "../../../utils/attachmentUploader";
import { Link } from "react-router-dom";
import { Button, Form, Image, Spin, Upload } from "antd";

export const ImageCreate: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const category = pathname.split("/")[4];
  const param = pathname.split("/")[2];
  const { refetch } = useBoardContext();
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const [createBoard] = useCreateBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 생성 되었습니다.");
      if (refetch) {
        refetch();
      }
      history.goBack();
    },
  });

  const handleFinish = useCallback(async () => {
    if (imgUrl) {
      await createBoard({
        variables: {
          args: {
            category: category,
            images: [{ url: imgUrl, fileName: imgName || "" }],
          },
        },
      });
    } else {
      history.goBack();
    }
  }, [createBoard, imgUrl, imgName, category, history]);

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
  return (
    <div>
      <Link to={`/admin/${param}/show/${category}`}>
        <Button disabled={loading} type="ghost">
          뒤로
        </Button>
      </Link>
      <Form
        onFinish={handleFinish}
        wrapperCol={{ span: 16 }}
        style={{
          marginTop: "20px",
        }}
        labelCol={{
          style: {
            width: "80px",
          },
        }}
      >
        <Form.Item name="image" label="이미지">
          <Upload
            maxCount={1}
            accept="image/*"
            disabled={loading}
            customRequest={({ file }) => handleImageUpload(file)}
            showUploadList={false}
          >
            <Button disabled={loading}>이미지 업로드</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="미리보기">
          {loading ? (
            <Spin tip="업로드 중입니다">
              <div className="content" />
            </Spin>
          ) : (
            <Image width={300} src={imgUrl} />
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            저장
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
