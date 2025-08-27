"use client";

import React from 'react';
import Image from 'next/image';

interface IntegrationMethod {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

interface MuxxusListersProps {
  title: string;
  subtitle: string;
  description: string;
  methods: IntegrationMethod[];
  className?: string;
}

const MuxxusListers: React.FC<MuxxusListersProps> = ({ 
  title, 
  subtitle, 
  description,
  methods, 
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
          <p className="text-lg text-gray-500 mt-3 max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {methods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4">
                <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Image
                    src={method.icon}
                    alt={method.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
              <a href={method.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusListers;
