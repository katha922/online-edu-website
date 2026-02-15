// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Courses() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetch("/data/courses.json")
//       .then(res => res.json())
//       .then(data => setCourses(data));
//   }, []);

//   return (
//     <section className="py-10 px-5 bg-slate-100 mx-48 mt-8 mb-8 rounded">
//       <h2 className="text-5xl font-bold mb-8 text-center">Our Courses</h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
//         {courses.map(course => (
//           <div key={course.id} className="border p-5 rounded-lg shadow hover:shadow-lg transition bg-white">
//             <img src={course.image} alt={course.title} className="rounded mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//             <p className="text-gray-600 mb-4">{course.description}</p>
//             <p className="font-semibold text-blue-600 mb-3">৳{course.price}</p>
//             <div className="flex justify-between">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded">Enroll</button>
//               <Link
//                 to={`/courses/${course.id}`}
//                 className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
//               >
//                 Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EnrollModal from "../components/EnrollModal";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-100">
        
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg mb-4 h-44 sm:h-48 md:h-52 w-full object-cover"
                />

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm sm:text-base flex-1">
                  {course.description}
                </p>

                <p className="font-semibold text-blue-600 mb-4 text-base sm:text-lg">
                  ৳{course.price}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    Enroll
                  </button>

                  <Link
                    to={`/courses/${course.id}`}
                    className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-600 hover:text-white transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCourse && (
        <EnrollModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}
