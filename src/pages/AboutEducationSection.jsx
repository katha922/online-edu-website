import {
  BadgeCheck,
  Globe2,
  Users,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function AboutEducationSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-100 blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        <div className="lg:col-span-5">
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop"
                alt="Classroom"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />

              
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-4 py-3 rounded-2xl shadow-lg">
                <p className="text-xs opacity-90">Trusted by</p>
                <p className="text-xl font-bold leading-none">2K+ Students</p>
              </div>
            </div>

            
            <div className="absolute -top-6 sm:-top-10 right-0 sm:right-2 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="absolute bottom-[-22px] sm:bottom-[-28px] right-6 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Team learning"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="absolute top-[45%] left-[-10px] sm:left-[-18px] w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-[5px] border-white shadow-lg overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-7">
          
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            ABOUT US
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
            Our Education System <br className="hidden sm:block" />
            Inspires You More.
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Zero Idea Academy offers hands-on, beginner-friendly learning with real
            projects, mentor support, and a community that helps you grow faster.
            We focus on skills you can use immediately in freelancing or jobs.
          </p>

          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={BadgeCheck}
              title="Expert-led Courses"
              text="Learn from industry pros with step-by-step, practical guidance."
              accent="bg-amber-500/10 text-amber-700"
            />

            <FeatureCard
              icon={Globe2}
              title="Global Community"
              text="Connect with mentors & students from different backgrounds."
              accent="bg-sky-500/10 text-sky-700"
            />

            <FeatureCard
              icon={Users}
              title="Career Support"
              text="Freelancing help, portfolio review, and job-ready training."
              accent="bg-emerald-500/10 text-emerald-700"
            />

            <FeatureCard
              icon={BadgeCheck}
              title="Lifetime Access"
              text="Get recorded content & community access even after finishing."
              accent="bg-violet-500/10 text-violet-700"
            />
          </div>

          
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-xl font-semibold shadow hover:bg-amber-600 transition"
            >
              Discover More <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-slate-900/10 grid place-items-center">
                <PhoneCall size={18} className="text-slate-900" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Call us anytime</p>
                <p className="font-bold text-slate-900">+880 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FeatureCard({ icon: Icon, title, text, accent }) {
  return (
    <div className="flex gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
      <div className={`h-11 w-11 rounded-xl grid place-items-center ${accent}`}>
        <Icon size={20} />
      </div>

      <div>
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          {title}
        </h4>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
