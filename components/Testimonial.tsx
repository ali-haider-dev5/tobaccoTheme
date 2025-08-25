"use client";

import { LazyMotion, domAnimation, m, Variants } from "framer-motion";

type Testimonial = { quote: string; name: string; role: string };

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The craftsmanship is simply outstanding. Every board feels like it has a story to tell.",
    name: "Emily R.",
    role: "Chef & Restaurateur",
  },
  {
    quote:
      "I love how the reclaimed bourbon barrels are given new life. The patina is just gorgeous.",
    name: "David S.",
    role: "Interior Designer",
  },
  {
    quote:
      "Durable, timeless, and beautiful—Buford Workshop has truly elevated our kitchen aesthetic.",
    name: "Sophia M.",
    role: "Homeowner",
  },
];

const headingV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const containerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, when: "beforeChildren" } },
};

const cardV: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#f7f3e9] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_120%_-10%,rgba(92,58,46,0.08),transparent)]" />

      <div className="container mx-auto px-6 text-center mb-12">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-3"
          >

            <m.h2
              variants={headingV}
              className="text-3xl md:text-4xl font-bold text-amber-700"
            >
              What Our Customers Say
            </m.h2>

            <m.p
              variants={headingV}
              className="text-stone-700/90 max-w-2xl mx-auto"
            >
              Real stories from real people—celebrating the heritage and character
              in every crafted piece.
            </m.p>
          </m.div>
        </LazyMotion>
      </div>

      <LazyMotion features={domAnimation}>
        <m.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <m.article
              key={i}
              variants={cardV}
              whileHover={{ y: -4 }}
              className="
                group relative overflow-hidden rounded-2xl border border-stone-200/70 bg-white
                shadow-sm transition-all duration-400 p-6 flex flex-col justify-between
                will-change-transform will-change-opacity
              "
            >
              <div className="absolute -top-1 -left-1 p-4 text-amber-500/30">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                  <path d="M7 11h3v7H4v-5c0-3.31 2.69-6 6-6v3c-1.66 0-3 1.34-3 3Zm10-3v3c-1.66 0-3 1.34-3 3v4h6v-5c0-3.31-2.69-6-6-6Z"/>
                </svg>
              </div>

              <p className="text-stone-700 text-lg md:text-xl italic leading-relaxed relative z-10">
                “{t.quote}”
              </p>

              <div className="mt-6 text-left relative z-10">
                <p className="text-amber-700 font-semibold">{t.name}</p>
                <p className="text-sm text-stone-500">{t.role}</p>
              </div>

              <span
                aria-hidden
                className="
                  pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
                  bg-gradient-to-r from-white/5 via-white/30 to-white/5
                  skew-x-[-20deg] opacity-0
                  group-hover:opacity-100 group-hover:translate-x-[260%]
                  transition-all duration-700 ease-out
                  mix-blend-soft-light
                "
              />

              <span
                aria-hidden
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  ring-0 group-hover:ring-2 group-hover:ring-transparent
                  before:absolute before:inset-[-1px] before:rounded-2xl
                  before:bg-[conic-gradient(from_180deg,transparent,rgba(245,158,11,.28),transparent)]
                  before:opacity-0 group-hover:before:opacity-100
                  transition-all duration-500
                "
              />
            </m.article>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
