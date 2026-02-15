import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export const loginAdmin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutAdmin = () => signOut(auth);
