"use client";

import React from 'react';
import Image from 'next/image';
import ButtonFlip from "@/components/elements/button/ButtonFlip";

interface MuxxusCenteredSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const MuxxusCenteredSection: React.FC<MuxxusCenteredSectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  buttonText = "Read more",
  buttonLink = "#",
  className = '' 
}) => {
  return (
    <section className={`py-16 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section principale : Titre, sous-titre, description + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Titre, sous-titre, description + Bouton */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {title}
            </h2>
            <p className="text-xl text-gray-300">
              {subtitle}
            </p>
            <p className="text-lg text-gray-300">
              {description}
            </p>
            
            {/* Bouton de redirection */}
            <div className="pt-4">
              <ButtonFlip 
                btnText={buttonText}
                link={buttonLink}
                className="bg-white text-gray-900 border-white hover:bg-gray-100 hover:text-gray-900"
              />
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="w-full h-[500px] object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusCenteredSection;
