import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md text-gray-900 py-4 px-6 z-50 w-full lg:px-20">
      <div className="flex justify-between items-center">
        
        <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
          Zero Idea Academy
        </h1>

        
        <div className="hidden md:flex space-x-8 font-semibold">
          <Link to="/" className="hover:text-sky-600">Home</Link>
          <Link to="/courses" className="hover:text-sky-600">Courses</Link>
          <Link to="/services" className="hover:text-sky-600">Services</Link>
          <Link to="/contact" className="hover:text-sky-600 ">Contact</Link>
        </div>

        
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 font-semibold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-600"
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-600"
          >
            Courses
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-600"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-sky-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
