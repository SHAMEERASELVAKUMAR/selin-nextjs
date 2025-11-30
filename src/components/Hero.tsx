const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Hero() {
  return (
    <section className="pt-28 pb-24 text-center">
      <div className="inline-block px-4 py-1 bg-black/60 border border-gray-700 text-sm text-gray-300 mb-6">
        ● SELIN'S AI VISION
      </div>

      <h1 className="font-display text-[6rem] leading-tight">
        <span>JOIN THE</span>
        <br />
        <span className="text-gold">BIGGEST AI</span>
        <br />
        <span className="text-gold">STARTUP</span>
      </h1>

      <p className="text-gray-300 max-w-xl mx-auto mt-6">
        JOIN INDIA'S NEXT REVOLUTIONARY AI STARTUP.
      </p>

      <a
        href={formUrl}
        target="_blank"
        className="mt-10 inline-block px-8 py-4 bg-gold text-black rounded shadow-lg"
      >
        INITIATE APPLICATION
      </a>
    </section>
  );
}
