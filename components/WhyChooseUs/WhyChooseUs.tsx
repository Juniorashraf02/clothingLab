import AboutPoints from "./AboutPoints";

export default function WhyChooseUs() {
    return (
        <div className="flex flex-col items-center justify-center text-white min-h-screen text-justify w-full dark:bg-[#54436B]">
            <h2 className="text-6xl font-bold mb-4 pb-10 animate-pulse">Why Choose Us?</h2>
            <AboutPoints />
        </div>
    );
}