import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

interface ImageUploaderProps {
  type: string;
  file: File;
  category?: string;
}

export const attachmentUploader = async ({
  type,
  file,
  category,
}: ImageUploaderProps): Promise<string> => {
  const imageRef = ref(storage, `/${type}/${category}/${file.name}`);
  const uploadTask = uploadBytesResumable(imageRef, file);

  await uploadTask;
  const url = await getDownloadURL(uploadTask.snapshot.ref);
  return url;
};
