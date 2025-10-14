"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import ButtonFlip from "@/components/elements/button/ButtonFlip";

// Styles CSS pour l'animation flottante
const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// Layout control: 'left' = image à gauche, 'right' = image à droite

type Props = {
  // Contenu principal
  title: string;
  description: string[];
  action_btn: {
    label: string;
    link: string;
  };
  // Images (optionnelles)
  shape_img?: string;
  small_shape?: {
    light: string;
    dark: string;
  };
  // Layout control
  imagePosition?: 'left' | 'right';
  // Customization
  backgroundColor?: string;
  textColor?: string;
  className?: string;
};

/**
 * MuxxusAiSection2 - Composant de section AI avec layout dynamique et personnalisation
 * 
 * Structure : Titre → Description → Bouton d'action | Image
 * 
 * @example
 * 
 * 
 * @param imagePosition - Position de l'image : 'left' (par défaut) ou 'right'
 * @param title - Titre principal de la section
 * @param description - Tableau de paragraphes descriptifs
 * @param action_btn - Bouton d'action avec label et lien
 * @param shape_img - Image principale
 * @param small_shape - Petite image décorative (light/dark)
 * @param backgroundColor - Couleur de fond de la section (défaut: 'bg-white')
 * @param textColor - Couleur du texte (défaut: 'text-text')
 * @param className - Classes CSS supplémentaires pour la personnalisation
 */
const MuxxusAiSection2 = ({ 
  title, 
  description, 
  action_btn, 
  shape_img, 
  small_shape, 
  imagePosition = 'left', // Default to left
  backgroundColor = 'bg-white', // Default to white
  textColor = 'text-text', // Default to text color
  className = '' // Default to empty
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
    <section ref={containerRef} className={`w-full ${backgroundColor} ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      
      {/* Section principale avec layout dynamique */}
      <div className="py-20 lg:py-24 relative z-[2]">
        <div className="container2">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne avec Titre, Description et Bouton (position dynamique) */}
            <div className={`space-y-10 ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
              {/* 1. Titre */}
              <h1 className={`text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[1.1] font-medium has_text_mov_anim ${textColor} mb-6`}>
                {title}
              </h1>
              
              {/* 2. Description */}
              <div className="space-y-6">
                {description?.map((para, index) => (
                  <p
                    key={`para-${index}`}
                    className={`has_text_mov_anim text-[16px] leading-[1.6] ${textColor} !font-primary`}
                    data-delay={index * 0.1}
                  >
                    {para}
                  </p>
                ))}
              </div>
              
              {/* 3. Bouton d'action */}
              {/* <div
                className="has_fade_anim"
                data-fade-from="top"
                data-fade-offset="70"
                data-ease="bounce"
              >
                <ButtonFlip
                  btnText={action_btn.label}
                  link={action_btn.link}
                  className="border-primary text-primary hover:bg-primary hover:text-white text-lg py-5 px-10"
                />
              </div> */}
            </div>
            
            {/* Colonne avec Image (position dynamique) */}
            <div className={`space-y-10 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
              {/* Image principale propre */}
              <div className="relative group">
                <ImageComponent
                  src={shape_img}
                  width={400}
                  height={300}
                  alt="AI Decorative"
                  className="w-full max-w-md rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusAiSection2;
