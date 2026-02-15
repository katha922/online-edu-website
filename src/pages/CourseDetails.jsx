import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LiveCourseExtras from "./LiveCourseExtras";
import Contact from "./Contact";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/data/courses.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(c => c.id === parseInt(id));
        setCourse(found);
      });
  }, [id]);

  if (!course) {
    return <p className="text-center py-20 text-xl">Loading course details...</p>;
  }

  return (
    <div>
      <section className="py-16 px-5 max-w-4xl mx-auto">
      <img src={course.image} alt={course.title} className="rounded mb-6 w-full" />
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{course.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">৳{course.price}</p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Enroll Now</button>
      <Link to="/courses" className="text-blue-600 underline">
        ← Back to Courses
      </Link>
    </section>
    <LiveCourseExtras></LiveCourseExtras>
    <Contact></Contact>
    </div>
  );
}
