import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POPUP_STATUS } from "../../../queries/sharedQuery";
import {
  editPopup,
  editPopupVariables,
  getPopupStatus,
} from "../../../typings/api";
import { Button, Descriptions, Switch, Upload } from "antd";
import { EDIT_POPUP } from "../../../queries/adminQuery";
import { storage } from "../../../utils/firebase";
import { toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";

const PopupManager: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>();

  const { data, loading, refetch } = useQuery<getPopupStatus>(GET_POPUP_STATUS);
  const [editPopup] = useMutation<editPopup, editPopupVariables>(EDIT_POPUP, {
    onCompleted: ({ editPopup }) => {
      const { ok, err } = editPopup;
      if (ok) {
        toast.success("팝업이 성공적으로 설정 되었습니다");
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
    const upload = storage.ref(`/popup/`).put(file);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        storage
          .ref(`popup`)
          .getDownloadURL()
          .then(async (url) => {
            setImgUrl(url);
            toast.success("파일 / 이미지가 업로드 되었습니다");
          });
      }
    );
    setUploading(false);
  }, []);
  console.log(imgUrl);

  const handleSubmit = useCallback(async () => {
    await editPopup({
      variables: {
        up: status,
        url: imgUrl,
      },
    });
  }, [status, imgUrl, editPopup]);

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
          label="게시물"
          key={"게시"}
          labelStyle={{ width: 120 }}
        >
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
            customRequest={({ file }) => uploadImage(file)}
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
