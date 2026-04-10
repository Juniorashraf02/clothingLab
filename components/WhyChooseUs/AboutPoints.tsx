"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  { icon: "✦", text: "Amazing quality clothing that's stylish & affordable" },
  { icon: "✦", text: "Express delivery options" },
  { icon: "✦", text: "Cash on delivery after product receiving" },
  { icon: "✦", text: "Excellent customer support, always" },
  { icon: "✦", text: "Even you can advice us to source a product for you!" },
];

export default function AboutPoints() {
  const [visible, setVisible] = useState<boolean[]>(Array(points.length).fill(false));
  const ref = useRef<HTMLUListElement>(null);

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
            }, i * 1000);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="space-y-4 max-w-xl px-1">
      {points.map((point, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 transition-all duration-500 ease-out ${
            visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white mt-1 text-sm animate-bounce hover:animate-none">{point.icon}</span>
          <span className="text-lg text-white animate-bounce hover:animate-none">{point.text}</span>
        </li>
      ))}
    </ul>
  );
}