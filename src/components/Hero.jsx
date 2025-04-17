import Mockup from "../assets/HeroMockup.svg";
import { fadeInUp } from "../animations/variants";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="Hero bg-gradient-to-br from-one to-six dark:bg-softBlack w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-40 pt-24 md:pt-20 pb-10 md:pb-5 overflow-hidden">

            <motion.div {...fadeInUp}
                className="Title flex flex-col justify-center items-center dark:text-creamyWhite md:items-start gap-6 text-center md:text-left max-w-full md:max-w-xl"
            >
                <h1 className="narrAite text-4xl md:text-6xl text-softBlack font-narrAIte font-semibold leading-tight">
                    Empowering <span className="text-eight">Vision</span> Through Voice
                </h1>
                <p className="shortdes text-softBlack text-base font-narrAIte leading-relaxed tracking-wide">
                    <span className="font-bold">narr</span><span className="font-bold text-six">AI</span><span className="font-bold">te </span>brings your pictures to life through spoken words.
                    Transform your images into creative short stories with seamless image-to-speech technology.
                </p>

                <div className="buttons flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 w-full">
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

            <motion.div {...fadeInUp}
                className="Images flex justify-center items-center ml-10 mb-5 mt-10 md:mt-0"
            >
                <img
                    src={Mockup}
                    alt="Hero Mockup"
                    className="w-60 sm:w-72 md:w-[600px] object-contain transition-transform duration-500"
                />
            </motion.div>
        </div>
    );
}
