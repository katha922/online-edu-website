import { useState } from "react";
import { enrollStudent } from "../api/enroll.api";

export default function EnrollModal({ course, onClose }) {
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

    if (!student.name || !student.email || !student.phone) {
      alert("সব ফিল্ড পূরণ করো");
      return;
    }

    setLoading(true);
    try {
      await enrollStudent({ course, student });
      alert("✅ Enrollment successful!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-3 top-3 text-xl">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">
          Enroll in {course.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Please provide your details to enroll.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Your name"
            className="w-full border p-2 rounded-lg"
            value={student.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded-lg"
            value={student.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone number"
            className="w-full border p-2 rounded-lg"
            value={student.phone}
            onChange={handleChange}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            {loading ? "Enrolling..." : "Confirm Enroll"}
          </button>
        </form>
      </div>
    </div>
  );
}
