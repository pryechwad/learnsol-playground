"use client";

import { useState, useEffect } from "react";

export default function ComponentName() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="absolute top-4 right-4 p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform sm:top-2 sm:right-2"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
}
