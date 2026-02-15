// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Sparkles,
//   ArrowRight,
//   BadgeCheck,
//   Clock,
// } from "lucide-react";

// export default function Services() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch("/data/services.json")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

//   return (
//     <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
//       {/* container */}
//       <div className="max-w-7xl mx-auto">
//         {/* header */}
//         <div className="text-center mb-10 sm:mb-12">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//             <Sparkles size={16} />
//             Professional Services
//           </div>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-slate-900">
//             Our Services
//           </h2>
//           <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
//             Get expert help to accelerate your learning and career growth.
//           </p>
//         </div>

//         {/* grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
//             >
//               {/* subtle top glow */}
//               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-70" />

//               {/* badge row */}
//               <div className="flex items-center justify-between mb-4">
//                 <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
//                   <BadgeCheck size={14} />
//                   Verified Service
//                 </span>

//                 <span className="inline-flex items-center gap-1 text-xs text-slate-500">
//                   <Clock size={14} />
//                   Fast Delivery
//                 </span>
//               </div>

//               {/* title */}
//               <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition">
//                 {service.name}
//               </h3>

//               {/* details */}
//               <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed flex-1">
//                 {service.details}
//               </p>

//               {/* price */}
//               <div className="mt-4 flex items-baseline gap-2">
//                 <span className="text-2xl font-bold text-blue-600">
//                   ৳{service.price}
//                 </span>
//                 <span className="text-xs text-slate-500">starting</span>
//               </div>

//               {/* actions */}
//               <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2">
//                 <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition">
//                   Get Service
//                 </button>

//                 <Link
//                   to={`/services/${service.id}`}
//                   className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
//                 >
//                   Details <ArrowRight size={16} />
//                 </Link>
//               </div>

//               {/* hover background accent */}
//               <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 group-hover:opacity-60 transition duration-300 blur-2xl" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, BadgeCheck, Clock } from "lucide-react";

import ServiceRequestModal from "../components/ServiceRequestModal"; 


export default function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // ✅ add

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            Professional Services
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-slate-900">
            Our Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Get expert help to accelerate your learning and career growth.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-70" />

              
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                  <BadgeCheck size={14} />
                  Verified Service
                </span>

                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <Clock size={14} />
                  Fast Delivery
                </span>
              </div>

              
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition">
                {service.name}
              </h3>

              
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed flex-1">
                {service.details}
              </p>

              
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  ৳{service.price}
                </span>
                <span className="text-xs text-slate-500">starting</span>
              </div>

              
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2">
                <button
                  onClick={() => setSelectedService(service)} 
                  className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition"
                >
                  Get Service
                </button>

                <Link
                  to={`/services/${service.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
                >
                  Details <ArrowRight size={16} />
                </Link>
              </div>

              
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 group-hover:opacity-60 transition duration-300 blur-2xl" />
            </div>
          ))}
        </div>
      </div>

      
      {selectedService && (
        <ServiceRequestModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
