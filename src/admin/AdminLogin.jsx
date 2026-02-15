// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginAdmin } from "../firebase/auth.api";

// export default function AdminLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const nav = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await loginAdmin(form.email, form.password);
//       nav("/admin");
//     } catch (err) {
//       console.log(err);
//       alert("❌ Invalid admin credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-[80vh] grid place-items-center px-4 bg-slate-50">
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
//         <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>
//         <p className="text-sm text-center text-slate-500 mb-6">
//           Only authorized admins can access the dashboard.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             name="email"
//             type="email"
//             placeholder="Admin Email"
//             className="w-full border p-3 rounded-xl"
//             onChange={handleChange}
//             value={form.email}
//             required
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             className="w-full border p-3 rounded-xl"
//             onChange={handleChange}
//             value={form.password}
//             required
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../firebase/adminAuth.api";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginAdmin(form.email, form.password);
      nav("/admin");
    } catch (err) {
      // ✅ Extra check log
      console.log("Firebase Auth Error Code:", err.code);
      console.log("Firebase Auth Error Message:", err.message);

      // optional: nice custom message
      if (err.code === "auth/user-not-found") {
        alert("❌ Admin user not found. Firebase Auth এ user create করো.");
      } else if (err.code === "auth/wrong-password") {
        alert("❌ Wrong password. Password আবার চেক করো.");
      } else if (err.code === "auth/invalid-credential") {
        alert("❌ Invalid credential. Email/Password ঠিক আছে কিনা দেখো.");
      } else if (err.code === "auth/operation-not-allowed") {
        alert("❌ Email/Password Sign-in enable করা নাই Firebase এ.");
      } else {
        alert("❌ Invalid admin credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] grid place-items-center px-4 bg-slate-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
        <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>
        <p className="text-sm text-center text-slate-500 mb-6">
          Only authorized admins can access the dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="email"
            type="email"
            placeholder="Admin Email"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
            value={form.email}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
            value={form.password}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}

