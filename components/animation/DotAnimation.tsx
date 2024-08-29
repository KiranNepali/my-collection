"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to generate random positions for dots
const generateDots = (count:any) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100 - 50, // Initial random x position
    y: Math.random() * 100 - 50, // Initial random y position
  }));
};

export default function Hero() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const dots = generateDots(20); // Number of dots

  // Update mouse position (within the hero section)
  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <div
      className="py-[30vh] w-full h-screen flex justify-center items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-[30vw] h-[30vw] rounded-full filter blur-[50px] opacity-50 animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, #FFDB15, #85D3FF, #FF6666, #B57AFF)",
        }}
      ></div>

      {/* Animate dots */}
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          initial={{
            x: `${dot.x}vw`,
            y: `${dot.y}vh`,
          }}
          animate={{
            x: `${dot.x + mouseX * 2}vw`, // Subtle movement based on mouseX
            y: `${dot.y + mouseY * 2}vh`, // Subtle movement based on mouseY
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        />
      ))}

      <div className="relative z-[2] flex justify-center items-center flex-col gap-2 text-white">
        <h1 className="text-[4.5vw] leading-normal font-bold">
          Find The Job You Deserve
        </h1>
        <p className="text-[1.2vw] leading-none">
          Your dream job is closer than you think—let us help you find it.
        </p>
        <div className="flex text-[1vw] mt-5 justify-center items-center gap-4">
          <button className="border border-white px-8 py-3 rounded-lg text-[1vw] leading-none flex justify-center items-center hover:bg-white hover:text-black transition-colors">
            Contact
          </button>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-[1vw] leading-none flex justify-center items-center hover:bg-blue-600 transition-colors">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
