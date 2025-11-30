export default function Footer() {
  return (
    <footer className="pt-12 pb-20 bg-black/80 mt-6">
      <div className="center-max px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-display text-lg">SELIN GROUP</h4>
          <p className="text-gray-400 mt-3">BUILDING INDIA'S NEXT GENERATION OF HIGH-IMPACT VENTURES.</p>
        </div>

        <div>
          <h5 className="text-gold mb-3">CONTACT FOUNDER</h5>
          <p className="font-semibold">SARAN S I</p>
          <p className="text-gray-400 mt-2">SELIN.CONSULTANCY@GMAIL.COM</p>
        </div>

        <div>
          <h5 className="text-gold mb-3">CORPORATE</h5>
          <ul className="text-gray-400 space-y-2">
            <li>Terms & Conditions</li>
            <li>Policies</li>
            <li>Rulebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

