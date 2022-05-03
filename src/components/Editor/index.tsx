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

  const handleImageUpload = useCallback((props) => {

    if (props && props.imageInfo) {
      const base64 = props.imageInfo.split("base64,");
      console.log(base64);
    }
  }, []);

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
          ['hiliteColor', 'outdent', 'indent',],
          ['image']
        ],
      }}
    />
  );
};

export default Editor;

const StyledEditor = styled(SunEditor)`
  background-color: white;
  min-height: 300px;
  & .ql-container {
    min-height: 300px;
  }
  & .ql-editor {
    min-height: 300px;
  }
`;
