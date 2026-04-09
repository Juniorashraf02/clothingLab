import Banner from "@/components/Banner";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-black dark:text-white ">
      <div className="w-full min-h-screen dark:bg-lime-700 bg-red-800 flex items-center justify-center">
        <Banner />
      </div>
      <InfoSection />
    </div>
  );
}