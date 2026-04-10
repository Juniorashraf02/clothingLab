import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="w-full min-h-screen dark:bg-[#346739] bg-red-800 flex items-center justify-center">
        <Banner />
      </div>
      <InfoSection />
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
}