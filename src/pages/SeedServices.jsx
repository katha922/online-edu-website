import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export default function SeedServices() {
  const [loading, setLoading] = useState(false);

  const seedData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data/services.json");
      const services = await res.json();

      const colRef = collection(db, "services");

      for (const s of services) {
        await addDoc(colRef, {
          localId: s.id,
          name: s.name,
          details: s.details,
          price: Number(s.price),
        });
      }

      alert("✅ services.json uploaded to Firestore!");
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow border max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Seed Services</h2>
        <p className="text-slate-600 text-sm mb-6">
          Click once to upload services.json into Firestore.
        </p>

        <button
          onClick={seedData}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
        >
          {loading ? "Uploading..." : "Upload Services to Firestore"}
        </button>
      </div>
    </div>
  );
}
