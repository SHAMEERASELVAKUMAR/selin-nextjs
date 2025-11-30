"use client";
const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Hero() {
  return (
    <section className="pt-28 pb-28 text-center relative">
      <div className="center-max px-6">
        <div className="inline-block px-4 py-1 bg-black/60 border border-gray-700 text-sm text-gray-300 mb-6 rounded-full">
          ● SELIN'S AI VISION
        </div>

        <h1 className="font-display font-extrabold h1-lg leading-tight tracking-tight mx-auto">
          <span className="text-white block">JOIN THE</span>
          <span className="text-gold block">BIGGEST AI</span>
          <span className="text-gold block">STARTUP</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mt-6">
          JOIN INDIA'S NEXT REVOLUTIONARY AI STARTUP. BE A PART OF IT.
          WE ARE BUILDING A NEW ERA OF INTELLIGENCE.
        </p>

        <div className="mt-10">
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 hero-cta btn-gold font-semibold rounded-md"
          >
            INITIATE APPLICATION
          </a>
        </div>
      </div>
    </section>
  );
}

