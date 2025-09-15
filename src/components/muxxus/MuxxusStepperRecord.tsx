"use client";

import React from 'react';
import Image from 'next/image';

interface StepperItem {
  title: string;
  description: string;
  color?: string;
  link?: string;
  icon?: string;
}

interface MuxxusStepperRecordProps {
  title: string;
  subtitle: string;
  description: string;
  methods: StepperItem[];
  image?: string;
  className?: string;
  titleAlign?: 'left' | 'center' | 'right';
}

const MuxxusStepperRecord: React.FC<MuxxusStepperRecordProps> = ({ 
  title, 
  subtitle, 
  description,
  methods, 
  image,
  className = '',
  titleAlign = 'center'
}) => {
  // Déterminer les classes d'alignement
  const getAlignmentClasses = () => {
    switch (titleAlign) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      case 'center':
      default:
        return 'text-center';
    }
  };

  const getMarginClasses = () => {
    switch (titleAlign) {
      case 'left':
        return '';
      case 'right':
        return '';
      case 'center':
      default:
        return 'mx-auto';
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre et sous-titre */}
        <div className={`${getAlignmentClasses()} mb-12`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl ${getMarginClasses()}`}>
            {subtitle}
          </p>
          <p className={`text-lg text-gray-500 mt-3 max-w-4xl ${getMarginClasses()}`}>
            {description}
          </p>
        </div>

        {/* Contenu principal - Vrai Stepper style avec image à droite */}
        <div className="flex gap-12 justify-center">
          {/* Stepper à gauche */}
          <div className="flex-1 max-w-2xl">
            {methods.map((item, index) => (
              <div key={index} className="pb-8">
                <div className="flex items-start">
                  {/* Icône de l'étape */}
                  {item.icon && (
                    <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  )}
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
