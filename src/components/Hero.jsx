import Logo from "../assets/Logo.png";

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-100 to-green-400">
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-8xl font-extrabold font-inter tracking-tight">
            <span className="text-black">narr</span>
            <span className="text-blue-500">AI</span>
            <span className="text-black">te</span>
          </h1>
          <p className="text-3xl font-inter text-gray-700 leading-snug">
            AI-Powered Image Descriptions and Interactive Storytelling for Blind and Visually Impaired Children
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-blue-500 font-inter font-semibold  text-white rounded-lg hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 font-inter text-gray-700 rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-end">
          <div className="w-full max-w-md h-64 bg-white rounded-lg shadow-xl flex items-center justify-center">
            <img
              src={Logo}
              alt="NarrAI logo"
              width="200"
              height="200"
              className="opacity-100 hover:opacity-70 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
