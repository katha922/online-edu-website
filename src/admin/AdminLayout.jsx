import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../firebase/auth.api";

export default function AdminLayout() {
  const nav = useNavigate();

  const handleLogout = async () => {
    await logoutAdmin();
    nav("/admin-login");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg ${
      isActive ? "bg-slate-900 text-white" : "hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-50">
      {/* Sidebar */}
      <aside className="lg:col-span-3 bg-white border-r p-4 lg:p-6">
        <h2 className="text-xl font-bold mb-6">Zero Idea Admin</h2>

        <nav className="space-y-2 text-sm">
          <NavLink to="/admin" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/enrollments" className={linkClass}>
            Enrollments
          </NavLink>
          <NavLink to="/admin/service-requests" className={linkClass}>
            Service Requests
          </NavLink>
          <NavLink to="/admin/contacts" className={linkClass}>
            Contacts
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-500 text-white py-2 rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="lg:col-span-9 p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
