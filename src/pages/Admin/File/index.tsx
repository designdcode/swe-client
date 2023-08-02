import React, { FC, useCallback, useState } from "react";
import { useCreateFileMutation } from "../../../typings/api.d";
import { Button, Upload, UploadProps } from "antd";

interface FileResponseProp {
  fileName: string;
  filePath: string;
}

export const File: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [response, setResponse] = useState<FileResponseProp[]>([]);
  const [createFile] = useCreateFileMutation();

  const postData = async (data = {}) => {
    if (data) {
      const submitData = new FormData();
      submitData.append("files", JSON.stringify(data));
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: submitData,
      });
      return response.json();
    }
  };

  const handleUpload = useCallback(
    async ({ file }) => {
      setUploadedFiles((prev) => [...uploadedFiles, file]);
    },
    [uploadedFiles]
  );

  const handleSubmit = useCallback(async () => {
    await postData(uploadedFiles);
  }, [uploadedFiles]);

  const uploadProps: UploadProps = {
    name: "file",
    action: "http://localhost:4000/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange: (info) => {
      if (info) {
        if (info.file.status !== "uploading") {
          let reader = new FileReader();
          reader.onload = (e) => {
            console.log(e.target?.result || "failed");
          };
        }
      }
      if (info.file.status === "done" && info.file.response) {
        setResponse(() => [...response, info.file.response]);
      } else if (info.file.status === "error") {
        console.log("failed");
      }
    },
  };

  console.log(response);

  return (
    <div>
      <Upload {...uploadProps} multiple>
        <Button>파일 올리기</Button>
      </Upload>
      <Button onClick={handleSubmit}>Upload file</Button>
    </div>
  );
};
