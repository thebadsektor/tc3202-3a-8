import { useEffect, useState } from "react";

export default function FullFeatures() {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const index = Math.floor(scrollY / vh);
      setSectionIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { num: 1, text: "Visual storytelling begins.", bg: "bg-red-200" },
    { num: 2, text: "Every image has a voice.", bg: "bg-green-200" },
    { num: 3, text: "Short stories come alive.", bg: "bg-yellow-200" },
    { num: 4, text: "Experience immersive joy.", bg: "bg-blue-200" },
  ];

  return (
    <div className="bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">
      <div className="bg-gradient-to-br from-one to-six rounded-3xl my-10 p-10 md:p-20 shadow-xl flex flex-col">

        {/* Title Section */}
        <div className="p-10 md:p-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-narrAIte font-semibold text-softBlack">
            Features
          </h1>
          <p className="text-sm font-narrAIte text-softBlack mt-4 text-center">
            Explore how <span className="font-bold">narr</span>
            <span className="font-bold text-eight">AI</span>
            <span className="font-bold">te</span> transforms
            visual content into immersive joy, bringing stories to life through sound.
          </p>
        </div>

        {/* Scrollable Sticky Section */}
        <div className="relative h-[400vh]">
          {sections.map((item, i) => (
            <div
              key={i}
              className={`sticky top-0 h-screen flex items-center justify-between px-10 transition-opacity duration-700 ${
                sectionIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Left: Big Number */}
              <h1 className="text-[200px] md:text-[500px] font-bold text-softBlack leading-none">
                {item.num}
              </h1>

              {/* Right: Colored Description Box */}
              <div
                className={`w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-xl flex items-center justify-center text-xl md:text-2xl font-narrAIte text-softBlack ${item.bg} ml-10`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
