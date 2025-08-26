"use client";

import React from 'react';
import Image from 'next/image';

interface StepperItem {
  title: string;
  description: string;
  color?: string;
  link?: string;
}

interface MuxxusStepperRecordProps {
  title: string;
  subtitle: string;
  description: string;
  methods: StepperItem[];
  image?: string;
  className?: string;
}

const MuxxusStepperRecord: React.FC<MuxxusStepperRecordProps> = ({ 
  title, 
  subtitle, 
  description,
  methods, 
  image,
  className = '' 
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            {subtitle}
          </p>
          <p className="text-lg text-gray-500 mt-3 max-w-4xl">
            {description}
          </p>
        </div>

        {/* Contenu principal - Vrai Stepper style avec image à droite */}
        <div className="flex gap-12">
          {/* Stepper à gauche */}
          <div className="flex-1 max-w-2xl">
            {methods.map((item, index) => (
              <div key={index} className="pb-8">
                <div className="flex items-start">
                  {/* Contenu de l'étape */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image unique à droite */}
          {image && (
            <div className="flex-shrink-0 w-80">
              <Image
                src={image}
                alt={title}
                width={320}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MuxxusStepperRecord;
