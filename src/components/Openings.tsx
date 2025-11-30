"use client";
const list = [
  { title: "AI/ML ENGINEER", meta: "PYTHON, LLMS, RAG, PYTORCH", seats: 2 },
  { title: "BACKEND ARCHITECT", meta: "NODE.JS, FIREBASE, CLOUD FUNCTIONS", seats: 2 },
  { title: "FRONTEND / MOBILE", meta: "REACT, FLUTTER, TAILWIND", seats: 2 },
  { title: "OCR & VISION SPECIALIST", meta: "OPENCV, TESSERACT, DOCUMENT AI", seats: 1 },
  { title: "PRODUCT DESIGNER", meta: "FIGMA, UX FLOWS", seats: 1 },
  { title: "OPERATIONS LEAD", meta: "AGILE, TEAM MANAGEMENT", seats: 1 },
];

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

export default function Openings() {
  return (
    <section id="openings" className="py-16 px-6">
      <div className="center-max">
        <h3 className="text-3xl font-display text-center mb-8">CURRENT OPENINGS</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((l) => (
            <div key={l.title} className="p-6 card rounded-md flex flex-col justify-between h-44">
              <div>
                <h4 className="text-lg font-bold">{l.title}</h4>
                <div className="text-gray-400 text-xs mt-2">{l.meta}</div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-gold font-semibold">{l.seats} SEATS AVAILABLE</div>
                <a href={formUrl} target="_blank" rel="noreferrer" className="underline">APPLY</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

