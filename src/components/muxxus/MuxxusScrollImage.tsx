"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Enregistrer ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

interface ScrollImage {
  src: string;
  alt: string;
  scrollPosition: number; // Position de scroll où cette image doit apparaître
}

interface MuxxusScrollImageProps {
  images: ScrollImage[];
  className?: string;
  width?: number;
  height?: number;
  sticky?: boolean; // Si l'image doit rester sticky pendant le scroll
  stickyTop?: string; // Position sticky (ex: "top-20")
}

const MuxxusScrollImage: React.FC<MuxxusScrollImageProps> = ({
  images,
  className = '',
  width = 400,
  height = 400,
  sticky = false,
  stickyTop = 'top-20'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Créer un seul trigger pour le conteneur principal
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const sectionHeight = 1 / images.length;
        
        // Déterminer quelle image afficher selon le progress
        let newIndex = Math.floor(progress / sectionHeight);
        newIndex = Math.min(newIndex, images.length - 1);
        newIndex = Math.max(newIndex, 0);
        
        if (newIndex !== currentImageIndex) {
          console.log(`Changing image from ${currentImageIndex} to ${newIndex}, progress: ${progress}`);
          setCurrentImageIndex(newIndex);
        }
      }
    });

    // Nettoyer les triggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images, currentImageIndex]);

  // Effet pour l'animation de transition d'image
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.2
          });
        }
      });
    }
  }, [currentImageIndex]);

  const stickyClasses = sticky ? `sticky ${stickyTop}` : '';

  return (
    <div 
      ref={containerRef} 
      className={`relative ${stickyClasses} ${className}`}
    >
      <div 
        ref={imageRef}
        className="transition-all duration-500 ease-in-out"
      >
        <Image
          src={images[currentImageIndex]?.src || images[0]?.src}
          alt={images[currentImageIndex]?.alt || images[0]?.alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
          priority={currentImageIndex === 0}
        />
      </div>
      

    </div>
  );
};

export default MuxxusScrollImage;
