"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  alt?: string;
  className?: string;
};

const ImageShowcase = ({ 
  image, 
  title, 
  description, 
  ctaText = "Learn More", 
  ctaLink = "#",
  alt = "Showcase Image",
  className = "" 
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current) return;

    // Animation d'entrée du texte
    gsap.fromTo(textRef.current, 
      { 
        x: -100, 
        opacity: 0 
      },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      }
    );

    // Animation d'entrée de l'image
    gsap.fromTo(imageRef.current, 
      { 
        x: 100, 
        opacity: 0,
        scale: 0.9
      },
      { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: "power2.out",
        delay: 0.3
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-24 ${className}`}
    >
      <div className="inner-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Section texte */}
          <div 
            ref={textRef}
            className="relative z-10"
          >
            <div className="max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Featured Project
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* Bouton CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={ctaLink}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {ctaText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section image */}
          <div 
            ref={imageRef}
            className="relative"
          >
            <div className="relative">
              <ImageComponent
                src={image}
                alt={alt}
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl"
                dataSpeed={0.5}
              />
              
              {/* Overlay avec effet de glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm" />
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-bounce delay-1000" />
              
              {/* Bordure animée */}
              <div className="absolute inset-0 rounded-3xl border border-white/20" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 -z-10" />
    </div>
  );
};

export default ImageShowcase;
