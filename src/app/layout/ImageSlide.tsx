"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideImages } from "../config/data/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // === 1️⃣ Responsive slide width ===
  const [currentWidth, setCurrentWidth] = useState(700);
  const gap = 20;
  const totalSlides = slideImages.length;

  useEffect(() => {
    const handleResize = () => {
      // for small devices use 90% of viewport, else keep 700
      const w = window.innerWidth < 768 ? Math.min(window.innerWidth * 0.9, 700) : 700;
      setCurrentWidth(w);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === 2️⃣ Controls ===
  const handleNext = () => setActiveIndex((p) => (p + 1) % totalSlides);
  const handlePrev = () => setActiveIndex((p) => (p === 0 ? totalSlides - 1 : p - 1));

  // === 3️⃣ Autoplay ===
  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden px-2 my-10 animate-fade-in">
      {/* Track */}
      <motion.div
        className="flex"
        animate={{ x: -(activeIndex * (currentWidth + gap)) }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {slideImages.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              animate={{
                scale: isActive ? 1 : 0.9,
                boxShadow: isActive
                  ? "0px 8px 25px rgba(0,0,0,0.25)"
                  : "0px 0px 0px rgba(0,0,0,0)",
                opacity: isActive ? 1 : 0.7,
              }}
              transition={{ duration: 0.6 }}
              className="relative flex-shrink-0 h-[260px] md:h-[350px] rounded-xl overflow-hidden bg-center bg-cover mr-5"
              style={{
                width: `${currentWidth}px`,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${item.bgImage})`,
              }}
            >
              <div className="text-gray-100 font-extralight px-2 py-2">
                {item.logo}
              </div>

              <div className="absolute bottom-6 left-4 right-4 text-white">
                <h1 className="font-bold text-3xl md:text-6xl py-4">
                  {item.heading}
                </h1>
                <h1 className="text-lg md:text-2xl font-semibold leading-snug">
                  {item.source}
                </h1>
                <p className="text-sm md:text-base opacity-80 mt-1">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slideImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === i ? "bg-black w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="justify-self-end my-3 flex justify-center">
        <button
          onClick={handlePrev}
          className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md mr-2"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
}
