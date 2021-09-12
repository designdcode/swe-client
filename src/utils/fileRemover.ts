import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { storage } from "./firebase";

export const fileRemover = (
  type: string,
  category: string,
  filename: string,
  state: Dispatch<SetStateAction<string | undefined>>
) => {
  storage
    .ref(`/${type}/${category}/${filename}`)
    .delete()
    .then(() => {
      state("");
      toast.success("업로드 된 파일/이미지가 삭제 되었습니다");
    })
    .catch((err) => toast.error(err));
};
