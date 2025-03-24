import "../styles/App.css";
import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <HowItWorks />
            <Footer />
        </>
    )
}