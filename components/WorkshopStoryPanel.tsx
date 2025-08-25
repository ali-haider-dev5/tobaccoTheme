"use client";
import Image from "next/image";

export default function TobaccoStorySection() {
  return (
    <section className="relative w-full bg-[#ede3d2] py-16">
      <div
        className="
          container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 
          items-center gap-10 relative
        "
      >
        <div className="relative z-10">
          <p className="uppercase tracking-[0.25em] text-sm text-amber-500 mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-stone-900">
            Not Just Boards— <span className="text-amber-700">Character</span> You Can Use
          </h2>

          <div className="mt-5 space-y-4 text-stone-700">
            <p>
              We turn old bourbon barrels into everyday pieces with
              <span className="font-semibold text-amber-700">purpose</span>. Each batch is
              small, and every surface is hand-finished.
            </p>
            <p>
              The story starts in small-town workshops where
              <span className="underline decoration-amber-600 decoration-2 underline-offset-4">
                reclaimed white oak
              </span>
              meets
              <span className="underline decoration-amber-600 decoration-2 underline-offset-4">
                solid brass
              </span>
              —kept honest with minimal processing.
            </p>
            <p>
              We don’t chase perfection; we celebrate
              <span className="font-semibold text-amber-700">patina</span> and the marks of
              real work.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-amber-600 text-amber-50 font-semibold
                shadow-lg shadow-amber-600/30
                border border-amber-700/40
                hover:bg-amber-500 transition
              "
            >
              Explore the Workshop
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#5c3a2e]/90 text-amber-50 shadow-lg">
            <h3 className="text-lg font-semibold mb-3">What Sets Us Apart</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Low-heat curing for a satin, food-safe finish.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Hand-burnished edges; tight-tolerance joinery.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Small-batch runs with maker’s stamp and batch ID.
              </li>
            </ul>
            <p className="mt-4 text-xs text-amber-200">
              Built in limited quantities. Expect natural variation—no two pieces are
              identical.
            </p>
          </div>
        </div>

        <div className="relative h-[480px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/tobacco-1.webp"
            alt="Workshop background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#5c3a2e]/80 via-[#5c3a2e]/30 to-transparent" />
          <span className="absolute top-6 left-6 h-6 w-6 border-t-2 border-l-2 border-amber-500/80 rounded-tl-md" />
          <span className="absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-amber-500/80 rounded-br-md" />
        </div>
      </div>
    </section>
  );
}
