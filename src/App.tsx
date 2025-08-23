import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import CyberBackground from "./components/CyberBackground";
import CyberAudio from "./components/CyberAudio";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <CyberBackground />
      <CyberAudio />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <CTA />
          <Contact />
          <Map />
        </main>
        <Footer />
      </div>
    </div>
  );
}