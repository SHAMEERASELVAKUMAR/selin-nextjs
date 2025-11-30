import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Funding from "@/components/Funding";
import Openings from "@/components/Openings";
import Projects from "@/components/Projects";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

export default function Page() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* star layers */}
      <div className="starfield" />
      <div className="planet" style={{ left: '6%', top: '60%' }} />
      <div className="planet" style={{ right: '6%', top: '8%', width: 320, height: 320 }} />

      <Navbar />
      <Hero />
      <Funding />
      <Openings />
      <Projects />
      <Governance />
      <Footer />
      <ChatButton />
    </main>
  );
}

