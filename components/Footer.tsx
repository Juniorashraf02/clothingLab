const infoLinks = [
  { link: "/about", text: "About Us" },
  { link: "/faq", text: "FAQ" },
  { link: "/contact", text: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#C0392B] dark:bg-[#111010]">
      {/* Yellow top stripe */}
      <div className="h-1.5 w-full bg-[#F5C518] dark:bg-[#B8955A]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-white font-black text-2xl tracking-tight leading-none"
            >
              CLOTHING{' '}
              <span className="text-[#F5C518] dark:text-[#B8955A]">LAB</span>
            </span>
            <p className="text-sm text-white/60 dark:text-white/40 leading-relaxed">
              Premium products, affordable prices — crafted for Bangladesh.
            </p>
            <a href="/products">
              <button className="self-start px-5 py-2.5 border border-[#F5C518] dark:border-[#B8955A] text-[#F5C518] dark:text-[#B8955A] text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#F5C518] dark:hover:bg-[#B8955A] hover:text-[#1A0A00] transition-all duration-200">
                Browse Products
              </button>
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 dark:text-white/30 mb-2">
              Contact
            </h4>
            <a
              href="https://wa.me/8801401260160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 dark:text-white/50 hover:text-[#F5C518] dark:hover:text-[#B8955A] transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="mailto:zynogad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 dark:text-white/50 hover:text-[#F5C518] dark:hover:text-[#B8955A] transition-colors duration-200"
            >
              Email Us
            </a>
          </div>

          {/* Info links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 dark:text-white/30 mb-2">
              Information
            </h4>
            {infoLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-sm text-white/70 dark:text-white/50 hover:text-[#F5C518] dark:hover:text-[#B8955A] transition-colors duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 dark:text-white/30 mb-2">
              Follow Us
            </h4>
            <a
              href="https://www.facebook.com/clothinglabbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 dark:text-white/50 hover:text-[#F5C518] dark:hover:text-[#B8955A] transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15 dark:border-white/8 px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs text-white/50 dark:text-white/25">
          © {new Date().getFullYear()} Clothing Lab. All rights reserved.
        </span>
        <span className="text-xs text-white/50 dark:text-white/25">Made in Bangladesh</span>
      </div>
    </footer>
  );
}
