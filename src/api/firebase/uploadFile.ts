import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { FirebaseCollections } from "../../constants/firebase/collections";
import { storage } from "../../lib/firebase.prod";

import { updateDocument } from "./updateDocument";

type TFile = Blob | Uint8Array | ArrayBuffer;

interface UploadFileProps {
  file: TFile;
  id: string;
  collection: FirebaseCollections;
}

export const uploadFile = async (options: UploadFileProps) => {
  const { collection, file, id } = options;
  const storageRef = ref(storage, id);
  const uploadTask = uploadBytesResumable(storageRef, file);

  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  await updateDocument({
    collection,
    id,
    newDoc: { photo: downloadURL },
  });
};
