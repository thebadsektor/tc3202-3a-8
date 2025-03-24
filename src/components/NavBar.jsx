import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LogoNoBg.svg";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="NavBar bg-creamyWhite text-softBlack flex justify-between items-center px-6 md:px-20 py-6 shadow-md relative">
            <div className="flex items-center gap-4">
                <img src={Logo} alt="narrAIte Logo" className="h-8" />
                <h1 className="text-softBlack text-2xl font-narrAIte font-bold">
                    narr<span className="text-eight">AI</span>te
                </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-lg font-narrAIte">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/collections" className="hover:text-gray-400">Collections</a>
                <a href="/about" className="hover:text-gray-400">About Us</a>
            </nav>

            {/* Upload Button */}
            <button className="hidden md:block bg-eight hover:bg-six text-white font-narrAIte font-semibold py-2 px-4 rounded-full shadow-md">
                <a href="/upload" className="hover:text-one">Upload</a>
            </button>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
                {menuOpen ? (
                    <X size={32} className="cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <Menu size={32} className="cursor-pointer" onClick={toggleMenu} />
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-creamyWhite flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
                    <a href="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
                    <a href="/collections" className="hover:text-gray-400" onClick={toggleMenu}>Collections</a>
                    <a href="/about" className="hover:text-gray-400" onClick={toggleMenu}>About Us</a>
                    <a href="/upload" className="bg-eight hover:bg-six text-white font-narrAIte font-semibold py-2 px-4 rounded-full shadow-md" onClick={toggleMenu}>Upload</a>
                </div>
            )}
        </div>
    );
}
