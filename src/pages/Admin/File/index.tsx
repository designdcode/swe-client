import React, { FC, useCallback, useState } from "react";
import { useCreateFileMutation } from "../../../typings/api.d";
import { Button, Upload } from "antd";

export const File: FC = () => {
  const [file, setFile] = useState<File>();
  const [createFile] = useCreateFileMutation();

  return (
    <div>
      <Upload action={"http://localhost:4000/upload"} multiple>
        <Button>파일 올리기</Button>
      </Upload>
      {/* <Button onClick={handleSubmit}>Upload file</Button> */}
    </div>
  );
};
