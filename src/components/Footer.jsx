import { Facebook, Instagram, Globe } from "lucide-react";

export default function Footer() {
    return (
        <div className="Footer bg-creamyWhite flex justify-between items-center py-10 px-40">
            {/* Left Column */}
            <div className="text-softBlack text-left">
                <h1 className="text-2xl font-narrAIte font-bold">
                    narr<span className="AI text-eight">AI</span>te
                </h1>
                <p className="mt-2">your AI storyteller</p>
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
