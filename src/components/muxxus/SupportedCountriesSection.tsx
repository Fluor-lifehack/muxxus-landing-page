"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type CountryData = {
  name: string;
  currency: string;
};

type Props = {
  title: string;
  description: string;
  countries: CountryData[];
  className?: string;
};

const SupportedCountriesSection = ({ 
  title, 
  description, 
  countries,
  className = ""
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const getCountryFlag = (countryName: string): string => {
    const flagMap: { [key: string]: string } = {
      'Ivory Coast': '🇨🇮',
      'France': '🇫🇷',
      'Luxembourg': '🇱🇺',
      'Ethiopia': '🇪🇹',
      'Canada': '🇨🇦',
      'United Kingdom': '🇬🇧',
      'United States': '🇺🇸',
      'European Union': '🇪🇺',
      'West Africa': '🌍'
    };
    return flagMap[countryName] || '🌍';
  };

  useGSAP(() => {
    hasFadeAnim();
    hasTextMovAnim();
  }, { scope: containerRef });

  return (
    <section className={`py-16 bg-gray-900 text-white ${className}`} ref={containerRef}>
      <div className="container2">
        <div className="text-center mb-10">
          <h2 className="has_text_mov_anim text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="has_fade_anim text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8 max-w-md">
          {countries && countries.length > 0 ? (
            countries.map((country, index) => (
              <div 
                key={index}
                className="has_fade_anim flex flex-col items-center bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                data-delay={index * 0.05}
              >
                <div className="text-3xl mb-2">{getCountryFlag(country.name)}</div>
                <div className="text-sm text-gray-400">{country.currency}</div>
                <div className="font-semibold">{country.name}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-lg col-span-full text-center">
              Aucun pays disponible pour le moment
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCountriesSection;
