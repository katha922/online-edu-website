import { useState } from "react";
import { saveServiceRequest } from "../api/serviceRequest.api";

export default function ServiceRequestModal({ service, onClose }) {
  const [loading, setLoading] = useState(false);

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveServiceRequest({ service, student });
      alert("✅ Service request submitted! We will contact you soon.");
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl text-slate-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-1">
          Get Service: {service.name}
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Share your details. Our team will contact you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Your Name"
            className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
            value={student.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
            value={student.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
            value={student.phone}
            onChange={handleChange}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
