import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export default function AdminDashboard() {
  const [enrollments, setEnrollments] = useState([]);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      try {
        // ✅ ENROLLMENTS
        const enrollSnap = await getDocs(collection(db, "enrollments"));
        let enrollData = enrollSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // sort by enrolledAt (your field)
        enrollData.sort((a, b) => {
          const ta = a.enrolledAt?.seconds ?? 0;
          const tb = b.enrolledAt?.seconds ?? 0;
          return tb - ta;
        });
        setEnrollments(enrollData);

        // ✅ SERVICE REQUESTS
        const serviceSnap = await getDocs(collection(db, "serviceRequests"));
        let serviceData = serviceSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        serviceData.sort((a, b) => {
          const ta = a.createdAt?.seconds ?? 0;
          const tb = b.createdAt?.seconds ?? 0;
          return tb - ta;
        });
        setServiceRequests(serviceData);

        // ✅ CONTACTS
        const contactSnap = await getDocs(collection(db, "contacts"));
        let contactData = contactSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        contactData.sort((a, b) => {
          const ta = a.createdAt?.seconds ?? 0;
          const tb = b.createdAt?.seconds ?? 0;
          return tb - ta;
        });
        setContacts(contactData);

      } catch (err) {
        console.log("Dashboard load error:", err.code, err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAll();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="p-6 max-w-7xl mx-auto space-y-12">

      {/* ---------------- ENROLLMENTS ---------------- */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Course Enrollments ({enrollments.length})
        </h2>

        {enrollments.length === 0 ? (
          <p className="text-slate-500">No enrollments found.</p>
        ) : (
          <div className="overflow-x-auto bg-white border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-left">
                <tr>
                  <th className="p-3">Student</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {enrollments.map((e) => (
                  <tr key={e.id} className="border-t">
                    {/* ✅ Correct field names */}
                    <td className="p-3">{e.studentName}</td>
                    <td className="p-3">{e.studentEmail}</td>
                    <td className="p-3">{e.studentPhone}</td>
                    <td className="p-3">{e.courseTitle}</td>
                    <td className="p-3">৳{e.coursePrice}</td>
                    <td className="p-3 capitalize">{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


      {/* ---------------- SERVICE REQUESTS ---------------- */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Service Requests ({serviceRequests.length})
        </h2>

        {serviceRequests.length === 0 ? (
          <p className="text-slate-500">No service requests found.</p>
        ) : (
          <div className="overflow-x-auto bg-white border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-left">
                <tr>
                  <th className="p-3">Client</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {serviceRequests.map((s) => (
                  <tr key={s.id} className="border-t">
                    <td className="p-3">{s.name}</td>
                    <td className="p-3">{s.email}</td>
                    <td className="p-3">{s.phone}</td>
                    <td className="p-3">{s.serviceName}</td>
                    <td className="p-3">৳{s.servicePrice}</td>
                    <td className="p-3 capitalize">{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


      {/* ---------------- CONTACTS ---------------- */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Contact Messages ({contacts.length})
        </h2>

        {contacts.length === 0 ? (
          <p className="text-slate-500">No contact messages yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-left">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-t align-top">
                    <td className="p-3">{c.name}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.phone || "-"}</td>
                    <td className="p-3">{c.subject || "-"}</td>
                    <td className="p-3 max-w-md">{c.message}</td>
                    <td className="p-3 capitalize">{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </section>
  );
}
