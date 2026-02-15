import { BookOpen, Users, GraduationCap, Trophy } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "500+",
      label: "Total Courses",
      Icon: BookOpen,
    },
    {
      id: 2,
      value: "1900+",
      label: "Our Students",
      Icon: Users,
    },
    {
      id: 3,
      value: "750+",
      label: "Skilled Learners",
      Icon: GraduationCap,
    },
    {
      id: 4,
      value: "30+",
      label: "Awards Won",
      Icon: Trophy,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop)",
        }}
      />

      
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map(({ id, value, label, Icon }) => (
            <div
              key={id}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-7 shadow-lg hover:bg-white/10 transition"
            >
              
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400/90 grid place-items-center shadow-md group-hover:scale-105 transition">
                <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                {value}
              </h3>

              
              <p className="mt-1 text-xs sm:text-sm text-slate-200">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
