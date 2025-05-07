import { Upload, Cpu, MessageSquare, Volume2 } from "lucide-react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import React, { useState } from 'react';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { icon: <Upload size={32} />, label: "Upload Image" },
    { icon: <Cpu size={32} />, label: "Maximizing AI" },
    { icon: <MessageSquare size={32} />, label: "Generate Description" },
    { icon: <Volume2 size={32} />, label: "Text-to-Speech" },
  ];

  const handleSlide = (direction) => {
    const newIndex = Math.max(0, Math.min(steps.length - 1, activeIndex + direction));
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-creamyWhite pt-8 px-4 md:px-40 md:pt-10 md:pb-2">
      <FadeInWhenVisible>
        <div className="p-6 md:p-10 flex flex-col items-center rounded-3xl justify-center gap-4 bg-gradient-to-br from-one to-six relative">
          <div className="max-w-6xl mx-auto w-full md:my-4">
            <h1 className="text-3xl md:text-6xl font-semibold text-center mb-2 font-narrAIte text-softBlack">
              How it Works?
            </h1>
            <p className="text-softBlack font-narrAIte mb-10 md:mb-14 text-center">
              Dig deeper how <span className="font-bold">narr</span>
              <span className="font-bold text-six">AI</span>
              <span className="font-bold">te</span> processes your requests with just a few clicks.
            </p>

            <div className="relative h-[440px] sm:h-96 w-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {steps.map((step, index) => {
                  const position = index - activeIndex;
                  const zIndex = 10 - Math.abs(position);

                  let opacity = 1;
                  if (Math.abs(position) > 0) opacity = 1.0;
                  if (Math.abs(position) > 1) opacity = 1.0;

                  let scale = 1;
                  if (Math.abs(position) > 0) scale = 0.9;
                  if (Math.abs(position) > 1) scale = 0.75;

                  let translateX = position * 100;
                  if (Math.abs(position) > 1) {
                    translateX = position > 0 ? 160 : -160;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute rounded-3xl shadow-sm overflow-hidden transition-all duration-500"
                      style={{
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        opacity,
                        zIndex,
                        width: '90%',
                        maxWidth: '280px',
                        height: '380px',
                        backgroundColor: 'white',
                      }}
                    >
                      <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8">
                        <div className="rounded-full bg-two p-5 mb-6">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-softBlack font-narrAIte text-center mb-4">
                          {step.label}
                        </h3>
                        <p className="text-center font-narrAIte text-softBlack text-sm sm:text-base">
                          {index === 0 && "Upload your photos to begin the process"}
                          {index === 1 && "Artificial Intelligence analyzes the content"}
                          {index === 2 && "Apply detailed story based on your given visuals"}
                          {index === 3 && "Listen to your short story with natural voices"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => handleSlide(-1)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 sm:p-4 z-20"
                disabled={activeIndex === 0}
                aria-label="Previous card"
              >
                ←
              </button>
              <button
                onClick={() => handleSlide(1)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 sm:p-4 z-20"
                disabled={activeIndex === steps.length - 1}
                aria-label="Next card"
              >
                →
              </button>
            </div>

            <div className="flex justify-center mt-10 sm:mt-12 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-eight w-6' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
}
