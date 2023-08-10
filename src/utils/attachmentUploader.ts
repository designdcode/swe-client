import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

interface ImageUploaderProps {
  type: string;
  file: File;
  category?: string;
  fileName?: string;
}

export const attachmentUploader = async ({
  type,
  file,
  category,
  fileName,
}: ImageUploaderProps): Promise<string> => {
  const name = fileName ? fileName : file.name;
  const imageRef = ref(storage, `/${type}/${category}/${name}`);
  const uploadTask = uploadBytesResumable(imageRef, file);

  await uploadTask;
  const url = await getDownloadURL(uploadTask.snapshot.ref);
  return url;
};
