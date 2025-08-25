"use client";

import { motion, type Variants, type Transition } from "framer-motion";

const headingWords = ["Crafting", "Passion", "With", "Elegance"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
};

const paragraphVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 0.8,
      ease: "easeOut" satisfies Transition["ease"],
    },
  },
};

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

const caretVariants: Variants = {
  blink: {
    opacity: [0, 1, 0],
    transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: EASE },
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative 
        min-h-[100dvh] md:min-h-[100vh] 
        bg-gray-900 text-white 
        flex flex-col justify-center items-center text-center 
        px-4 overflow-hidden
        pt-16 md:pt-0
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 opacity-80 z-0" />

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
        <motion.h1
          className="
            text-[32px] sm:text-5xl md:text-6xl lg:text-7xl
            font-bold leading-snug sm:leading-tight md:leading-tight
            mb-3 sm:mb-4 tracking-tight text-amber-100
            mx-auto max-w-none
            inline-flex items-baseline gap-x-2
            whitespace-nowrap
          "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={headingWords.join(" ")}
        >
          {headingWords.map((word, i) => (
            <motion.span key={`w-${i}`} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={caretVariants}
            animate="blink"
            aria-hidden
            className="inline-block ml-1 w-[2px] h-[1em] bg-amber-200 align-middle"
          />
        </motion.h1>

        <motion.p
          variants={paragraphVariant}
          initial="hidden"
          animate="visible"
          className="
            text-sm sm:text-base md:text-xl
            text-stone-300 mx-auto max-w-[36ch] sm:max-w-2xl
            mb-6 sm:mb-8
          "
        >
          Discover timeless designs and unique creations that bring elegance to your lifestyle. Crafted with
          skill, love, and attention to every detail.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            className="bg-amber-700 cursor-pointer hover:bg-amber-800 text-white font-semibold py-2 px-4 text-xs rounded-md transition-colors duration-200 shadow-lg sm:py-3 sm:px-6 sm:text-sm md:text-base md:px-8"
          >
            Explore Collection
          </button>
          <button
            className="bg-transparent cursor-pointer hover:bg-opacity-10 text-stone-300 font-semibold py-2 px-4 text-xs rounded-md transition-colors duration-200 border border-stone-600 sm:py-3 sm:px-6 sm:text-sm md:text-base md:px-8"
          >
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
