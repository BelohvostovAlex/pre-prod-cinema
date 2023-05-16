import { DocumentData, WithFieldValue, doc, setDoc } from "firebase/firestore";

import { db } from "@lib/firebase.prod";

interface CreateDocumentProps {
  collection: string;
  id: string;
  document: WithFieldValue<DocumentData>;
}

export const createDocument = async (options: CreateDocumentProps) => {
  const { collection, id, document } = options;
  await setDoc(doc(db, collection, id), document);
};
