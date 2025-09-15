"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  image: string;
}

interface MuxxusStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
  className?: string;
}

const MuxxusSteps: React.FC<MuxxusStepsProps> = ({ 
  title, 
  subtitle, 
  steps, 
  className = '' 
}) => {
  const [activeStep, setActiveStep] = useState(0);

  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

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
          {/* Colonne gauche - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-5 rounded-lg transition-all duration-500 cursor-pointer hover:bg-gray-100"
                onClick={() => setActiveStep(index)}
              >
                {/* Numéro du step */}
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-gray-900 text-white scale-110'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {step.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="ml-11 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne droite - Image active */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === activeStep
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[500px] object-cover"
                    width={500}
                    height={500}
                  />
                  
                  {/* Overlay avec numéro du step */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-primary scale-125' 
                      : index === 0 
                        ? 'bg-blue-400' 
                        : index === 1 
                          ? 'bg-green-400' 
                          : index === 2 
                            ? 'bg-yellow-400' 
                            : index === 3 
                              ? 'bg-purple-400' 
                              : index === 4 
                                ? 'bg-pink-400' 
                                : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusSteps;
