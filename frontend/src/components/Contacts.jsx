import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import Sam from "../assets/Sam.jpg"
import JayAnn from "../assets/Jay Ann.jpg"
import Carlos from "../assets/Carlos.jpg"
import Faith from "../assets/Faith.jpg"

export default function Contacts() {
    return (

        <FadeInWhenVisible>
            <div className="Background bg-creamyWhite h-auto mx-6 mb-6 md:mb-12 md:mx-40 flex flex-wrap">

                <div className="Cards flex flex-col md:flex-row gap-6">
                    <div className="Contacts relative bg-softBlack rounded-3xl p-10 md:pt-60 md:px-10 shadow-xl flex flex-col">
                        <div className="bg-white w-40 h-40 rounded-full absolute -top-10 -left-10 animate-pulse blur-3xl"></div>
                        <h1 className="text-4xl md:text-6xl text-creamyWhite font-narrAIte font-semibold mb-4">Contacts</h1>
                        <p className="text-sm font-narrAIte text-creamyWhite max-w-md">
                        Have questions or need assistance? Your <span className="font-bold">narr</span><span className="font-bold text-four">AI</span><span className="font-bold">te </span> 
                        family is always here to guide you, support you, and provide the answers you need, anytime you reach out.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 font-narrAIte">
                        <div class="group shadow-xl before:hover:scale-100 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-blue-500 via-sky-200 to-blue-300 before:absolute before:top-0 w-80 h-80 relative bg-one flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                        <div className="w-28 h-28 mt-8 rounded-full border-4 border-one z-10 overflow-hidden group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                        <img 
                            src={Sam}
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                            <span class="text-2xl font-narrAIte font-semibold">Sam Gabriel Advento</span>
                            <p className="text-md text-softBlack font-narrAIte">Full-Stack Developer</p>
                            <p className="text-sm text-softBlack font-narrAIte italic">smgbrl101010@gmail.com</p>
                        </div>
                        <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/sxmgxbrxxl" target="_blank" rel="noopener noreferrer">Follow</a>
                    </div>

                    <div class="group shadow-xl before:hover:scale-100 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-300 via-sky-100 to-pink-300 before:absolute before:top-0 w-80 h-80 relative bg-one flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                    <div className="w-28 h-28 mt-8 rounded-full border-4 border-one z-10 overflow-hidden group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                        <img 
                            src={JayAnn}
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                            <span class="text-2xl font-narrAIte font-semibold">Jay Ann Castillo</span>
                            <p className="text-md text-softBlack font-narrAIte">UI Designer</p>
                            <p className="text-sm text-softBlack font-narrAIte italic">jay.castll2402@gmail.com</p>
                        </div>
                        <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/jayann24" target="_blank" rel="noopener noreferrer">Follow</a>
                    </div>

                    <div class="group shadow-xl before:hover:scale-100 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-pink-300 via-pink-200 to-pink-500 before:absolute before:top-0 w-80 h-80 relative bg-one flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28 mt-8 rounded-full border-4 border-one z-10 overflow-hidden group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                        <img 
                            src={Faith}
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                            <span class="text-2xl font-narrAIte font-semibold">Faith Cruz</span>
                            <p className="text-md text-softBlack font-narrAIte">Documentator</p>
                            <p className="text-sm text-softBlack font-narrAIte italic">faithcruz072@gmail.com</p>
                        </div>
                        <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://www.facebook.com/faith.ballesteros.cruz" target="_blank" rel="noopener noreferrer">Follow</a>
                    </div>

                    <div class="group shadow-xl before:hover:scale-100 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-green-300 via-green-100 to-green-400 before:absolute before:top-0 w-80 h-80 relative bg-one flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                    <div className="w-28 h-28 mt-8 rounded-full border-4 border-one z-10 overflow-hidden group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                        <img 
                            src={Carlos}
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                            <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                            <span class="text-2xl font-narrAIte font-semibold">Carlos Cortez III</span>
                            <p className="text-md text-softBlack font-narrAIte">Documentator</p>
                            <p className="text-sm text-softBlack font-narrAIte italic">corteziiicarlos@gmail.com</p>
                        </div>
                        <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://www.facebook.com/crtziii" target="_blank" rel="noopener noreferrer">Follow</a>
                    </div>
                    </div>
                </div>

            </div>

        </FadeInWhenVisible>
    );
}