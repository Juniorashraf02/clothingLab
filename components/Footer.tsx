const infoLinks = [
    {link: "/about", text: "About Us"},
    {link: "/faq", text: "FAQ"},
    {link: "/contact", text: "Contact Us"},
]
// const infoLinks = ["Privacy Policy", "Terms of Service",


export default function Footer() {
    return (
        <footer className="bg-[#1e2124] text-gray-300 pt-12 pb-0 w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

                {/* Col 1 - Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                        {/* Replace with your actual logo */}
                        <span className="text-white font-black text-3xl tracking-tight leading-none">
                            CLOTHING <span className="text-red-500">LAB</span>
                        </span>
                        {/* <span className="text-green-400 text-xs font-bold ml-1 mt-1">OK</span> */}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        We Offer Premium Products Which Are Affordable in Bangladesh.
                    </p>
                    <div className="flex mt-2">
                        {/* <input
                            type="email"
                            placeholder="Your Email Address"
                            className="bg-[#2a2d31] text-sm text-gray-300 px-3 py-2 rounded-l outline-none border border-[#3a3d41] w-full placeholder-gray-500"
                        /> */}
                        <a href="/products">
                            <button className="bg-red-500 hover:bg-red-600 transition-colors text-white text-sm font-semibold px-4 py-2 rounded whitespace-nowrap">
                                Browse Our Products
                            </button></a>
                    </div>
                </div>

                {/* Col 2 - Contact Info */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
                        Contact Info
                    </h4>
                    <div>
                        {/* <p className="text-green-400 text-xs mb-1">Address:</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                         
                        </p> */}
                    </div>
                    <div>
                        <a href="https://wa.me/8801401260160" target="_blank" rel="noopener noreferrer">
                            <p className="text-green-400 text-sm mb-1 uppercase tracking-tight leading-none font-bold">WhatsApp</p>
                        </a>
                        {/* <p className="text-gray-400 text-sm"></p> */}
                    </div>
                    <div className="flex">
                        <a href="mailto:zynogad@gmail.com" target="_blank" rel="noopener noreferrer">
                            <p className="text-green-400 text-sm uppercase tracking-tight leading-none font-semibold">Email</p>
                        </a>
                        <a href="" className="text-green-400 text-sm hover:underline">

                        </a>
                    </div>
                </div>

                {/* Col 3 - Information */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
                        Information
                    </h4>



                    {infoLinks.map((item, i) => (
                        <a key={i} href={item.link} className="text-gray-400 text-sm hover:text-white transition-colors">
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Col 4 - Facebook Join */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
                        Facebook Join
                    </h4>
                    <a
                        href="https://www.facebook.com/clothinglabbd"
                        className="text-green-400 text-sm hover:underline"
                    >
                        CLOTHING LAB
                    </a>
                </div>
            </div>

            <div className="h-1 bg-green-400 w-full mt-4" />
        </footer>
    );
}