const openings = [
  { title: "AI/ML Engineer", sub: "Python, LLMs, RAG", seats: 2 },
  { title: "Backend Architect", sub: "Node.js, Firebase, Cloud", seats: 2 },
  { title: "Frontend / Mobile", sub: "React, Next.js, Flutter", seats: 2 },
];

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Openings() {
  return (
    <section id="openings" className="py-28 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-display text-center">CURRENT OPENINGS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {openings.map((o) => (
          <div
            key={o.title}
            className="border border-white/10 bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-bold">{o.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{o.sub}</p>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-gold font-semibold">{o.seats} Seats</span>

              <a
                href={formUrl}
                target="_blank"
                className="underline text-gray-300 hover:text-white"
              >
                Apply
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

