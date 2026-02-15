import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.config";

// ✅ ONLY for admin real Firebase login
export const loginAdmin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutAdmin = () => {
  return signOut(auth);
};
