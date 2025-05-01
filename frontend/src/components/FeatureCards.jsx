import {Image, BookOpen, Sparkles, Heart} from "lucide-react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { scaleOnHover } from "../animations/variants";
import { motion } from "framer-motion";
 
export default function Features() {
    return (
        <FadeInWhenVisible>
            <div className="Background bg-creamyWhite h-auto mx-6 md:mx-40 flex flex-wrap">

                <div className="Cards flex flex-col md:flex-row gap-6">
                    <div className="Features relative bg-softBlack rounded-3xl p-10 md:pt-60 md:px-10 shadow-xl flex flex-col">
                        <div className="bg-white w-40 h-40 rounded-full absolute -top-10 -left-10 animate-pulse blur-3xl"></div>
                        <h1 className="text-4xl md:text-6xl text-creamyWhite font-narrAIte font-semibold mb-4">Features</h1>
                        <p className="text-sm font-narrAIte text-creamyWhite mb-6 max-w-md">
                        Explore how <span className="font-bold">narr</span><span className="font-bold text-four">AI</span><span className="font-bold">te </span> 
                        transforms visual content into an immersive, joyful experience, making short stories and illustrations come to life through sound.
                        </p>
                        <motion.div {...scaleOnHover}>
                            <a
                                href="/features"
                                className="background-blur-xl border-creamyWhite text-creamyWhite font-narrAIte border-2 rounded-3xl py-2 px-4 mt-16 text-center hover:text-one transition-all"
                            >
                                Learn More
                            </a>
                        </motion.div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 font-narrAIte">
                        <div className="border rounded-xl border-softBlack p-8 hover:shadow-xl transition-shadow flex flex-col">
                            <Sparkles color="#414a4c" className="mb-4 h-8 w-8"></Sparkles>
                            <h3 className="text-eight text-2xl font-bold mb-2">Accessibility</h3>
                            <p className="text-softBlack mb-4">Designed specifically for blind children with intuitive audio feedback.</p>
                        </div>

                        <div className="border rounded-xl border-softBlack p-8 hover:shadow-xl transition-shadow flex flex-col">
                            <Heart color="#414a4c" className="mb-4 h-8 w-8"></Heart>
                            <h3 className="text-eight text-2xl font-bold mb-2">Child-friendly</h3>
                            <p className="text-softBlack mb-4">Safe, educational content that sparks imagination and learning.</p>
                        </div>

                        <div className="border rounded-xl border-softBlack p-8 hover:shadow-xl transition-shadow flex flex-col">
                            <Image color="#414a4c" className="mb-4 h-8 w-8"></Image>
                            <h3 className="text-eight text-2xl font-bold mb-2">Image Recognition</h3>
                            <p className="text-softBlack mb-4">Advanced AI that accurately identifies objects, people, and scenes in photos.</p>
                        </div>

                        <div className="border rounded-xl border-softBlack p-8 hover:shadow-xl transition-shadow flex flex-col">
                            <BookOpen color="#414a4c" className="mb-4 h-8 w-8"></BookOpen>
                            <h3 className="text-eight text-2xl font-bold mb-2">Storytelling</h3>
                            <p className="text-softBlack mb-4">Transforms visual content into engaging, age-appropriate stories.</p>
                        </div>
                    </div>
                </div>

            </div>

        </FadeInWhenVisible>
    );
}