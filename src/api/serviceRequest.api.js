import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const saveServiceRequest = async ({ service, student }) => {
  return addDoc(collection(db, "serviceRequests"), {
    serviceId: service.id,
    serviceName: service.name,
    servicePrice: service.price,

    name: student.name,
    email: student.email,
    phone: student.phone,

    status: "new",
    createdAt: serverTimestamp(),
  });
};
