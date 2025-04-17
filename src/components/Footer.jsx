import { Facebook, Instagram, Globe } from "lucide-react";
import Logo from "../assets/LogoNoBg.svg";

export default function Footer() {
    return (
        <div className="Footer bg-creamyWhite flex justify-between items-center py-10 px-40">
            {/* Left Column */}
            <div className="text-softBlack text-left">
                <img src={Logo} alt="narrAIte Logo" className="h-8 dark:bg-creamyWhite" />
                <h1 className="dark:text-creamyWhite text-softBlack text-2xl font-narrAIte font-bold cursor-pointer">
                    <a href="/">narr<span className="dark:text-six text-eight">AI</span>te</a>
                </h1>
                <p>your AI storyteller</p>
            </div>

            {/* Right Column */}
            <div className="text-softBlack text-right">
                <h1 className="font-narrAIte font-bold mb-2">Follow Us</h1>
                <div className="flex gap-4 justify-end">
                <a href="https://www.facebook.com/sxmgxbrxxl/" target="_blank" rel="noopener noreferrer">
                    <Facebook size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                </a>
                    <Instagram size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                    <Globe size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>
    );
}
