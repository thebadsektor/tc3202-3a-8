import {Upload, Cpu, MessageSquare, Volume2} from "lucide-react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

export default function HowItWorks() {

    return (
        <div className="Background bg-creamyWhite pt-10 md:pt-10">
            
            <FadeInWhenVisible>
                <div className="How relative bg-gradient-to-br from-one to-six rounded-3xl shadow-xl p-10 mx-6 md:mx-40 md:p-20">
                    <h1 className="Title text-4xl md:text-6xl text-softBlack font-narrAIte font-semibold text-center md:text-right">
                        How it Works?
                    </h1>
                </div>
            </FadeInWhenVisible>
            
        </div>
    );
}