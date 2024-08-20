"use client";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import Lenis from "lenis";

type Props = {};

export default function HomepageMain({}: Props) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full py-[4rem]">
      <Content />
    </div>
  );
}
