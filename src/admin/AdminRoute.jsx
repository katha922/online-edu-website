import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { ADMIN_EMAILS } from "./adminEmails";

export default function AdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && ADMIN_EMAILS.includes(user.email)) {
        setAllowed(true);
      } else {
        setAllowed(false);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return allowed ? children : <Navigate to="/admin-login" replace />;
}
