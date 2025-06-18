"use client";

import Header from "./components/Header";
import OutputSection from "./components/OutputSection";
import { documentationLinks } from "./components/shared/documentationData";
import Pricing from "./components/shared/Pricing";
import Features from "./components/shared/Features";
import FAQ from "./components/shared/FAQ";

export default function SolanaPlayground() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header />
      <div className="w-full max-w-5xl px-4 flex flex-col gap-0">
        <OutputSection />
        <div className="w-full flex flex-col items-center">
          <div className="bg-gray-800 text-gray-100 rounded-lg px-4 py-4 text-center text-lg font-semibold max-w-2xl shadow">
            <p>Explore Documentation:</p>
            <ul className="mt-2">
              {documentationLinks.map((link: { title: string; url: string }) => (
                <li key={link.title} className="mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Pricing />
        <Features />
        <FAQ />
      </div>
    </div>
  );
}