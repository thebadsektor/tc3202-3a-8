export default function Hero() {

    return (
        <div className="Hero bg-gradient-to-br from-one to-six h-full w-full flex justify-center items-center">
            <div className="Title px-20 py-40 flex flex-col justify-center items-center gap-6">
                <h1 className="narrAite text-5xl text-softBlack font-narrAIte font-semibold text-center">
                    Empowering <span className="text-eight">Vision</span> Through Voice
                </h1>
                <h5 className="shortdes text-softBlack text-sm font-narrAIte text-center max-w-4xl leading-relaxed">
                Transform your visuals into vivid stories with seamless image-to-speech technology.
                Unlock the power of your images — whether you're exploring ideas, creating content, or capturing memorable moments, narrAIte brings your pictures to life through spoken words.
                </h5>
                <div className="buttons px-4 py-4 flex flex-row justify-center items-center gap-6">
                    <button
                        type="button"
                        className="flex justify-center gap-2 items-center shadow-xl text-lg font-narrAIte bg-one backdrop-blur-md text-softBlack font-semibold border-gray-50 
                        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                        before:-left-full before:hover:left-0 before:rounded-full before:bg-eight hover:text-gray-50 
                        before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
                        relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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

                    <button className="flex justify-center bg-eight hover:bg-six text-white border-one text-lg font-narrAIte font-normal py-3 px-8 border-2 rounded-full shadow-xl">
                        <a href="/about" className="hover:text-one">Learn More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
