"use client";

import React from 'react';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import MuxxusCard from './MuxxusCard';

interface Card {
  image: string;
  title: string;
  description: string;
  url?: string;
}

interface MuxxusCardSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cards: Card[];
  className?: string;
}

const MuxxusCardSection: React.FC<MuxxusCardSectionProps> = ({
  title,
  subtitle,
  description,
  cards,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 has_text_mov_anim">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4 has_text_mov_anim">
            {subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto has_text_mov_anim">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <MuxxusCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              url={card.url}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusCardSection;
