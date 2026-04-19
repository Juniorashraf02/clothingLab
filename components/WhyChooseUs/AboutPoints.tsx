"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  {
    icon: "✦",
    title: "Premium Quality",
    text: "Amazing quality clothing that's stylish & affordable",
  },
  {
    icon: "◈",
    title: "Express Delivery",
    text: "Fast delivery options available across Bangladesh",
  },
  {
    icon: "◉",
    title: "Cash on Delivery",
    text: "Pay only after you receive and inspect your product",
  },
  {
    icon: "✧",
    title: "24/7 Support",
    text: "Excellent customer support, always here for you",
  },
  {
    icon: "⊹",
    title: "Custom Sourcing",
    text: "We can source any specific product you advise us on",
  },
];

export default function AboutPoints() {
  const [visible, setVisible] = useState<boolean[]>(
    Array(points.length).fill(false)
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          points.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 140);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      {points.map((point, i) => (
        <div
          key={i}
          className={`bg-white dark:bg-[#1E1B18] border border-[#F0D6C8] dark:border-[#2E2A26] border-l-4 border-l-[#F5C518] dark:border-l-[#B8955A] p-7 flex flex-col gap-3 transition-all duration-500 ease-out hover:border-l-[#C0392B] dark:hover:border-l-[#C4A882] hover:shadow-sm ${
            visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#C0392B] dark:text-[#B8955A] text-lg">{point.icon}</span>
          <div>
            <p className="text-sm font-semibold text-[#1A0A00] dark:text-[#F7F3EE] mb-1">
              {point.title}
            </p>
            <p className="text-sm text-[#7A5C50] dark:text-[#9A918A] leading-relaxed">
              {point.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
