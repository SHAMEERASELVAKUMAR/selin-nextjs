const openings = [
  { title: "AI/ML ENGINEER", sub: "PYTHON, LLMS", seats: 2 },
  { title: "BACKEND ARCHITECT", sub: "NODE, FIREBASE", seats: 2 },
  { title: "FRONTEND / MOBILE", sub: "REACT, FLUTTER", seats: 2 }
];

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Openings() {
  return (
    <section id="openings" className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-display text-center">CURRENT OPENINGS</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {openings.map((o) => (
          <div key={o.title} className="border border-gray-800 p-6">
            <h4 className="text-lg font-bold">{o.title}</h4>
            <div className="text-gray-500 text-xs mt-2">{o.sub}</div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gold font-semibold">
                {o.seats} SEATS
              </span>
              <a href={formUrl} target="_blank" className="underline">
                APPLY
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
