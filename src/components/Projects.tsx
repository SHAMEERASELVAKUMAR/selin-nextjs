export default function Projects() {
  const items = [
    { title: "Selin AI Chat", desc: "Next-gen conversational intelligence" },
    { title: "Selin Cloud", desc: "Distributed GPU inference platform" },
    { title: "Selin OS", desc: "AI-native operating system" },
  ];

  return (
    <section id="projects" className="py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-display text-center mb-12">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((p) => (
          <div
            key={p.title}
            className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-bold text-gold">{p.title}</h3>
            <p className="mt-3 text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

