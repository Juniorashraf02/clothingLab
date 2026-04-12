import AboutPoints from "./AboutPoints";

export default function WhyChooseUs() {
    return (
        <div className="flex flex-col items-center justify-center text-white min-h-screen text-justify w-full dark:bg-[#54436B] bg-[#FEEAC9] ">
            <h2 className="md:text-6xl text-4xl font-bold mb-8 md:pb-10 animate-pulse text-red-800 dark:text-white">Why Choose Us?</h2>
            <AboutPoints />
        </div>
    );
}