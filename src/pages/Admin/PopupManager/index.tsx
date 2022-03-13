import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POPUP_STATUS } from "../../../queries/sharedQuery";
import {
  editPopup,
  editPopupVariables,
  getPopupStatus,
} from "../../../typings/api";
import { Button, Descriptions, Input, Switch, Upload } from "antd";
import { EDIT_POPUP } from "../../../queries/adminQuery";
import { storage } from "../../../utils/firebase";
import { toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";
import useInput from "../../../hooks/useInput";

const PopupManager: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [link, onChangeLink, setLink] = useInput("");
  const [imgUrl, setImgUrl] = useState<string>();
  const [editLink, setEditLink] = useState<boolean>(false);
  const { data, loading, refetch } = useQuery<getPopupStatus>(GET_POPUP_STATUS);
  const [editPopup] = useMutation<editPopup, editPopupVariables>(EDIT_POPUP, {
    onCompleted: ({ editPopup }) => {
      const { ok, err } = editPopup;
      if (ok) {
        toast.success("팝업이 성공적으로 설정 되었습니다");
        setLink("");
        setEditLink(false);
        refetch();
      } else {
        toast.error(err);
        console.log(err);
      }
    },
  });
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    if (data?.getPopupStatus.data?.up) {
      setStatus("on");
    } else {
      setStatus("off");
    }
  }, [data]);

  const uploadImage = useCallback((file: any) => {
    setUploading(true);
    const upload = storage.ref(`/popup/${file.filename}`).put(file);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        storage
          .ref(`/popup/${file.filename}`)
          .getDownloadURL()
          .then(async (url) => {
            setImgUrl(url);
            toast.success(
              "파일 / 이미지가 업로드 되었습니다, 설정 버튼을 눌러주세요"
            );
            setUploading(false);
          });
      }
    );
  }, []);

  const handleSubmit = useCallback(async () => {
    await editPopup({
      variables: {
        up: status,
        url: imgUrl,
        link: link.includes("http") ? link : `http://${link}`,
      },
    });
  }, [status, imgUrl, editPopup, link]);

  const imageRemover = () => {
    storage
      .ref(`/popup`)
      .delete()
      .then(() => {
        setImgUrl("");
      })
      .catch((err) => toast.error(err));
  };

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
              placeholder={`${data?.getPopupStatus.data?.link}`}
              value={link}
              onChange={onChangeLink}
            />
          ) : (
            <span>현재 설정된 링크: {data?.getPopupStatus.data?.link}</span>
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
          {data &&
          data.getPopupStatus.data &&
          data.getPopupStatus.data.url !== "" ? (
            <img
              src={data.getPopupStatus.data.url || ""}
              alt="popupimg"
              width={300}
              style={{ display: "block", marginBottom: 15 }}
            />
          ) : (
            <span style={{ display: "block", marginBottom: 15 }}>
              게시물이 없습니다
            </span>
          )}
          <Upload
            style={{ marginBottom: 20, display: "block" }}
            listType={"picture"}
            customRequest={({ file }) => {
              setUploading(true);
              uploadImage(file);
            }}
            progress={{ showInfo: true }}
            maxCount={0}
            onChange={({ file: callbackFile }) => {
              if (imgUrl !== "") {
                callbackFile.status = "done";
              } else {
                callbackFile.status = "removed";
              }
            }}
            onRemove={imageRemover}
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
