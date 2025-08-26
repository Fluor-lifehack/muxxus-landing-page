"use client";

import React from 'react';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ImageComponent from "@/components/tools/ImageComponent";

interface MuxxusCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  url?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonPosition?: 'before' | 'after';
}

const MuxxusCard: React.FC<MuxxusCardProps> = ({
  image,
  title,
  description,
  className = '',
  delay = 0,
  url = '',
  buttonText,
  buttonLink,
  buttonPosition = 'after'
}) => {
  const cardRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: cardRef }
  );

  // Fonction pour rendre le bouton
  const renderButton = () => {
    if (!url && !buttonLink) return null;
    
    return (
      <a 
        href={buttonLink || url} 
        className="inline-flex items-center justify-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-all duration-300 group w-12 h-12 rounded-full hover:w-auto hover:px-4 hover:py-2 hover:bg-purple-50 border-2 border-purple-300 hover:border-purple-400 shadow-sm hover:shadow-md"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 mr-3 whitespace-nowrap overflow-hidden">
          {buttonText || "Learn more"}
        </span>
        <svg 
          className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    );
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 has_fade_anim w-full max-w-sm h-auto min-h-[200px] ${className}`}
      data-delay={delay}
    >
      {/* Image */}
      <div className="mb-4">
        <ImageComponent
          src={image}
          alt={title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Bouton avant le texte si buttonPosition = 'before' */}
      {buttonPosition === 'before' && renderButton()}

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      {/* Bouton après le texte si buttonPosition = 'after' */}
      {buttonPosition === 'after' && renderButton()}
    </div>
  );
};

export default MuxxusCard;
