import "../styles/App.css";
import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import FeatureCards from "../components/FeatureCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import NoPicture from "../components/NoPicture.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <FeatureCards />
            <HowItWorks />
            <NoPicture />
            <Footer />
        </>
    )
}