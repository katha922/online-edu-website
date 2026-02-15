import React from "react";
import {
  Video,
  Users,
  ClipboardCheck,
  FileText,
  Briefcase,
  Crown,
} from "lucide-react";

const extras = [
  {
    title: "Live Q&A sessions",
    icon: Video,
    desc: "Ask questions directly in real-time and get instant clarity.",
  },
  {
    title: "Private Facebook/Telegram group",
    icon: Users,
    desc: "Stay connected with mentors and batchmates for fast support.",
  },
  {
    title: "Assignment review & feedback",
    icon: ClipboardCheck,
    desc: "Submit assignments and get detailed feedback to improve.",
  },
  {
    title: "Ready-to-use templates & checklists",
    icon: FileText,
    desc: "Use professional resources to work faster and smarter.",
  },
  {
    title: "Help with freelancing & first client",
    icon: Briefcase,
    desc: "Guidance on how to start earning and get your first job.",
  },
  {
    title: "Premium tool access (course period)",
    icon: Crown,
    desc: "Enjoy premium tools and resources while learning.",
  },
];

const LiveCourseExtras = () => {
  return (
    <section className="bg-amber-50 py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-amber-200/60 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          What’s Included (Live Batch)
        </h2>
        <p className="text-center text-sm sm:text-base text-slate-700 mb-8">
          Everything you need to stay guided, accountable, and job-ready.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {extras.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white border border-black/10 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-lg bg-amber-300 flex items-center justify-center border border-black/10 group-hover:bg-amber-400 transition">
                    <Icon size={22} className="text-slate-900" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveCourseExtras;
