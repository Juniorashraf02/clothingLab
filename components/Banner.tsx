"use client";
const text = "Less Noise. More Style.";

export default function Banner() {
    return (
        <div className=" text-white md:p-4 p-2">
            {/* <h1 className="md:text-6xl font-bold ">Less Noise. More Style.</h1> */}

            <h1 className="md:text-6xl text-6xl font-bold flex flex-wrap">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block transition-transform duration-600 hover:-translate-y-6"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
            <a href="/products">
            <p className="underline">Check out our latest collection <span>!</span></p></a>
        </div>
    )
}