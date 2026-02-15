import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import ServiceDetails from "./pages/ServiceDetails";

import SeedServices from "./pages/SeedServices";

import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import EnrollmentsPage from "./admin/EnrollmentsPage";
import ServiceRequestsPage from "./admin/ServiceRequestsPage";
import ContactsPage from "./admin/ContactsPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/seed-services" element={<SeedServices />} />
      </Routes> */}
      <Routes>
  {/* Public routes */}
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/courses/:id" element={<CourseDetails />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/:id" element={<ServiceDetails />} />
  <Route path="/contact" element={<Contact />} />

  {/* Admin login */}
  <Route path="/admin-login" element={<AdminLogin />} />

  {/* Admin protected routes */}
  <Route
    path="/admin"
    element={
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    }
  >
    <Route index element={<AdminDashboard />} />
    <Route path="enrollments" element={<EnrollmentsPage />} />
    <Route path="service-requests" element={<ServiceRequestsPage />} />
    <Route path="contacts" element={<ContactsPage />} />
  </Route>
</Routes>

      <Footer />
    </BrowserRouter>
  );
}
