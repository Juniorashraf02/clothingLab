export default function InfoSection() {
  return (
    <section className="w-full bg-[#FFF9E6] dark:bg-[#111010] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-16">

        {/* Text */}
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C0392B] dark:text-[#B8955A] mb-4">
            About Us
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl font-bold text-[#1A0A00] dark:text-[#F7F3EE] leading-tight mb-4"
          >
            Hey there!
          </h2>
          {/* Yellow accent line */}
          <div className="w-10 h-[3px] bg-[#F5C518] dark:bg-[#B8955A] mb-6" />
          <p className="text-[15px] text-[#7A5C50] dark:text-[#9A918A] leading-[1.85] max-w-lg mb-8">
            Discover the latest trends in fashion and style. At Clothing Lab, we bring you a
            curated collection that combines comfort, quality, and style. Whether you're looking
            for casual wear, formal attire, or something in between — we've got you covered.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 border-2 border-[#C0392B] dark:border-[#B8955A] text-[#C0392B] dark:text-[#B8955A] text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#C0392B] dark:hover:bg-[#B8955A] hover:text-white dark:hover:text-[#111010] transition-all duration-200"
          >
            New Arrivals
          </a>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
          {[
            { num: "Lots of", label: "Products" },
            { num: "Good", label: "Rating" },
            { num: "Quality", label: "Top Tier level" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center bg-white dark:bg-[#1E1B18] border border-[#F0D6C8] dark:border-[#2E2A26] border-t-[3px] border-t-[#C0392B] dark:border-t-[#B8955A] px-8 py-8 min-w-[130px]"
            >
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl font-bold text-[#C0392B] dark:text-[#B8955A]"
              >
                {s.num}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#7A5C50] dark:text-[#9A918A]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
