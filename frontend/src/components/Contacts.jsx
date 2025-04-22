import Sam from "../assets/Sam.jpg"
import JayAnn from "../assets/Jay Ann.jpg"
import Carlos from "../assets/Carlos.jpg"
import Faith from "../assets/Faith.jpg"

export default function Contacts() {
    return (
        <div className="bg-creamyWhite w-full h-full px-20 py-20">
            <h1 className="text-6xl font-narrAIte text-softBlack font-semibold">Contacts</h1>
            <div className="flex flex-row py-20 px-5 w-full h-full gap-10">
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
                    <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/sxmgxbrxxl">Follow</a>
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
                    <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/jayann24">Follow</a>
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
                    <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/jayann24">Follow</a>
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
                    <a class="bg-eight px-4 py-1 font-narrAIte text-one rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-six" href="https://github.com/jayann24">Follow</a>
                </div>
            </div>
        </div>
    );
}