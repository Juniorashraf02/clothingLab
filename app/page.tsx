import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Hero — vivid red in light, deep charcoal in dark */}
      <div className="relative w-full md:min-h-screen h-[560px] bg-[#C0392B] dark:bg-[#1A1714] flex items-center justify-center overflow-hidden">
        {/* Yellow stripe at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-[#F5C518] dark:bg-[#B8955A]" />
        {/* Decorative circles */}
        <div className="absolute top-6 right-12 w-36 h-36 rounded-full bg-[#F5C518] dark:bg-[#B8955A] opacity-15 pointer-events-none" />
        <div className="absolute bottom-12 right-40 w-20 h-20 rounded-full bg-[#F5C518] dark:bg-[#B8955A] opacity-10 pointer-events-none" />
        <div className="absolute top-1/3 left-[-40px] w-28 h-28 rounded-full border border-[#F5C518]/20 dark:border-[#B8955A]/20 pointer-events-none" />
        <Banner />
      </div>
      <InfoSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
