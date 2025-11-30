const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Hero() {
  return (
    <section className="pt-40 pb-32 text-center">
      <div className="inline-block px-5 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 rounded-full tracking-widest">
        ● SELIN VENTURES
      </div>

      <h1 className="font-display text-[5rem] md:text-[7rem] leading-none mt-6 font-bold">
        BUILD THE
        <br />
        <span className="text-gold">FUTURE OF AI</span>
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mt-6 text-lg">
        Join India’s most ambitious AI startup and help build intelligence for the next decade.
      </p>

      <a
        href={formUrl}
        target="_blank"
        className="mt-10 inline-block px-10 py-4 bg-gold text-black font-semibold text-lg rounded-xl hover:bg-white transition"
      >
        INITIATE APPLICATION
      </a>
    </section>
  );
}

