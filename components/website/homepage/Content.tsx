"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Content({}: Props) {
  return (
    <div>
      <h1 className="w-8/12  mx-auto text-[3vw] leading-tight font-medium">
        {` Welcome to my blog I'm Kiran and here I document my latest explorations. `}
      </h1>
      <Cards />
    </div>
  );
}

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-8/12 mx-auto gap-5 mt-5">
        {sections.map((section) => (
          <Link
            href={`/demo/${section.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "")}`}
            key={section.id}
            className="w-full cursor-pointer group h-[40vh] flex flex-col gap-1"
          >
            <Image
              width={5000}
              height={5000}
              src={section.imgSrc}
              className="w-full h-[80%] rounded-lg group group-hover:translate-y-[-4px] duration-300 object-cover object-center"
              alt={section.title}
            />
            <h3 className="text-[1.2vw] font-semibold">{`${section.title}`}</h3>
            <p className="text-[0.8vw] text-zinc-700">{`${section.description}`}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

const sections = [
  {
    id: 1,
    title: "Parallex Section Transition",
    description:
      "A website animation featuring an image distortion in a curved, using the sin function, React, React Three Fiber and Framer Motion",
    imgSrc: "/img1.webp",
  },
  {
    id: 2,
    title: "Parallex Scroll Image",
    description:
      "A website animation featuring an image distortion in a curved, using the sin function, React, React Three Fiber and Framer Motion",
    imgSrc: "/img2.webp",
  },
  {
    id: 3,
    title: "Mask Section Transition",
    description:
      "A website animation featuring an image distortion in a curved, using the sin function, React, React Three Fiber and Framer Motion",
    imgSrc: "/img3.jpeg",
  },
];
