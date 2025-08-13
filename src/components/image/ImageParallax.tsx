"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "@/components/tools/ImageComponent";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: string;
  alt?: string;
  className?: string;
};

const ImageParallax = ({ image, alt = "Parallax Image", className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-20 ${className}`}
    >
      <div className="inner-container">
        <div className="relative">
          <div 
            ref={imageRef}
            className="transform-gpu"
          >
            <ImageComponent
              src={image}
              alt={alt}
              width={1400}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl"
              dataSpeed={0.6}
            />
          </div>
          
          {/* Overlay avec effet de glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm" />
          
          {/* Éléments décoratifs flottants */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};

export default ImageParallax;
