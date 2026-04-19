"use client";

const words = ["Less", "Noise.", "More", "Style."];

export default function Banner() {
  return (
    <div className="relative z-10 px-6 md:px-12 max-w-3xl">
      {/* Tag */}
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C518] dark:text-[#B8955A] mb-6">
        New Collection — 2026
      </p>

      {/* Animated headline */}
      <h1
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-6xl md:text-8xl font-bold leading-[1.02] flex flex-wrap gap-x-5 mb-6 text-white"
      >
        {words.map((word, wi) => (
          <span key={wi} className="flex">
            {word.split("").map((char, ci) => (
              <span
                key={ci}
                style={wi % 2 === 1 ? { color: '#F5C518' } : {}}
                className={`inline-block transition-transform duration-500 hover:-translate-y-4 dark:${wi % 2 === 1 ? 'text-[#B8955A]' : 'text-white'}`}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-8">
        Curated clothing that combines comfort, quality, and style — crafted for Bangladesh.
      </p>

      <div className="flex items-center gap-5">
        <a
          href="/products"
          className="inline-block px-7 py-3 bg-[#F5C518] dark:bg-[#B8955A] text-[#1A0A00] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#D4A017] dark:hover:bg-[#C4A882] transition-colors duration-200"
        >
          Explore Collection
        </a>
        <a
          href="/about"
          className="text-xs font-medium uppercase tracking-[0.1em] text-white/55 hover:text-white transition-colors duration-200 underline underline-offset-4"
        >
          Our Story
        </a>
      </div>
    </div>
  );
}
