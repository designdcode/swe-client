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
    })
    .catch((err) => toast.error(err));
};
