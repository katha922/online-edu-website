import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle, Lightbulb, Users, Sparkles } from "lucide-react";

const Highlights = () => {
  const scope = useRef(null);

  const items = [
    {
      title: "Practical learning",
      text: "Hands-on projects, real examples, and implementation-focused lessons.",
      Icon: CheckCircle,
      theme: {
        bg: "from-blue-50 via-white to-blue-100",
        iconBg: "bg-blue-600/10",
        iconText: "text-blue-700",
        ring: "ring-blue-200/60",
        glow: "bg-blue-300/30",
      },
    },
    {
      title: "Beginner-friendly approach",
      text: "Step-by-step guidance, simple language, and structured learning paths.",
      Icon: Lightbulb,
      theme: {
        bg: "from-amber-50 via-white to-amber-100",
        iconBg: "bg-amber-600/10",
        iconText: "text-amber-700",
        ring: "ring-amber-200/60",
        glow: "bg-amber-300/30",
      },
    },
    {
      title: "Lifetime community access",
      text: "Stay connected with mentors & peers, even after the course ends.",
      Icon: Users,
      theme: {
        bg: "from-emerald-50 via-white to-emerald-100",
        iconBg: "bg-emerald-600/10",
        iconText: "text-emerald-700",
        ring: "ring-emerald-200/60",
        glow: "bg-emerald-300/30",
      },
    },
  ];

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    
    const icons = root.querySelectorAll(".hl-icon");

    icons.forEach((icon, i) => {
      
      gsap.to(icon, {
        y: gsap.utils.random(-16, 16),
        x: gsap.utils.random(-6, 6),
        rotate: gsap.utils.random(-4, 4),
        duration: gsap.utils.random(2.6, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15,
      });

      
      gsap.to(icon, {
        boxShadow: "0 0 28px rgba(59,130,246,0.35)",
        duration: 1.8 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.25,
      });

      
      gsap.to(icon, {
        scale: 1.08,
        duration: 1.6 + i * 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });

    

    const headerEls = root.querySelectorAll(".hl-head-anim");
    const cards = root.querySelectorAll(".hl-card");

    if (!("IntersectionObserver" in window)) return;

    
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              headerEls,
              { y: 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
              }
            );
            headerObserver.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { y: 36, opacity: 0, scale: 0.98 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                overwrite: "auto",
              }
            );
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    headerEls.forEach((el) => headerObserver.observe(el));
    cards.forEach((c) => cardObserver.observe(c));

    // cleanup
    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={scope}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        
        <div className="hl-head-anim inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          <Sparkles size={16} />
          Our Highlights
        </div>

        <h2 className="hl-head-anim text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-slate-900">
          What Makes Us Different
        </h2>

        <p className="hl-head-anim text-slate-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Learn with a system built for real growth, not just theory.
        </p>

        
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const { Icon, theme } = item;
            return (
              <div
                key={item.title}
                className={`hl-card group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br ${theme.bg}
                border border-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ring-1 ${theme.ring}`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${theme.glow}
                  blur-2xl opacity-0 group-hover:opacity-100 transition`}
                />

                <div className="flex justify-center mb-4">
                  
                  <div
                    className={`hl-icon h-14 w-14 rounded-xl ${theme.iconBg} grid place-items-center`}
                  >
                    <Icon className={`w-8 h-8 ${theme.iconText}`} />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-5 h-1 w-16 mx-auto rounded-full bg-slate-900/10 group-hover:bg-slate-900/20 transition" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
