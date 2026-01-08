"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className="nav-gradient cursor-pointer rounded-full border p-2 transition duration-300 hover:border-black/20 hover:dark:border-white/50"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <Sun size={20} /> : <MoonStar size={20} />}
    </div>
  );
};

export default ThemeSwitcher;
