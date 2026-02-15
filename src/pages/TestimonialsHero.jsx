export default function TestimonialsHero() {
  const people = [
    { id: 1, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop" },
    { id: 2, img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop" },
    { id: 3, img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=900&auto=format&fit=crop" },
    { id: 4, img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=900&auto=format&fit=crop" },
    { id: 5, img: "https://images.unsplash.com/photo-1544725121-9293bb89b9b8?q=80&w=900&auto=format&fit=crop" },
    { id: 6, img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=900&auto=format&fit=crop" },
    { id: 7, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop" },
    { id: 8, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop" },
    { id: 9, img: "https://images.unsplash.com/photo-1544723495-432537d12f6c?q=80&w=900&auto=format&fit=crop" },
    { id: 10, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop" },
    { id: 11, img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop" },
    { id: 12, img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=900&auto=format&fit=crop" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#eef2ff,transparent_55%),radial-gradient(ellipse_at_bottom,#f0fdf4,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

      
      <div className="pointer-events-none absolute inset-0">
        
        <Avatar img={people[0].img} className="top-8 left-3 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 rotate-[-6deg]" delay="0s" />
        <Avatar img={people[1].img} className="top-20 left-20 sm:left-28 w-20 h-24 sm:w-24 sm:h-28 rotate-[4deg]" delay="0.6s" />
        <Avatar img={people[2].img} className="top-8 left-40 sm:left-56 w-16 h-20 sm:w-20 sm:h-24 rotate-[-2deg]" delay="1s" />

        
        <Avatar img={people[3].img} className="top-6 left-1/2 -translate-x-1/2 w-20 h-24 sm:w-24 sm:h-28" delay="0.4s" />

        
        <Avatar img={people[4].img} className="top-8 right-40 sm:right-56 w-16 h-20 sm:w-20 sm:h-24 rotate-[3deg]" delay="0.8s" />
        <Avatar img={people[5].img} className="top-20 right-20 sm:right-28 w-20 h-24 sm:w-24 sm:h-28 rotate-[-4deg]" delay="0.2s" />
        <Avatar img={people[6].img} className="top-8 right-3 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rotate-[5deg]" delay="1.1s" />

        
        <Avatar img={people[7].img} className="top-44 sm:top-56 left-0 sm:left-6 w-16 h-20 sm:w-20 sm:h-24 rotate-[2deg]" delay="0.5s" />
        <Avatar img={people[8].img} className="top-44 sm:top-56 right-0 sm:right-6 w-16 h-20 sm:w-20 sm:h-24 rotate-[-2deg]" delay="0.9s" />

        
        <Avatar img={people[9].img} className="bottom-10 left-6 sm:left-20 w-20 h-24 sm:w-24 sm:h-28 rotate-[4deg]" delay="0.3s" />
        <Avatar img={people[10].img} className="bottom-6 left-1/3 w-16 h-20 sm:w-20 sm:h-24 rotate-[-4deg]" delay="0.7s" />

        
        <Avatar img={people[11].img} className="bottom-6 right-1/3 w-16 h-20 sm:w-20 sm:h-24 rotate-[4deg]" delay="0.6s" />
        <Avatar img={people[3].img} className="bottom-10 right-6 sm:right-20 w-20 h-24 sm:w-24 sm:h-28 rotate-[-6deg]" delay="1.2s" />
      </div>

      
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full shadow-sm">
          Testimonials
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Trusted by leaders
          <br className="hidden sm:block" />
          <span className="text-slate-500 font-extrabold">
            from various industries
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Learn why professionals trust Zero Idea Academy to upgrade their skills
          and achieve real-world success with confidence.
        </p>

        <a
          href="/testimonials"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300"
        >
          Read Success Stories →
        </a>
      </div>
    </section>
  );
}


function Avatar({ img, className = "", delay = "0s" }) {
  return (
    <div
      className={`absolute rounded-2xl overflow-hidden border border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] float-soft ${className}`}
      style={{ animationDelay: delay }}
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
      
      <div className="absolute inset-0 ring-1 ring-black/5" />
    </div>
  );
}
