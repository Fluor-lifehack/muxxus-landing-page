"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  currencies: string[];
  backgroundImage: string;
  backgroundOverlay: {
    title: string;
    description: string;
  };
  className?: string;
};

/**
 * SupportedCurrenciesSection - Composant de section des devises supportées
 * 
 * Structure : Titre + Description + Grille de devises + Image de fond avec overlay
 * 
 * @example
 * <SupportedCurrenciesSection 
 *   title="50+ Supported Currencies"
 *   description="Manage your transactions in all major world currencies"
 *   currencies={["USD", "EUR", "GBP"]}
 *   backgroundImage="/path/to/image.jpg"
 *   backgroundOverlay={{ title: "Real-time Exchange Rates", description: "Access the best market rates" }}
 * />
 */
const SupportedCurrenciesSection = ({ 
  title, 
  description, 
  currencies,
  backgroundImage,
  backgroundOverlay,
  className = ""
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className={`py-20 bg-gray-900 text-white ${className}`} ref={containerRef}>
      <div className="container2">
        <div className="text-center mb-16">
          <h2 className="has_text_mov_anim text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-6">
            {title}
          </h2>
          <p className="has_fade_anim text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {currencies.map((currency, index) => (
            <div 
              key={index} 
              className="has_fade_anim bg-gray-800 p-6 rounded-[16px] text-center border border-gray-700 hover:shadow-md transition-shadow hover:border-gray-600"
              data-delay={index * 0.05}
            >
              <div className="text-2xl font-bold text-primary mb-2">{currency}</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
          ))}
        </div>

        {/* Image de fond avec overlay */}
        <div className="has_fade_anim relative rounded-[20px] overflow-hidden">
          <Image 
            src={backgroundImage}
            alt="Global Currencies"
            width={1200}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">{backgroundOverlay.title}</h3>
              <p className="text-lg opacity-90">{backgroundOverlay.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCurrenciesSection;
