import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const getServices = async () => {
  const snap = await getDocs(collection(db, "services"));
  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
