import {
  DocumentData,
  WithFieldValue,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@lib/firebase.prod";

interface UpdateDocumentProps {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}

export const updateDocument = async (options: UpdateDocumentProps) => {
  const { collection, newDoc, id } = options;
  const docRef = doc(db, collection, id);
  await updateDoc(docRef, newDoc);
};
