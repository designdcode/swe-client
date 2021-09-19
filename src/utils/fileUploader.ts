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
  setProgress: Dispatch<SetStateAction<number>>
) => {
  const upload = storage.ref(`/${type}/${category}/${filename}`).put(file);
  upload.on(
    "state_changed",
    (snapshot) => {},
    (err) => console.log(err),
    () => {
      storage
        .ref(`/${type}/${category}/${filename}`)
        .getDownloadURL()
        .then((url) => {
          state(url);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          // setProgress(progress - 1);
          setProgress(0);
        });
    }
  );
};
