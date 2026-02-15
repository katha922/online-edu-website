import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const enrollStudent = async ({ course, student }) => {
  return addDoc(collection(db, "enrollments"), {
    courseId: course.id,
    courseTitle: course.title,
    coursePrice: course.price,

    studentName: student.name,
    studentEmail: student.email,
    studentPhone: student.phone,

    status: "enrolled",
    enrolledAt: serverTimestamp(),
  });
};
