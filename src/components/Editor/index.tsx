import React, { FC, useCallback, useRef } from "react";
import styled from "@emotion/styled";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { SunEditorOptions } from "suneditor/src/options";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

interface Props extends SunEditorReactProps {
  onChange: (value: any) => void;
  content: string;
}

const editorOptions: SunEditorOptions = {
  minHeight: "500",
  buttonList: [
    ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
    ["hiliteColor", "outdent", "indent"],
    ["link", "image"],
  ],
  imageUploadSizeLimit: 10000000,
};

const Editor: FC<Props> = ({
  content,
  onChange,
  placeholder,
  defaultValue,
}) => {
  const editor = useRef<SunEditorCore>();

  const getEditorInstance = useCallback((sunEditor) => {
    editor.current = sunEditor;
  }, []);

  const handleImageUpload = useCallback((props) => {}, []);

  return (
    <StyledEditor
      getSunEditorInstance={getEditorInstance}
      onChange={onChange}
      onImageUpload={handleImageUpload}
      defaultValue={defaultValue}
      setOptions={editorOptions}
      placeholder={placeholder}
    />
  );
};

export default Editor;

const StyledEditor = styled(SunEditor)`
  background-color: white;
  min-height: 500px;
  & .ql-container {
    min-height: 500px;
  }
  & .ql-editor {
    min-height: 500px;
  }
`;
