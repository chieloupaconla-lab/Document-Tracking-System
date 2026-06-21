import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export const uploadFile = async (file) => {
  const fileRef = ref(storage, file.name);
  await uploadBytes(fileRef, file);

  const url = await getDownloadURL(fileRef);
  return url;
};