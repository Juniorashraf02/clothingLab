"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import ToogleBtn from "./ToogleBtn";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-5 w-5" />;

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded  transition"
    >
      {theme === "dark" ? (
        <ToogleBtn />
        // <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        // <MoonIcon className="h-5 w-5 text-gray-700" />
        <ToogleBtn />
      )}
    </div>
  );
}
