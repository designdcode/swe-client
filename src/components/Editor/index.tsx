import React, { FC, useCallback, useRef } from "react";
import styled from "@emotion/styled";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

interface Props {
  onChange: (value: any) => void;
  content: string;
}

const Editor: FC<Props> = ({ content, onChange }) => {
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
      defaultValue={content}
      setOptions={{
        minHeight: "400px",
        buttonList: [
          ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
          ["hiliteColor", "outdent", "indent"],
          ["link", "image"],
        ],
      }}
    />
  );
};

export default Editor;

const StyledEditor = styled(SunEditor)`
  background-color: white;
  min-height: 400px;
  & .ql-container {
    min-height: 400px;
  }
  & .ql-editor {
    min-height: 400px;
  }
`;
