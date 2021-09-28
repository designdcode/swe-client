import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { storage } from "./firebase";

export const fileUploader = (
  type: string,
  file: any,
  category: string,
  filename: string,
  state: Dispatch<SetStateAction<string | undefined>>,
  progress: number,
  setProgress: Dispatch<SetStateAction<number>>,
  createImage?: any,
  boardId?: number
) => {
  const upload = storage.ref(`/${type}/${category}/${filename}`).put(file);
  upload.on(
    "state_changed",
    (snapshot) => {},
    (err) => console.log(err),
    () => {
      setProgress(1);
      storage
        .ref(`/${type}/${category}/${filename}`)
        .getDownloadURL()
        .then(async (url) => {
          state(url);
          if (createImage && boardId) {
            await createImage({
              variables: {
                url,
                fileName: filename,
                boardId,
              },
            });
          }
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setProgress(0);
        });
    }
  );
};
