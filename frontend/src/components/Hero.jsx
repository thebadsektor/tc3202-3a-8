import Hands from "../assets/Hands.png"
import {AudioLines, MessageCircle, BookHeadphones, Podcast, Laugh, Eye} from "lucide-react"
import { fadeInUp } from "../animations/variants";
import { fadeInLeft } from "../animations/variants";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="Background bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">
            
            <div className="Hero relative bg-gradient-to-br from-one to-six rounded-3xl my-10 p-10 md:p-20 shadow-xl overflow-hidden flex flex-col md:flex-row">

                <motion.div {...fadeInLeft} className="">
                    <div className="z-10 ">
                        <h1 className="Phrase text-4xl  md:max-w-xl md:text-6xl mb-4 text-softBlack font-narrAIte font-semibold">
                            Empowering <span className="text-eight">Vision</span> Through Voice
                        </h1>
                        <p className="shortdes text-softBlack font-narrAIte md:max-w-lg">
                            <span className="font-bold">narr</span><span className="font-bold text-six">AI</span><span className="font-bold">te </span>brings your pictures to life through spoken words.
                            Transform your images into creative short stories with seamless image-to-speech technology.
                        </p>
                    </div>

                    <div className="buttons flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 w-full mt-6">
                        <button
                            type="button"
                            className="flex justify-center gap-2 items-center shadow-xl text-lg font-narrAIte bg-one backdrop-blur-md text-softBlack font-semibold border-gray-50 
                            before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                            before:-left-full before:hover:left-0 before:rounded-full before:bg-eight hover:text-gray-50 
                            before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
                            relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group w-full sm:w-auto"
                        >
                            <a href="/upload" className="hover:text-one">Get Started</a>
                            <svg
                                className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 transition duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-gray-800 group-hover:fill-gray-800"
                                ></path>
                            </svg>
                        </button>

                        <button 
                            className="bg-eight hover:bg-six text-white text-lg font-narrAIte py-3 px-8 border-2 border-transparent rounded-full shadow-xl w-full sm:w-auto transition-colors duration-300"
                        >
                            <a href="/about" className="hover:text-one transition-all">Learn More</a>
                        </button>
                    </div>
                </motion.div>
                
                <motion.div {...fadeInUp} className="absolute -bottom-20 right-0 z-0">
                    <div className="relative w-[250px] md:w-[650px] hidden md:block">

                        <AudioLines color="#6b8fc6"
                        className="absolute md:top-20 md:right-0 md:w-[100px] md:h-[100px] animate-spin-custom"
                        />

                        <Podcast color="#6b8fc6"
                        className="absolute md:top-20 md:right-40 md:w-[100px] md:h-[100px] animate-spin-slow"
                        />

                        <MessageCircle color="#6b8fc6"
                        className="absolute md:top-20 md:right-80 md:w-[100px] md:h-[100px] animate-spin-custom"
                        />

                        <BookHeadphones color="#6b8fc6"
                        className="absolute md:bottom-40 md:right-0 md:w-[100px] md:h-[100px] animate-spin-slow"
                        />

                        <Laugh color="#6b8fc6"
                        className="absolute md:top-60 md:right-40 md:w-[100px] md:h-[100px] animate-spin-custom"
                        />

                        <Eye color="#6b8fc6"
                        className="absolute md:top-60 md:right-0 md:w-[100px] md:h-[100px] animate-spin-slow"
                        />

                        <img
                        src={Hands}
                        className="w-full object-contain relative z-10"
                        alt="Hands"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
