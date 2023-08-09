import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import styled from "@emotion/styled";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { SunEditorOptions } from "suneditor/src/options";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import { UploadBeforeReturn } from "suneditor-react/dist/types/upload";
import { attachmentUploader } from "../../utils/attachmentUploader";

interface Props extends SunEditorReactProps {
  onChange: (value: any) => void;
  content: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  category?: string;
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
  setLoading,
  category,
}) => {
  const editor = useRef<SunEditorCore>();

  const getEditorInstance = useCallback((sunEditor) => {
    editor.current = sunEditor;
  }, []);

  const handleImageUpload: SunEditorReactProps["onImageUploadBefore"] =
    useCallback(
      (files, info, uploadHandler): UploadBeforeReturn => {
        setLoading(true);
        console.log(info, files);
        if (files && files[0]) {
          Promise.resolve(
            attachmentUploader({
              type: "image",
              file: files[0],
              category: category || "",
              fileName: `${category}-${new Date().getTime().toString()}`,
            })
          ).then((url) => {
            const tmp = {
              result: [
                {
                  url,
                  name: "url",
                },
              ],
            };
            setLoading(false);
            return uploadHandler(tmp);
          });
        } else {
          setLoading(false);
          return false;
        }
      },
      [setLoading, category]
    );

  return (
    <StyledEditor
      getSunEditorInstance={getEditorInstance}
      onChange={onChange}
      onImageUploadBefore={handleImageUpload}
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
