import { Facebook, Instagram, Globe } from "lucide-react";
import Logo from "../assets/LogoNoBg.svg";

export default function Footer() {
    return (
        <div className="Footer bg-creamyWhite flex justify-between items-center py-10 px-6 md:px-40">

            <div className="text-softBlack text-left">
                <a href="/">
                    <h1 className=" text-softBlack text-2xl font-narrAIte font-bold cursor-pointer">
                            narr<span className="text-eight">AI</span>te
                    </h1>
                </a>
                <p className="font-narrAIte text-sm">your AI storyteller</p>
            </div>

            <div className="text-softBlack text-right">
                <h1 className="font-narrAIte font-bold mb-2">Follow Us</h1>
                <div className="flex gap-4 justify-end">
                    <Facebook size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                    <Instagram size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                    <Globe size={24} className="text-eight cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>
    );
}
