"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/tobacco-1.webp",
    title: "Hand-Rolled Craft",
    subtitle: "Tradition refined with modern design",
  },
  {
    id: 2,
    image: "/images/tobacco-2.jpg",
    title: "Aged to Perfection",
    subtitle: "Warm tones, precise finishes, timeless feel",
  },
  {
    id: 3,
    image: "/images/tobacco-3.jpg",
    title: "Artisan Materials",
    subtitle: "Stone, wood & brass — built to last",
  },
];

export default function CreativeCarousel() {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [active]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[750px] pt-32 py-16 overflow-hidden bg-[#f7f3e9]">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-4xl  font-bold text-amber-700 mb-8">
          Our Heritage Collection
        </h1>
      </div>

      <div className="flex justify-center items-center relative">
        {slides.map((s, i) => {
          const isActive = i === active;
          const isPrev = i === (active - 1 + slides.length) % slides.length;
          const isNext = i === (active + 1) % slides.length;

          return (
            <div
              key={s.id}
              className={` 
                absolute transition-all duration-700 top-0 ease-in-out 
                ${
                  isActive
                    ? "scale-100 z-20 opacity-100"
                    : "scale-75 opacity-60"
                } 
                ${isPrev ? "-translate-x-[65%] z-10" : ""} 
                ${isNext ? "translate-x-[65%] z-10" : ""} 
                ${!isActive && !isPrev && !isNext ? "opacity-0" : ""}
              `}
            >
              <div className="relative w-[90vw] sm:w-[700px] h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {" "}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-0 w-full p-6 backdrop-blur-sm bg-stone-900/30 rounded-t-2xl">
                  <h2 className="text-3xl font-bold text-amber-100 drop-shadow">
                    {s.title}
                  </h2>
                  <p className="text-stone-300 text-lg">{s.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={handlePrev}
      >
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fdfaf5] shadow-md border border-stone-200 hover:bg-amber-100 transition">
          <span className="text-2xl text-amber-700">‹</span>
        </button>
      </div>

      <div
        className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={handleNext}
      >
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fdfaf5] shadow-md border border-stone-200 hover:bg-amber-100 transition">
          <span className="text-2xl text-amber-700">›</span>
        </button>
      </div>

      <div className="absolute bottom-6 flex justify-center gap-2 w-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              active === i ? "bg-amber-500" : "bg-stone-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
