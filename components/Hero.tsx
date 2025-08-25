"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import Image from "next/image";

const headingText = "Use Crafting\nTradition";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const paragraphVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeOut" satisfies Transition["ease"], // ✅ valid easing
    },
  },
};
const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
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

      <div className="relative z-10 container mx-auto flex h-full flex-col md:flex-row items-center justify-center">
        <div className="flex-1 text-center md:text-left md:pr-10 max-w-xl px-1">
          <span
            className="
              relative z-20 inline-block
              bg-stone-900/70 backdrop-blur-[2px]
              text-stone-50
              text-[12px] sm:text-xs
              px-3 py-1 rounded-full 
              mb-4 sm:mb-6 font-medium tracking-wide uppercase
              ring-1 ring-stone-600/60 shadow-sm
            "
          >
            Handcrafted Excellence & Since 1985
          </span>

          <motion.h1
            className="
              text-[28px] sm:text-4xl md:text-6xl lg:text-7xl
              font-bold leading-snug sm:leading-tight md:leading-tight
              mb-3 sm:mb-4 tracking-tight text-amber-100 whitespace-pre-line
              mx-auto md:mx-0 max-w-[22ch]
            "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[...headingText].map((char, i) =>
              char === "\n" ? (
                <br key={`br-${i}`} />
              ) : (
                <motion.span key={`ch-${i}`} variants={letterVariants}>
                  {char}
                </motion.span>
              )
            )}
          </motion.h1>

          <motion.p
            variants={paragraphVariant}
            initial="hidden"
            animate="visible"
            className="
              text-sm sm:text-base md:text-xl
              text-stone-300 mx-auto md:mx-0 max-w-[36ch] sm:max-w-2xl
              mb-6 sm:mb-8
            "
          >
            Where traditional artistry meets contemporary design. Every piece
            tells a story of dedication, precision, and time-honored techniques
            passed down through generations.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-amber-700 cursor-pointer hover:bg-amber-800 text-white font-semibold py-2 px-4 text-xs rounded-md transition-colors duration-200 shadow-lg sm:py-3 sm:px-6 sm:text-sm md:text-base md:px-8">
              Explore Collection
            </button>
            <button className="bg-transparent cursor-pointer  hover:bg-opacity-10 text-stone-300 font-semibold py-2 px-4 text-xs rounded-md transition-colors duration-200 border border-stone-600 sm:py-3 sm:px-6 sm:text-sm md:text-base md:px-8">
              Our Story
            </button>
          </div>
        </div>

        <div className="flex justify-end items-end mt-8 md:mt-0 md:flex-1">
          <Image
            src="/images/tobacco-gif-placeholder.gif"
            alt="Tobacco-themed GIF"
            width={500}
            height={500}
            className="rounded-lg w-[180px] sm:w-[260px] md:w-[360px] lg:w-[420px] h-auto object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
