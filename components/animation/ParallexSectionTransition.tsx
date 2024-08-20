"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function ParallexSectionTransition({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={container} className="bg-black relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-black flex justify-center items-center"
    >
      <h1 className="uppercase text-center text-white tracking-widest leading-none text-[4vw] font-black">
        Parallex Section <br /> Transition
      </h1>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="w-full relative h-screen flex justify-center items-center"
    >
      <Image
        width={5000}
        height={5000}
        alt="img"
        src="/collection.jpg"
        className="w-full h-full object-cover object-center grayscale"
      ></Image>
    </motion.div>
  );
};
