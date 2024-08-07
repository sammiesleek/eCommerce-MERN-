import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const genCode = (length = 10) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  const randomStrings = [];

  let randomString = "";
  for (let j = 0; j < length; j++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomString += characters.charAt(randomIndex);
  }
  randomStrings.push(randomString + Date.now());

  return randomStrings;
};
export const uploadfiles = async (folder, type, files) => {
  let filesUrl = [];

  for (let i = 0; i < files.length; i++) {
    const rand = genCode();
    const fileRef = ref(storage, `${folder}/${type}/${rand}/${files[i].name}`);

    const status = await uploadBytes(fileRef, files[i])
      .then((snapshot) => {
        return snapshot;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

    if (status) {
      const uploadedFileUrl = await getDownloadURL(status.ref).then((url) => {
        return url;
      });

      filesUrl.push(uploadedFileUrl);
    }
  }

  return filesUrl;
};
