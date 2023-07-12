import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Descriptions, Input, Switch, Upload } from "antd";
import { toast } from "react-toastify";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import useInput from "../../../hooks/useInput";
import {
  PopupQuery,
  usePopupsQuery,
  useUpdatePopupMutation,
} from "../../../typings/api.d";
import { attachmentUploader } from "../../../utils/attachmentUploader";

const PopupManager: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [link, onChangeLink, setLink] = useInput("");
  const [imgUrl, setImgUrl] = useState<string>();
  const [editLink, setEditLink] = useState<boolean>(false);
  const { data, loading, refetch } = usePopupsQuery();
  const [uploading, setUploading] = useState<boolean>(false);
  const [popup, setPopup] = useState<PopupQuery["popup"]>();
  const [editPopup] = useUpdatePopupMutation({
    onCompleted: () => {
      toast.success("팝업이 성공적으로 설정 되었습니다");
      setLink("");
      setEditLink(false);
      refetch();
    },
  });

  useEffect(() => {
    if (data) {
      const popups = data.popups.data;
      setPopup(popups[popups.length - 1]);
      if (popups[popups.length - 1]?.up) {
        setStatus("on");
      } else {
        setStatus("off");
      }
    }
  }, [data]);

  const uploadImage = useCallback((file: any) => {
    setUploading(true);
    Promise.resolve(
      attachmentUploader({
        type: "popup",
        file,
        category: "popupImage",
      })
    )
      .then((url) => {
        setImgUrl(url);
        toast.success(
          "파일 / 이미지가 업로드 되었습니다, 설정 버튼을 눌러주세요"
        );
        setUploading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
        setUploading(false);
      });
  }, []);

  const handleSubmit = useCallback(async () => {
    if (popup) {
      await editPopup({
        variables: {
          args: {
            _id: popup._id,
            up: status === "on" ? true : false,
            url: imgUrl,
            link: link.includes("http") ? link : `http://${link}`,
          },
        },
      });
    }
  }, [status, imgUrl, editPopup, link, popup]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Descriptions bordered layout="horizontal">
        <Descriptions.Item
          label="게시여부"
          span={4}
          key={"게시"}
          labelStyle={{ width: 120 }}
        >
          <Switch
            checked={status === "on" ? true : false}
            onChange={() => setStatus(status === "on" ? "off" : "on")}
          />
        </Descriptions.Item>
        <Descriptions.Item
          label="팝업링크"
          span={4}
          key={"링크"}
          labelStyle={{ width: 120 }}
        >
          <LinkSwitchContainer>
            <span className="edit-link">링크 수정</span>
            <Switch
              checked={editLink}
              onChange={() => setEditLink(!editLink)}
            />
          </LinkSwitchContainer>
          {editLink ? (
            <Input
              style={{ width: 500 }}
              placeholder={`${popup?.link}`}
              value={link}
              onChange={onChangeLink}
            />
          ) : (
            <span>현재 설정된 링크: {popup?.link}</span>
          )}
        </Descriptions.Item>
        <Descriptions.Item
          label="게시물"
          key={"게시"}
          labelStyle={{ width: 120 }}
        >
          <span style={{ marginBottom: 20, display: "block" }}>
            &#8251;팝업 이미지는 가로 500 세로 700의 이미지를 사용 해 주세요.
          </span>
          {popup?.url ? (
            <img
              src={popup.url}
              alt="popupimg"
              width={300}
              style={{ display: "block", marginBottom: 15 }}
            />
          ) : (
            <span style={{ display: "block", marginBottom: 15 }}>
              게시물이 없습니다
            </span>
          )}
          <div>{uploading && <LoadingOutlined size={40} />}</div>
          <Upload
            style={{ marginBottom: 20, display: "block" }}
            listType={"picture"}
            customRequest={({ file }) => {
              setUploading(true);
              uploadImage(file);
            }}
            progress={{ showInfo: true }}
            maxCount={0}
            disabled={uploading}
            onChange={({ file: callbackFile }) => {
              if (imgUrl !== "") {
                callbackFile.status = "done";
              } else {
                callbackFile.status = "removed";
              }
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Descriptions.Item>
      </Descriptions>
      {uploading ? (
        <StyledButton type="default" disabled>
          이미지 업로드중...
        </StyledButton>
      ) : (
        <StyledButton
          type="primary"
          onClick={handleSubmit}
          disabled={uploading}
        >
          설정
        </StyledButton>
      )}
    </Container>
  );
};

export default PopupManager;

const Container = styled.div``;

const StyledButton = styled(Button)`
  margin: 30px;
`;

const LinkSwitchContainer = styled.div`
  margin: 10px 0;
  & .edit-link {
    margin-right: 10px;
  }
`;
