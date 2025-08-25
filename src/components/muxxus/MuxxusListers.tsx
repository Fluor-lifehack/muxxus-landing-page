"use client";

import React from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface MuxxusListersProps {
  title: string;
  subtitle: string;
  steps: Step[];
  className?: string;
}

const MuxxusListers: React.FC<MuxxusListersProps> = ({ 
  title, 
  subtitle, 
  steps, 
  className = '' 
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Steps avec icônes */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-5 rounded-lg transition-all duration-500"
              >
                {/* Icône du step */}
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-gray-100">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {step.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="ml-14 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne droite - Image fixe */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src={steps[0].image}
                alt={steps[0].title}
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

export default MuxxusListers;
