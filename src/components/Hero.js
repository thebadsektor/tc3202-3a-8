import Logo from "../assets/Logo.png";

function Hero() {
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-8xl font-bold tracking-tight">
            <span className="text-black">narr</span>
            <span className="text-blue-400">AI</span>
            <span className="text-black">te</span>
          </h1>
          <p className="text-3xl font- text-gray-600">
            AI-powered image descriptions and storytelling for blind children
          </p>
          <div className="flex gap-4 pt-4"> </div>
        </div>

        {/* Right side with image placeholder */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-64 bg-white rounded-lg shadow-md flex items-center justify-center">
            <img
              src={Logo}
              alt="NarrAI logo"
              width="200"
              height="200"
              className="opacity-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
