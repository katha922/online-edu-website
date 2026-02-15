import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const saveContactMessage = async (payload) => {
  return addDoc(collection(db, "contacts"), {
    name: payload.name,
    email: payload.email,
    phone: payload.phone || "",
    subject: payload.subject || "",
    message: payload.message,
    status: "new",
    createdAt: serverTimestamp(),
  });
};
