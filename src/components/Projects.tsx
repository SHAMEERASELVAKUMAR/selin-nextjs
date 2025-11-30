export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="center-max grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-display mb-6">SELIN GROUP PROJECTS</h3>
          <ul className="space-y-4">
            <li className="card p-4">SELIN CONSULTANCY (PREMIUM SERVICES)</li>
            <li className="card p-4">SELIN FINTECH (PRE-SEED STAGE)</li>
            <li className="card p-4">TECH ENABLED LOGISTICS IMPORT/EXPORT</li>
            <li className="card p-4">HEALTHCARE TECH INNOVATIONS</li>
          </ul>
        </div>

        <div className="card p-8">
          <h4 className="text-sm text-gold uppercase">FOUNDER'S VISION</h4>
          <blockquote className="font-display text-xl md:text-2xl mt-4 italic">
            "IF SOMETHING CAN BE BUILT WITH DISCIPLINE, DESIRE, AND THE RIGHT PEOPLE, IT WILL BECOME BIG..."
          </blockquote>

          <div className="mt-6">
            <div className="font-semibold">SARAN S I</div>
            <div className="text-gray-400 text-sm">FOUNDER, SELIN GROUP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

