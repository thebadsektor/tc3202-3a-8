export default function About() {
    return (
        <div className="Hero bg-gradient-to-br from-one to-six h-screen w-full flex flex-col md:flex-row justify-center items-center md:px-60 px-10 pb-20 pt-20">
            <div className="Title flex flex-col justify-center items-center md:px-10 max-w-screen">
            <h5 className="about text-justify text-softBlack text-sm md:text-base font-narrAIte">About
                </h5>
                <h1 className="narrAite text-6xl pb-6 md:text-8xl text-softBlack font-narrAIte font-bold leading-tight">
                    narr<span className="text-eight">AI</span>te
                </h1>
                <h5 className="shortdes text-justify text-softBlack text-sm md:text-base font-narrAIte leading-relaxed">
                    narrAlte was created with a simple but powerful mission: to help blind children experience the visual world
                through stories. Our team of AI specialists, educators, and accessibility experts have worked together to
                create a tool that bridges the gap between visual content and blind children.
                </h5>
                <h5 className="shortdes text-justify text-softBlack text-sm md:text-base font-narrAIte leading-relaxed">
                    Using advanced artificial intelligence and machine learning, narrAlte can analyze images and transform them
                into descriptive, engaging narratives that bring pictures to life through words. Whether it's a family
                photo, a page from a picture book, or an image from the internet, narrAlte helps blind children experience
                visual content in a meaningful way.
                </h5>
            </div>
        </div>
    );
}
