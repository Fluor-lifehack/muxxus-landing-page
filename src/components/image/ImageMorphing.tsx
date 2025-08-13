"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  image: string;
  alt?: string;
  className?: string;
};

const ImageMorphing = ({ image, alt = "Morphing Image", className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Animation d'entrée
    gsap.fromTo(imageRef.current, 
      { 
        scale: 0.8, 
        rotation: -5, 
        opacity: 0 
      },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out" 
      }
    );
  }, { scope: containerRef });

  const handleMouseEnter = () => {
    if (!imageRef.current) return;
    setIsHovered(true);
    
    gsap.to(imageRef.current, {
      scale: 1.05,
      rotation: 2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    setIsHovered(false);
    
    gsap.to(imageRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-16 ${className}`}
    >
      <div className="inner-container">
        <div className="relative group">
          {/* Formes géométriques flottantes */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-bounce" />
          <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-bounce delay-1000" />
          
          <div 
            ref={imageRef}
            className="relative transform-gpu cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageComponent
              src={image}
              alt={alt}
              width={1200}
              height={700}
              className="w-full h-auto rounded-3xl shadow-xl"
              dataSpeed={0.7}
            />
            
            {/* Overlay avec effet de morphing */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl transition-all duration-300 ${
              isHovered ? 'opacity-80' : 'opacity-0'
            }`} />
            
            {/* Bordure animée */}
            <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-300 ${
              isHovered 
                ? 'border-blue-400 shadow-lg shadow-blue-400/50' 
                : 'border-transparent'
            }`} />
          </div>
          
          {/* Texte flottant */}
          <div className={`absolute bottom-6 left-6 text-white transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h3 className="text-xl font-bold mb-2">Interactive Design</h3>
            <p className="text-sm opacity-90">Hover to explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMorphing;
