const infoLinks = [
  { link: "/about", text: "About Us" },
  { link: "/faq", text: "FAQ" },
  { link: "/contact", text: "Contact Us" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/clothinglab",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/clothinglab",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Website",
    href: "https://clothing-lab.vercel.app",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 dark:bg-[#111010]">
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
              ZYNOGAD{' '}
              <span className="text-[#F5C518] dark:text-[#B8955A]"></span>
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
           {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-[#F5C518] dark:border-[#B8955A] rounded-sm text-sm text-neutral-700 dark:text-black  transition-allduration-300 hover:bg-[#F5C518] dark:hover:bg-[#B8955A] hover:text-[#1A0A00] hover:text-black text-white dark:hover-text-black dark:text-white"
              >
                {s.icon}
                <span className="dark:text-white hover:text-black text-bold ">{s.name}</span>
              </a>
            ))}
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
