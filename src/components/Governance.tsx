export default function Governance() {
  const points = [
    "Extreme Ownership",
    "High-Velocity Execution",
    "Truth-Seeking Culture",
    "AI-First Decision Making",
  ];

  return (
    <section id="governance" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-display text-center mb-12">GOVERNANCE</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((p) => (
          <li
            key={p}
            className="border border-white/10 bg-white/5 p-6 rounded-xl text-lg text-gray-200"
          >
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}

