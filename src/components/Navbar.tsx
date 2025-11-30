"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-gold font-display text-2xl">
          SELIN<span className="text-xs block text-gray-400">VENTURES</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={formUrl}
            target="_blank"
            className="px-4 py-2 bg-gold text-black rounded shadow-lg"
          >
            APPLY NOW
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center border border-white rounded"
          >
            <span className="block w-5 h-[2px] bg-white" />
            <span className="block w-5 h-[2px] bg-white mt-1" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-black/90 py-6 px-6 space-y-4">
          <a className="block" href="#openings">Openings</a>
          <a className="block" href="#projects">Projects</a>
          <a className="block" href="#governance">Governance</a>
        </nav>
      )}
    </header>
  );
}
