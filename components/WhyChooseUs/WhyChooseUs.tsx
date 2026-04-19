import AboutPoints from "./AboutPoints";

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col items-center w-full bg-[#FDF8F0] dark:bg-[#111010] py-24 px-6 md:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C0392B] dark:text-[#B8955A] mb-4">
        Our Promise
      </p>
      <h2
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-5xl md:text-6xl font-bold text-[#1A0A00] dark:text-[#F7F3EE] mb-4 text-center"
      >
        Why Choose Us?
      </h2>
      <div className="w-10 h-[3px] bg-[#F5C518] dark:bg-[#B8955A] mb-14" />
      <AboutPoints />
    </section>
  );
}
