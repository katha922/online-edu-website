import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import bgPicture from "../assets/banner.jpg";

import {
  Code2,
  GraduationCap,
  Sparkles,
  Rocket,
  PenTool,
  Video,
  LineChart,
  Globe,
} from "lucide-react";

import Contact from "./Contact";
import ContactActions from "./ContactActions";
import Courses from "./Courses";
import CustomServiceSection from "./CustomServiceSection";
import Highlights from "./Highlights";
import LiveCourseExtras from "./LiveCourseExtras";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TrainerSection from "./TrainerSection";
import AboutEducationSection from "./AboutEducationSection";
import StatsSection from "./StatsSection";
import TestimonialsHero from "./TestimonialsHero";

export default function Home() {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".hero-badge", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".hero-sub", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".hero-btn", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.45,
      });

      
      gsap.to(".float-1", {
        y: -24,
        x: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-2", {
        y: 22,
        x: -12,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-3", {
        y: -18,
        x: -8,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-4", {
        y: 26,
        x: 14,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-5", {
        y: -20,
        x: 6,
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-6", {
        y: 16,
        x: -10,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-7", {
        y: -14,
        x: 12,
        duration: 6.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-8", {
        y: 18,
        x: -6,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope}>
      
      <section
        className="relative isolate overflow-hidden bg-cover bg-center min-h-[75vh] md:min-h-[92vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        style={{ backgroundImage: `url(${bgPicture})` }}
      >
        
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]" />

        
        <div className="pointer-events-none absolute inset-0">
          
          <div className="float-1 absolute top-16 left-6 sm:left-10 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <Code2 className="w-6 h-6 text-sky-700" />
          </div>
          <div className="float-2 absolute top-44 left-10 sm:left-20 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <GraduationCap className="w-6 h-6 text-violet-700" />
          </div>
          <div className="float-3 absolute bottom-24 left-5 sm:left-14 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <LineChart className="w-6 h-6 text-emerald-700" />
          </div>

          
          <div className="float-4 absolute top-24 right-6 sm:right-10 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <Rocket className="w-6 h-6 text-orange-700" />
          </div>
          <div className="float-5 absolute top-52 right-10 sm:right-20 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <PenTool className="w-6 h-6 text-pink-700" />
          </div>
          <div className="float-6 absolute bottom-28 right-6 sm:right-14 bg-white/70 rounded-2xl p-3 shadow-lg border border-white">
            <Video className="w-6 h-6 text-indigo-700" />
          </div>

          
          <div className="float-7 absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="float-8 absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        
        <div className="relative max-w-4xl mx-auto">
          
          <div className="hero-badge inline-flex items-center gap-2 bg-white/80 text-slate-900 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow border border-white">
            <Sparkles className="w-4 h-4 text-sky-600" />
            Zero Idea Academy — Learn Skills That Pay
          </div>

          <h1 className="hero-title mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-[1.2] text-slate-900">
            Upgrade Your Skills &{" "}
            <br className="hidden sm:block" />
            Build Your{" "}
            <span className="inline-block border-2 sm:border-4 border-orange-500 rounded-full px-2 sm:px-3 bg-white/70">
              Future.
            </span>
          </h1>

          <p className="hero-sub mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-700">
            Learn Digital Skills, Web Development, Design, Marketing, and More —
            All in One Place.
          </p>

          
          <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="/courses"
              className="hero-btn w-full sm:w-auto bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-sky-600 transition"
            >
              Explore Courses
            </a>

            <a
              href="/services"
              className="hero-btn w-full sm:w-auto border border-sky-500 text-sky-700 bg-white/80 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition shadow"
            >
              Our Services
            </a>
          </div>

          
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm text-slate-800">
            <div className="bg-white/80 border border-white rounded-xl py-3 shadow-sm flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-sky-700" />
              Learn from anywhere
            </div>
            <div className="bg-white/80 border border-white rounded-xl py-3 shadow-sm flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Industry-ready skills
            </div>
            <div className="bg-white/80 border border-white rounded-xl py-3 shadow-sm flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4 text-violet-700" />
              Beginner friendly
            </div>
          </div>
        </div>
      </section>

      
      <Highlights />
      <AboutEducationSection></AboutEducationSection>
      <Courses />
      <LiveCourseExtras />
      <StatsSection></StatsSection>
      <Services />
      <CustomServiceSection />
      <TestimonialsHero></TestimonialsHero>
      <ContactActions />
      <Testimonials />
      <TrainerSection />
      <Contact />
    </div>
  );
}
