import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { scaleOnHover } from "../animations/variants";
import { motion } from "framer-motion";
import BG from "../assets/BG.webp";

export default function NoPicture() {
    return (
        <div className="Background bg-creamyWhite h-auto py-10 mx-6 md:mx-40 md:pt-8 md:pb-6">

            <FadeInWhenVisible>
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="Card relative bg-softBlack rounded-3xl p-10 shadow-xl md:flex-row flex-1">
                        <img
                        alt="BG"
                        loading="lazy"
                        src={BG}
                        className="absolute inset-0 object-cover h-full w-full rounded-3xl opacity-80"
                        ></img>

                        <div className="border-2 border-creamyWhite backdrop-blur-md w-full h-full rounded-3xl">
                            <div className="flex flex-col items-center p-10">
                                <div className="TitleContainer flex flex-row gap-2 text-creamyWhite">
                                    <h1 className="NO text-6xl md:text-9xl font-narrAIte font-bold">NO</h1>
                                    <div className="flex flex-col font-narrAIte font-semibold justify-center md:text-5xl">
                                        <h1>Photo?</h1>
                                        <h1>Problem.</h1>
                                    </div>
                                </div>
                                <p className="font-narrAIte text-center text-creamyWhite mb-8 text-sm max-w-sm">
                                    <span className="font-bold">narr</span><span className="text-four font-bold">AI</span><span className="font-bold">te</span> provides you with a series of photos to choose from, so even without uploading your own, you can still generate rich audio stories instantly.
                                </p>
                                <motion.div {...scaleOnHover}>
                                    <a
                                        href="/collections"
                                        className="background-blur-xl border-creamyWhite text-creamyWhite font-narrAIte border-2 rounded-3xl py-2 px-4 mt-6 text-center hover:text-one transition-all"
                                    >
                                        Go to Collections
                                    </a>
                                </motion.div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </FadeInWhenVisible>
        </div>
    );
}
