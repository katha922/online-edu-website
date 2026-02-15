import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Faisal Azam Siddiqui",
    role: "MERN Stack Graduate",
    batch: "Full Stack Web Development (Batch 01)",
    text:
      "Zero Idea Academy’s MERN course was extremely practical. The projects were industry-focused and the support team helped whenever I got stuck.",
  },
  {
    id: 2,
    name: "Shafayet Rana",
    role: "UI/UX Learner",
    batch: "UI/UX Design (Batch 06)",
    text:
      "The mentors focus on real design thinking, not just tools. The guidance and feedback improved my portfolio a lot.",
  },
  {
    id: 3,
    name: "Abu Hasan",
    role: "UI/UX Graduate",
    batch: "UI/UX Design (Batch 17)",
    text:
      "Classes were well-structured and easy to follow. I learned modern UI/UX workflows with real assignments.",
  },
  {
    id: 4,
    name: "Jahid Hossain",
    role: "MERN Graduate",
    batch: "Full Stack Web Development (Batch 02)",
    text:
      "One of the best learning experiences I’ve had. From basics to deployment—everything was explained clearly.",
  },
  {
    id: 5,
    name: "Md Ashfaque Ul Hoque",
    role: "UI/UX Learner",
    batch: "UI/UX Design (Batch 06)",
    text:
      "A complete guided program. The community and mentor support stayed active even after the course.",
  },
  {
    id: 6,
    name: "Nayem Islam",
    role: "MERN Graduate",
    batch: "Full Stack Web Development (Batch 02)",
    text:
      "I gained real confidence in building full projects. Great instructor support and strong roadmap.",
  },
  {
    id: 7,
    name: "MD Galib Hasan",
    role: "Data Science Learner",
    batch: "Data Science Program (Batch 09)",
    text:
      "Coming from a non-CS background, I still understood everything. The course made data science feel simple and actionable.",
  },
];

const gradients = [
  "from-slate-50 to-white",
  "from-sky-50 to-white",
  "from-amber-50 to-white",
  "from-emerald-50 to-white",
  "from-violet-50 to-white",
];

const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            What Our Graduates Say
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Thousands of learners completed courses at Zero Idea Academy and
            shared their real experiences.
          </p>
        </div>

        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="break-inside-avoid mb-6">
              <div
                className={`relative rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition bg-gradient-to-br ${
                  gradients[idx % gradients.length]
                } p-5 sm:p-6`}
              >
                
                <div className="absolute right-4 top-4 text-amber-400">
                  <Quote size={20} />
                </div>

                
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pr-6">
                  {t.text}
                </p>

                
                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-3">
                  
                  <div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center text-sm font-bold">
                    {getInitials(t.name)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {t.role} • {t.batch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="/courses"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-500 transition"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}
