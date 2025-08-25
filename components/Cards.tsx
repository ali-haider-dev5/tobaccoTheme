"use client";
import Image from "next/image";

type Card = {
  id: number;
  image: string;
  title: string;
  blurb: string;
};

const cards: Card[] = [
  { id: 1, image: "/images/tobacco-1.webp", title: "Hand-Rolled Craft", blurb: "Traditional workmanship refined with modern tooling." },
  { id: 2, image: "/images/tobacco-2.webp", title: "Aged to Perfection", blurb: "Warm tones, precise finishes, timeless feel." },
  { id: 3, image: "/images/tobacco-3.webp", title: "Artisan Materials", blurb: "Stone, wood & brass — built to last." },
  { id: 4, image: "/images/tobacco-4.webp", title: "Heritage Details", blurb: "Every edge, every seam, deliberately made." },
];

export default function TobaccoCards() {
  return (
    <section className="relative w-full bg-[#f7f3e9] py-16">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-700">Our Heritage Collection</h2>
        <p className="mt-3 text-stone-700/90 max-w-2xl mx-auto">
          Barrel-aged character, hand-finished surfaces, and a tobacco-inspired
          palette designed for warm, authentic spaces.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <article
            key={c.id}
            className="
              group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/60 bg-stone-100
              transition-all duration-500 hover:shadow-xl
            "
          >
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                priority={c.id === 1}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:blur-sm"
              />

              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              <div
                className="
                  absolute bottom-0 left-0 right-0
                  opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 ease-out
                "
              >
                <div className="flex items-end gap-4 justify-between px-5 pb-5">
                  <div className="min-w-0">
                    <h3 className="text-white text-lg font-semibold drop-shadow truncate">
                      {c.title}
                    </h3>
                    <p className="text-stone-200 text-sm mt-1 line-clamp-2">
                      {c.blurb}
                    </p>
                  </div>

                  <a
                    href="#"
                    aria-label={`Read more about ${c.title}`}
                    className="
                      shrink-0 inline-flex items-center gap-2 rounded-xl
                      bg-white/10 text-white backdrop-blur-sm
                      border border-white/20
                      px-4 py-2 text-sm font-medium
                      hover:bg-white/15 transition
                    "
                  >
                    Read more
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <span
              aria-hidden
              className="
                absolute inset-0 rounded-2xl
                ring-0 group-hover:ring-2 group-hover:ring-amber-500/40
                transition-all duration-500 pointer-events-none
              "
            />
          </article>
        ))}
      </div>
    </section>
  );
}
