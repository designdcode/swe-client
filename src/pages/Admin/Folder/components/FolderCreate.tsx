import React, { FC, useCallback, useState } from "react";
import { Button, Form, FormItemProps, Input, Upload, UploadProps } from "antd";
import { useCreateFolderMutation } from "../../../../typings/api.d";

interface FileResponseProp {
  fileName: string;
  filePath: string;
}

export const FolderCreate: FC = () => {
  const [form] = Form.useForm();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [response, setResponse] = useState<FileResponseProp[]>([]);
  const [depth, setDepth] = useState<number>(2);

  const [createFolder] = useCreateFolderMutation();

  const handleSubmit = useCallback(
    async (v) => {
      console.log(v, response);
    },
    [response]
  );

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
        return info.file.response;
      } else if (info.file.status === "error") {
        console.log("failed");
      }
    },
  };

  const getFile: FormItemProps["getValueFromEvent"] = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Upload {...uploadProps} multiple>
        <Button>파일 올리기</Button>
      </Upload>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="label" label="폴더 제목">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
