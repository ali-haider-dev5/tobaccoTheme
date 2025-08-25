"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  src: string;
  title: string;
  subtitle?: string;
};

type TabKey = "craft" | "materials" | "finish" | "care";

const slides: Slide[] = [
  {
    id: 1,
    src: "/images/tobacco-1.webp",
    title: "Hand-Rolled Craft",
    subtitle: "Precision with a human touch",
  },
  {
    id: 2,
    src: "/images/tobacco-2.jpg",
    title: "Aged Barrels",
    subtitle: "Warm notes, deep character",
  },
  {
    id: 3,
    src: "/images/tobacco-3.jpg",
    title: "Stone & Brass",
    subtitle: "Durable, timeless accents",
  },
  {
    id: 4,
    src: "/images/tobacco-4.jpg",
    title: "Heritage Grain",
    subtitle: "Every line tells a story",
  },
];

const tabContent: Record<
  TabKey,
  {
    label: string;
    heading: string;
    body: string;
    bullets: string[];
    cta?: string;
  }
> = {
  craft: {
    label: "Craft",
    heading: "Heritage Craftsmanship",
    body: "Every piece is hand-finished to preserve natural grain and patina. Subtle imperfections are embraced as signatures of authenticity.",
    bullets: [
      "Edge-burnished by hand",
      "Tight tolerance joinery",
      "Heat-set wax conditioning",
    ],
    cta: "Explore the Craft",
  },
  materials: {
    label: "Materials",
    heading: "Sourced, Not Simulated",
    body: "We reclaim bourbon barrels and pair them with solid brass and river stone—kept honest through minimal processing.",
    bullets: [
      "Reclaimed white oak staves",
      "Solid C360 brass accents",
      "Locally quarried stone",
    ],
    cta: "View Materials",
  },
  finish: {
    label: "Finish",
    heading: "Cured to Last",
    body: "A layered finishing workflow cures in low heat to seal pores while maintaining the tobacco-brown warmth.",
    bullets: [
      "Low-heat curing cycles",
      "Satin micro-sheen",
      "Food-safe oil blend",
    ],
    cta: "See the Finish",
  },
  care: {
    label: "Care",
    heading: "Care & Patina",
    body: "A light oil wipe restores luster. Expect a richer tone with use—the kind of patina you can’t fake.",
    bullets: [
      "Quarterly oil touch-ups",
      "Avoid standing water",
      "Buff with soft cloth",
    ],
    cta: "Care Guide",
  },
};

export default function TobaccoSplitShowcase() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<TabKey>("craft");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]);

  const handlePrev = () =>
    setActive((p) => (p - 1 + slides.length) % slides.length);
  const handleNext = () => setActive((p) => (p + 1) % slides.length);

  const tc = tabContent[tab];

  return (
    <section className="w-full bg-[#f7f3e9] py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="relative rounded-2xl overflow-hidden border border-stone-200/70 bg-stone-50">
          <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
            {slides.map((s, i) => {
              const isActive = i === active;
              const isPrev = i === (active - 1 + slides.length) % slides.length;
              const isNext = i === (active + 1) % slides.length;
              return (
                <div
                  key={s.id}
                  className={[
                    "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)]",
                    isActive
                      ? "opacity-100 scale-100 z-20"
                      : "opacity-0 scale-95 z-10",
                    isPrev ? "-translate-x-6" : "",
                    isNext ? "translate-x-6" : "",
                  ].join(" ")}
                >
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5c3a2e]/70 via-[#5c3a2e]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="backdrop-blur-sm bg-stone-900/30 rounded-xl p-4 border border-white/10">
                      <h3 className="text-amber-100 font-semibold text-lg">
                        {s.title}
                      </h3>
                      {s.subtitle && (
                        <p className="text-amber-50/90 text-sm mt-1">
                          {s.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fdfaf5] border border-stone-200 shadow-sm flex items-center justify-center hover:bg-amber-100 transition z-30"
          >
            <span className="text-xl text-amber-800">‹</span>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fdfaf5] border border-stone-200 shadow-sm flex items-center justify-center hover:bg-amber-100 transition z-30"
          >
            <span className="text-xl text-amber-800">›</span>
          </button>

          {/* <div className="absolute bottom-3 w-full flex justify-center gap-2 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all",
                  active === i ? "bg-amber-500 scale-110" : "bg-stone-500/80",
                ].join(" ")}
              />
            ))}
          </div> */}
        </div>

        <div className="relative">
          <div className="mb-5">
            <h2 className="text-3xl font-bold text-amber-700">
              The Tobacco Standard
            </h2>
            <p className="mt-2 text-stone-700/90">
              A two-part showcase: curated imagery on the left, and on the
              right, technical details you can skim at a glance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {(Object.keys(tabContent) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                  tab === k
                    ? "bg-[#5c3a2e] text-amber-50 border-[#5c3a2e]"
                    : "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100",
                ].join(" ")}
                aria-pressed={tab === k}
              >
                {tabContent[k].label}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-stone-200/70 bg-white">
            <div className="h-1 w-full bg-gradient-to-r from-[#5c3a2e] via-amber-600 to-[#5c3a2e]" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-800">
                {tc.heading}
              </h3>
              <p className="mt-2 text-stone-700 leading-relaxed">{tc.body}</p>

              <ul className="mt-4 space-y-2">
                {tc.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                    <span className="text-stone-800 text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              {tc.cta && (
                <div className="mt-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5c3a2e] text-amber-50 border border-[#5c3a2e] hover:bg-[#4b3026] transition"
                  >
                    {tc.cta}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_120%_-10%,rgba(92,58,46,0.12),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
