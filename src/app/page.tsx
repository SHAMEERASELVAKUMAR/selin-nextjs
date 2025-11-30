import Hero from "@/components/Hero";
import Funding from "@/components/Funding";
import Openings from "@/components/Openings";
import Projects from "@/components/Projects";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ChatButton from "@/components/ChatButton";
import "@/styles/globals.css";

export default function Page() {
  return (
    <main className="bg-black min-h-screen">
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
