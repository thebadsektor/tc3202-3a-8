import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import TryIt from "./components/TryIt";
// import About from "./components/About";
import Footer from "./components/Footer";

// Main page component that combines all sections
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TryIt />
      <Footer />
    </main>
  );
}
