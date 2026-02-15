import { MessageCircle, Facebook, Mail, Sparkles } from "lucide-react";

export default function ContactActions() {
  const actions = [
    {
      label: "WhatsApp",
      href: "https://wa.me/8801XXXXXXXXX",
      icon: MessageCircle,
      bg: "bg-emerald-600",
      hover: "hover:bg-emerald-700",
      ring: "ring-emerald-200/60",
      note: "Fastest response",
      external: true,
    },
    {
      label: "Facebook",
      href: "https://m.me/yourpageusername",
      icon: Facebook,
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      ring: "ring-blue-200/60",
      note: "Chat with our team",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:your@email.com",
      icon: Mail,
      bg: "bg-slate-900",
      hover: "hover:bg-black",
      ring: "ring-slate-200/60",
      note: "For detailed queries",
      external: false,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#200633] via-[#3B0F66] to-[#4A148C]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.35),transparent_60%)]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            <Sparkles size={16} />
            Contact & Support
          </div>

          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-slate-900">
            Get In Touch
          </h2>
          <p className="text-slate-700 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Our team is always here to help. Reach us instantly through any channel.
          </p>

          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {actions.map((a) => {
              const Icon = a.icon;
              return (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noreferrer" : undefined}
                  className={`group relative overflow-hidden rounded-2xl ${a.bg} ${a.hover} text-white p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ring-1 ${a.ring}`}
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-white/15 grid place-items-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold leading-tight">
                        {a.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                        {a.note}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          
          <p className="mt-6 text-xs sm:text-sm text-slate-600">
            Support hours: 10:00 AM – 10:00 PM (Everyday)
          </p>
        </div>
      </div>
    </section>
  );
}
