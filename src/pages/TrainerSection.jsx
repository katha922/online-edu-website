import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrainerSection() {
  
  const trainers = useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        role: "Digital Marketing Trainer",
        bio: "Expert in Facebook Ads, SEO & marketing strategy.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
      {
        id: 2,
        name: "Maria Smith",
        role: "Web Development Trainer",
        bio: "Specialist in MERN Stack, Next.js & frontend engineering.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
      {
        id: 3,
        name: "Alex Johnson",
        role: "Video Editing Coach",
        bio: "Motion design, Premiere Pro & After Effects specialist.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
      {
        id: 4,
        name: "Sarah William",
        role: "Graphic Design Trainer",
        bio: "Brand identity, UI/UX & digital design expert.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
      {
        id: 5,
        name: "David Miller",
        role: "Freelancing Mentor",
        bio: "Upwork, Fiverr strategy & client communication.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
      {
        id: 6,
        name: "Sophia Khan",
        role: "Content Marketing Coach",
        bio: "Content strategy, blogging & storytelling expert.",
        img: "https://i.ibb.co/gZNTDJxP/profile-pic.webp",
      },
    ],
    []
  );

  
  const trainersPerSlide = 3;
  const totalSlides = Math.ceil(trainers.length / trainersPerSlide);

  const [current, setCurrent] = useState(0); 
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef(null);

  
  const nextSlide = () => {
    setCurrent((prev) =>
      prev + trainersPerSlide >= trainers.length ? 0 : prev + trainersPerSlide
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? trainers.length - trainersPerSlide : prev - trainersPerSlide
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex * trainersPerSlide);
  };

  
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, trainers.length]);

  
  const visibleTrainers = [];
  for (let i = 0; i < trainersPerSlide; i++) {
    visibleTrainers.push(trainers[(current + i) % trainers.length]);
  }

  const activeDot = Math.floor(current / trainersPerSlide);

  return (
    <section className="py-14 sm:py-20 px-4 bg-[#0D1B2A] mt-10">
      <div className="max-w-7xl mx-auto text-center text-white">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
          Meet Our Expert Trainers
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Learn directly from top industry professionals.
        </p>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          
          <button
            aria-label="Previous trainers"
            onClick={prevSlide}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur p-3 rounded-full transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            aria-label="Next trainers"
            onClick={nextSlide}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur p-3 rounded-full transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {visibleTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white p-6 rounded-2xl shadow-xl text-gray-900 
                           hover:-translate-y-1 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/150?text=Trainer";
                  }}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover border-4 border-slate-100"
                />
                <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
                <p className="text-blue-600 font-semibold text-sm sm:text-base">
                  {trainer.role}
                </p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeDot ? "bg-white scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
