"use client";
const text = "Less Noise. More Style.";

export default function Banner() {
    return (
        <div className=" text-white p-4">
            {/* <h1 className="md:text-6xl font-bold ">Less Noise. More Style.</h1> */}

            <h1 className="md:text-6xl font-bold flex flex-wrap">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block transition-transform duration-600 hover:-translate-y-6"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
            <p>Check out our latest collection <span>!</span></p>
        </div>
    )
}