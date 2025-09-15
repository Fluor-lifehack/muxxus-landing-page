"use client";

import Image from 'next/image';
import ButtonFlip from "@/components/elements/button/ButtonFlip";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  badgeText?: string;
  badgeSubtext?: string;
  badgeColor?: 'primary' | 'white';
  imageFirst?: boolean; // true = image à gauche, false = texte à gauche
  className?: string;
};

/**
 * FeatureSection - Composant de section avec image et texte, ordre configurable
 * 
 * Structure : Image + Texte ou Texte + Image selon imageFirst
 * 
 * @example
 * <FeatureSection 
 *   title="API Solutions"
 *   subtitle="Manage global accounts at scale"
 *   description="Description..."
 *   buttonText="Learn More"
 *   buttonLink="#"
 *   imageSrc="/path/to/image.jpg"
 *   imageAlt="Description"
 *   badgeText="API"
 *   badgeSubtext="RESTful"
 *   badgeColor="white"
 *   imageFirst={false}
 * />
 */
const FeatureSection = ({ 
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  badgeText,
  badgeSubtext,
  badgeColor,
  imageFirst = false,
  className = ""
}: Props) => {
  const textContent = (
    <div>
      <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-6">
        {title}
      </h2>
      <h3 className="text-2xl font-semibold mb-4">
        {subtitle}
      </h3>
      <p className="text-lg text-text-3 mb-6">
        {description}
      </p>
      <ButtonFlip
        btnText={buttonText}
        link={buttonLink}
        className={className.includes('bg-gray-900') || className.includes('bg-black') 
          ? "bg-white text-gray-900 border-white hover:bg-gray-100" 
          : "bg-primary text-white border-primary hover:bg-primary/90"
        }
      />
    </div>
  );

  const imageContent = (
    <div className="relative">
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        width={600}
        height={400}
        className="w-full rounded-[20px]"
      />
      {badgeText && badgeSubtext && (
        <div className={`absolute -bottom-6 -right-6 p-4 rounded-[16px] shadow-lg ${
          badgeColor === 'white' 
            ? 'bg-white' 
            : 'bg-primary text-white'
        }`}>
          <div className={`text-2xl font-bold ${
            badgeColor === 'white' ? 'text-primary' : ''
          }`}>
            {badgeText}
          </div>
          <div className={`text-sm ${
            badgeColor === 'white' ? 'text-text-3' : 'opacity-90'
          }`}>
            {badgeSubtext}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className={`py-20 ${className}`}>
      <div className="container2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imageFirst ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
