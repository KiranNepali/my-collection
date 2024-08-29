"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Function to generate random positions for dots
const generateDots = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 100 - 50, // Initial random x position
    y: Math.random() * 100 - 50, // Initial random y position
  }));
};

export default function HeroParticleAnimation() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const dots = generateDots(50); // Number of dots

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
      className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animate dots */}
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-[0.15vw] h-[0.15vw] bg-white rounded-full"
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
    </div>
  );
}
