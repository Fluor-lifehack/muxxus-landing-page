"use client";

import React from 'react';
import Image from 'next/image';

interface SecurityItem {
  icon: string;
  title: string;
  description: string;
}

interface MuxxusSecurityProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: SecurityItem[];
  className?: string;
}

const MuxxusSecurity: React.FC<MuxxusSecurityProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  items, 
  className = '' 
}) => {
  return (
    <section className={`py-16 bg-whitesmoke ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section principale : Titre, sous-titre, description + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Colonne gauche - Titre, sous-titre, description */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600">
              {description}
            </p>
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

        {/* Section des items en bas */}
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-left"
            >
              {/* Icône */}
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gray-100">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              
              {/* Titre */}
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusSecurity;
