import { useState, useEffect } from "react";
import Logo from "../assets/LogoNoBg.svg";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    /* Stick to Top */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`NavBar bg-creamyWhite text-softBlack flex justify-between items-center px-6 md:px-40 py-6 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "shadow-md py-6 bg-creamyWhite" : "py-6"
            }`}
        >
            <a href="/">
            <div className="flex items-center gap-4">
                <img src={Logo} alt="narrAIte Logo" className="h-8 dark:bg-creamyWhite" />
                <h1 className=" text-softBlack text-2xl font-narrAIte font-bold cursor-pointer">
                    narr<span className="text-eight">AI</span>te
                </h1>
            </div>
            </a>
            
            <nav className="hidden md:flex gap-4 text-lg font-narrAIte">
                <a href="/" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300">Home</a>
                <a href="/collections" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300">Collections</a>
                <a href="/features" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300">Features</a>
                <a href="/about" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300">About Us</a>
            </nav>

            <button className="hidden md:block bg-eight hover:bg-six text-white font-narrAIte font-semibold py-2 px-4 rounded-full shadow-md">
                <a href="/upload" className="hover:text-one">Upload</a>
            </button>

            <div className="md:hidden">
                <div onClick={toggleMenu} className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                    <input className="hidden peer" type="checkbox" />
                    <div className={`w-[50%] h-[2px] bg-softBlack rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${menuOpen ? 'rotate-[-45deg]' : ''}`} />
                    <div className={`w-[50%] h-[2px] bg-softBlack rounded-md transition-all duration-300 origin-center ${menuOpen ? 'hidden' : ''}`} />
                    <div className={`w-[50%] h-[2px] bg-softBlack rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${menuOpen ? 'rotate-[45deg]' : ''}`} />
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-creamyWhite font-narrAIte flex flex-col items-center gap-4 pt-2 pb-8 shadow-md md:hidden">
                    <a href="/" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300" onClick={toggleMenu}>Home</a>
                    <a href="/collections" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300" onClick={toggleMenu}>Collections</a>
                    <a href="/features" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300" onClick={toggleMenu}>Features</a>
                    <a href="/about" className="hover:text-creamyWhite hover:bg-eight py-2 px-4 rounded-3xl transition-all duration-300" onClick={toggleMenu}>About Us</a>
                    <a href="/upload" className="bg-eight hover:bg-six text-white font-narrAIte font-semibold py-2 px-4 rounded-full shadow-md" onClick={toggleMenu}>Upload</a>
                </div>
            )}
        </div>
    );
}
