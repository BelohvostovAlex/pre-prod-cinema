import { doc, getDoc } from "firebase/firestore";

import { db } from "../../lib/firebase.prod";

export const getDocument = async (collection: string, prop: string) => {
  const docSnapshot = await getDoc(doc(db, collection, prop));

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    return false;
  }
};
