import { Upload, Cpu, MessageSquare, Volume2 } from "lucide-react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import React, { useRef, useState, useEffect } from 'react';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const steps = [
    { icon: <Upload size={32} />, label: "Upload Image" },
    { icon: <Cpu size={32} />, label: "Analyze with AI" },
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
    <div className="Background bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">

    <FadeInWhenVisible>
    <div className="Section p-10 flex flex-col items-center rounded-3xl justify-center gap-4 bg-gradient-to-br from-one to-six relative">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-16 font-narrAIte text-softBlack">How it Works?</h1>
        
          <div className="relative h-96 md:h-80">
            {/* The overlapping gallery effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              {steps.map((step, index) => {
                // Calculate position and styling based on relative position to active index
                const position = index - activeIndex;
                
                // Calculate z-index (active has highest)
                const zIndex = 10 - Math.abs(position);
                
                // Calculate opacity
                let opacity = 1;
                if (Math.abs(position) > 0) opacity = 0.7;
                if (Math.abs(position) > 1) opacity = 0.4;
                
                // Calculate scale
                let scale = 1;
                if (Math.abs(position) > 0) scale = 0.85;
                if (Math.abs(position) > 1) scale = 0.7;
                
                // Calculate horizontal position offset
                let translateX = position * 65;
                if (Math.abs(position) > 1) {
                  translateX = position > 0 ? 120 : -120;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute rounded-2xl shadow-xl overflow-hidden"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: 'all 0.5s ease',
                      width: '280px',
                      height: '380px',
                      backgroundColor: 'white',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8">
                      <div className="rounded-full bg-gray-100 p-5 mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-4">{step.label}</h3>
                      <p className="text-center text-gray-600">
                        {index === 0 && "Upload your photos to begin the process"}
                        {index === 1 && "Our AI analyzes your content in seconds"}
                        {index === 2 && "Get detailed descriptions of your visuals"}
                        {index === 3 && "Listen to your content with natural voices"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons (Arrows) */}
            <button 
              onClick={() => handleSlide(-1)} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
              disabled={activeIndex === 0}
              aria-label="Previous card"
            >
              ◀
            </button>
            <button 
              onClick={() => handleSlide(1)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
              disabled={activeIndex === steps.length - 1}
              aria-label="Next card"
            >
              ▶
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'
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