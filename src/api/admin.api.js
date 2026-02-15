import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config"; 
// ⬆️ NOTE: তোমার admin/api ফোল্ডার থেকে firebase.config
// কোথায় আছে সেটা অনুযায়ী path ঠিক করো।
// যদি admin/api আর firebase একই লেভেলে থাকে:
// "../firebase/firebase.config"
// আর যদি তোমারটা screenshot মতো হয় (src/admin/api/...):
// "../../firebase/firebase.config"


/**
 * Get any collection data with correct ordering.
 * enrollments  -> enrolledAt (new docs)
 * old enrollments maybe -> createdAt
 * serviceRequests, contacts -> createdAt
 * services -> no timestamp normally, so no orderBy
 */
export const getCollectionData = async (colName) => {
  const colRef = collection(db, colName);

  // ✅ order field choose based on collection
  let orderField = "createdAt";
  if (colName === "enrollments") orderField = "enrolledAt";

  try {
    // services এ সাধারণত timestamp থাকে না → orderBy avoid
    if (colName === "services") {
      const snap = await getDocs(colRef);
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    }

    const q = query(colRef, orderBy(orderField, "desc"));
    const snap = await getDocs(q);

    return snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
  } catch (err) {
    // 🔥 fallback: older docs don't have orderField
    console.log("getCollectionData fallback:", err.code, err.message);

    const snap = await getDocs(colRef);
    let data = snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));

    // ✅ client-side sort (safe)
    data.sort((a, b) => {
      // enrolledAt না থাকলে createdAt দিয়ে sort করবে
      const ta =
        a?.[orderField]?.seconds ??
        a?.createdAt?.seconds ??
        0;

      const tb =
        b?.[orderField]?.seconds ??
        b?.createdAt?.seconds ??
        0;

      return tb - ta;
    });

    return data;
  }
};

export const updateStatus = async (colName, id, status) => {
  const ref = doc(db, colName, id);
  return updateDoc(ref, { status });
};

export const deleteItem = async (colName, id) => {
  const ref = doc(db, colName, id);
  return deleteDoc(ref);
};
