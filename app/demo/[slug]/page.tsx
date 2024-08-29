import HeroParticleAnimation from "@/components/animation/HeroParticleAnimation";
import ParallexScrollImage from "@/components/animation/ParallexScrollImage";
import ParallexSectionTransition from "@/components/animation/ParallexSectionTransition";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

export default function Page({ params }: any) {
  const slug = params.slug; // Assuming your dynamic route is named [slug].tsx

  // Conditionally render the components based on the slug
  return (
    <div>
      {slug === "parallex-section-transition" && <ParallexSectionTransition />}
      {slug === "parallex-scroll-image" && <ParallexScrollImage />}
      {slug === "hero-particle-animation" && <HeroParticleAnimation />}
      {/* You can add more conditions for other components */}
      {!["parallex-section-transition", "parallex-scroll-image", "hero-particle-animation"].includes(
        slug
      ) && (
        <div className="w-full flex justify-center items-center h-screen">
          Comming soon...
        </div>
      )}
    </div>
  );
}
