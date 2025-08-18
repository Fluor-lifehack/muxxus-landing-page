"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  image: string;
  alt?: string;
  className?: string;
  caption?: string;
  overlay?: boolean;
};

const FineImage = ({ 
  image, 
  alt = "Fine Image", 
  className = "",
  caption,
  overlay = true
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Animation d'entrée subtile
    gsap.fromTo(imageRef.current, 
      { 
        opacity: 0, 
        y: 20,
        scale: 0.98
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2, 
        ease: "power2.out" 
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="relative group h-full w-full">
        {/* Image principale avec effet de zoom subtil */}
        <div 
          ref={imageRef}
          className="relative overflow-hidden h-full w-full"
        >
          <ImageComponent
            src={image}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            dataSpeed={0.4}
          />
          
          {/* Overlay subtil avec effet de glassmorphism */}
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          
          {/* Bordure subtile qui apparaît au hover */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
          
          {/* Ombre portée qui s'intensifie au hover */}
          <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-all duration-500" />
        </div>
        
        {/* Caption élégant */}
        {caption && (
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-3 rounded-xl">
              <p className="text-sm font-medium leading-relaxed">{caption}</p>
            </div>
          </div>
        )}
        
        {/* Indicateur de zoom subtil */}
        {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Hover to zoom
        </div> */}
      </div>
    </div>
  );
};

export default FineImage;
