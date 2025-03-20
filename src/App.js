import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Introduction";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import TryIt from "./components/TryIt";
// import About from "./components/About";
import Footer from "./components/Footer";

// Main page component that combines all sections
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <HowItWorks />
      <TryIt />
      <Footer />
    </main>
  );
}
