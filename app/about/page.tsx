import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Clothing Lab",
  description:
    "Learn about Clothing Lab — where innovation meets fashion. Custom designs, sustainable solutions, and quality apparel.",
};

const services = [
  {
    icon: "✦",
    title: "Custom Design",
    desc: "Tailored clothing designed and manufactured to your exact vision and specifications.",
  },
  {
    icon: "♻",
    title: "Sustainable Fashion",
    desc: "Eco-conscious materials and processes that tread lightly on the planet.",
  },
  {
    icon: "◈",
    title: "Fashion Consulting",
    desc: "Expert styling and consulting to help you stand out with confidence.",
  },
  {
    icon: "◉",
    title: "Quality Production",
    desc: "Premium apparel crafted with precision, built to last season after season.",
  },
];

const stats = [
  { num: "100%", label: "Online & Accessible" },
  { num: "Eco", label: "Friendly Materials" },
  { num: "New", label: "Drops Every Season" },
  { num: "∞", label: "Style Possibilities" },
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950  text-neutral-100 overflow-x-hidden">

      {/* NAV
      <nav className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl tracking-wide">
          Clothing<span className="text-amber-400">Lab</span>
        </span>
        <span className="text-xs tracking-widest uppercase text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
          About Us
        </span>
      </nav> */}

      {/* HERO */}
      <section className="relative overflow-hidden max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col gap-6">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <span className="self-start text-xs tracking-widest uppercase text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
          Est. 2026
        </span>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight max-w-2xl">
          Where Innovation{" "}
          <em className="text-amber-400">Meets Fashion</em>
        </h1>

        <div className="w-12 h-0.5 bg-amber-400" />

        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
          Clothing Lab is an online fashion destination built on bold ideas,
          sustainable choices, and clothing that moves with you — from everyday
          essentials to statement pieces.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent" />
      </div>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-5">
            <span className="self-start text-xs tracking-widest uppercase text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-snug">
              Clothing that inspires,<br />made responsibly.
            </h2>
            <div className="w-12 h-0.5 bg-amber-400" />
            <p className="text-neutral-400 text-base leading-relaxed">
              We believe great fashion shouldn't cost the earth. Our mission is
              to bring you high-quality, eco-friendly clothing that inspires
              confidence, celebrates creativity, and moves the industry forward —
              one outfit at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-neutral-900 border border-neutral-800 rounded-sm p-6 flex flex-col gap-1 hover:border-amber-400/30 transition-colors duration-300"
              >
                <span className="font-serif text-3xl font-bold text-amber-400">{s.num}</span>
                <span className="text-xs uppercase tracking-widest text-neutral-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent" />
      </div>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-3 mb-12">
          <span className="self-start text-xs tracking-widest uppercase text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-900 border border-neutral-800 rounded-sm p-6 flex flex-col gap-3 hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-amber-400 text-2xl">{s.icon}</span>
              <h3 className="text-base font-medium">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent" />
      </div>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-5">
            <span className="self-start text-xs tracking-widest uppercase text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Let's talk fashion.</h2>
            <div className="w-12 h-0.5 bg-amber-400" />
            <p className="text-neutral-400 text-base leading-relaxed">
              Have a question, a collab idea, or just want to say hello?
              Reach out — we'd love to hear from you.
            </p>
            <a
              href="mailto: zynogad@gmail.com"
              className="self-start text-amber-400 border-b border-amber-400/30 hover:border-amber-400 pb-0.5 transition-colors duration-200 text-base"
            >
              zynogad@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-neutral-600 mb-2">
              Find us online
            </p>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-neutral-800 rounded-sm text-sm text-neutral-300 hover:border-amber-400/50 hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-300"
              >
                {s.icon}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-700 text-sm">
        © {new Date().getFullYear()} Clothing Lab. All rights reserved.
      </footer>
    </main>
  );
}
