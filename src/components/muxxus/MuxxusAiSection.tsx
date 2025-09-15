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
  // Images
  shape_img: string;
  small_shape: {
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
 * MuxxusAiSection - Composant de section AI avec layout dynamique et personnalisation
 * 
 * Structure : Titre → Description → Bouton d'action | Image
 * 
 * @example
 * // Image à gauche (par défaut) avec fond blanc
 * <MuxxusAiSection 
 *   title="AI Solutions"
 *   description={["Description 1", "Description 2"]}
 *   action_btn={{ label: "Learn More", link: "/ai" }}
 *   shape_img="/path/to/image.jpg"
 *   small_shape={{ light: "/light.jpg", dark: "/dark.jpg" }}
 *   imagePosition="left" // ou omettre pour la valeur par défaut
 * />
 * 
 * // Image à droite avec fond personnalisé
 * <MuxxusAiSection 
 *   {...props}
 *   imagePosition="right"
 *   backgroundColor="bg-gray-900"
 *   textColor="text-white"
 * />
 * 
 * // Avec classe CSS personnalisée
 * <MuxxusAiSection 
 *   {...props}
 *   backgroundColor="bg-primary"
 *   textColor="text-white"
 *   className="shadow-lg rounded-lg"
 * />
 * 
 * @param imagePosition - Position de l'image : 'left' (par défaut) ou 'right'
 * @param title - Titre principal de la section
 * @param description - Tableau de paragraphes descriptifs
 * @param action_btn - Bouton d'action avec label et lien
 * @param shape_img - Image principale
 * @param small_shape - Petite image décorative (light/dark)
 * @param backgroundColor - Couleur de fond de la section (défaut: transparent)
 * @param textColor - Couleur du texte (défaut: 'text-text')
 * @param className - Classes CSS supplémentaires pour la personnalisation
 */
const MuxxusAiSection = ({ 
  title, 
  description, 
  action_btn, 
  shape_img, 
  small_shape, 
  imagePosition = 'left', // Default to left
  backgroundColor = '', // Default to transparent
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
    <section ref={containerRef} className={`${backgroundColor} ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      <div className="inner-container">


        {/* Section principale avec layout dynamique */}
        <div className="py-20 lg:py-24 relative z-[2]">
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
              <div
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
              </div>
            </div>
            
            {/* Colonne avec Image (position dynamique) */}
            <div className={`space-y-10 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
              {/* 4. Image principale avec effet */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <ImageComponent
                  src={shape_img}
                  width={280}
                  height={220}
                  alt="AI Decorative"
                  className="relative w-full max-w-xs rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Small shape flottant */}
                <div className="absolute -top-3 -right-3 animate-float">
                  <ImageComponent
                    src={small_shape.light}
                    darkSrc={small_shape.dark}
                    width={70}
                    height={140}
                    alt="small shape"
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusAiSection;
