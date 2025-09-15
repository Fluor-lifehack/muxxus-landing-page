"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type CountryData = {
  name: string;
  currency: string;
  currencyName: string;
  exchangeRate: string;
  bankCode: string;
  accountFormat: string;
  features: string[];
};

type Props = {
  title: string;
  description: string;
  countries: CountryData[];
  className?: string;
};

/**
 * SupportedCountriesSection - Composant de section des pays supportés
 * 
 * Structure : Titre + Description + Grille de pays avec drapeaux et devises
 * 
 * @example
 * <SupportedCountriesSection 
 *   title="Supported Countries"
 *   description="Description of supported countries"
 *   countries={[
 *     { name: "France", currency: "EUR", currencyName: "Euro", ... }
 *   ]}
 * />
 */
const SupportedCountriesSection = ({ 
  title, 
  description, 
  countries,
  className = ""
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  // Debug: Log des données reçues
  console.log('SupportedCountriesSection props:', { title, description, countries });
  console.log('Countries array length:', countries?.length);
  console.log('Countries data:', countries);

  // Fonction pour obtenir le drapeau du pays
  const getCountryFlag = (countryName: string): string => {
    const flagMap: { [key: string]: string } = {
      'Ivory Coast': '🇨🇮',
      'France': '🇫🇷',
      'Luxembourg': '🇱🇺',
      'Ethiopia': '🇪🇹',
      'Canada': '🇨🇦',
      'United Kingdom': '🇬🇧',
      'United States': '🇺🇸'
    };
    return flagMap[countryName] || '🌍';
  };

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
        
        {/* Grille des pays avec drapeaux et devises */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {countries && countries.length > 0 ? (
            countries.map((country, index) => (
              <div 
                key={index} 
                className="has_fade_anim bg-gray-800 p-4 rounded-[16px] text-center border border-gray-700 hover:shadow-md transition-shadow hover:border-gray-600"
                data-delay={index * 0.05}
              >
                <div className="text-3xl mb-4">
                  {getCountryFlag(country.name)}
                </div>
                <div className="text-xl font-bold text-white mb-3">{country.name}</div>
                <div className="text-sm text-gray-400 font-medium">{country.currency}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-lg col-span-full text-center">
              Aucun pays disponible pour le moment
            </div>
          )}
        </div>




      </div>
    </section>
  );
};

export default SupportedCountriesSection;
