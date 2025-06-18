"use client";

import React from "react";

export default function Header() {
  return (
    <header className="p-6 bg-gray-900 text-white text-center shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-wide sm:text-2xl md:text-4xl">
        AI-Powered Solana Playground
      </h1>
      <p className="text-sm mt-4 sm:text-xs md:text-base">
        Explore, simulate, and build Solana programs 
      </p>
    </header>
  );
}
