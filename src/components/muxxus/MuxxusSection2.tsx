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

type Props = {
  // Contenu principal
  title: string;
  description: string[];
  // Image à gauche
  leftImage: string;
  // Items à droite
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
  // Bouton d'action (optionnel)
  action_btn?: {
    label: string;
    link: string;
  };
  // Layout control
  imagePosition?: 'left' | 'right';
  // Header en pleine largeur
  fullWidthHeader?: boolean;
  // Vidéo en arrière-plan (optionnel)
  backgroundVideo?: string;
};

/**
 * MuxxusSection2 - Composant de section avec image à gauche et items à droite
 * 
 * Structure : 
 * - Layout standard : Image à gauche | Titre + Description + Items à droite
 * - Layout fullWidthHeader : Titre + Description (pleine largeur) | Image + Items (2 colonnes)
 * 
 * @example
 * // Layout standard
 * <MuxxusSection2 
 *   title="Section Title"
 *   description={["Description 1", "Description 2"]}
 *   leftImage="/path/to/image.jpg"
 *   items={[
 *     { icon: "🚀", title: "Feature 1", description: "Description of feature 1" },
 *     { icon: "💡", title: "Feature 2", description: "Description of feature 2" }
 *   ]}
 *   action_btn={{ label: "Learn More", link: "/learn" }}
 * />
 * 
 * // Layout avec header en pleine largeur et vidéo en arrière-plan
 * <MuxxusSection2 
 *   title="Section Title"
 *   description={["Description 1", "Description 2"]}
 *   leftImage="/path/to/image.jpg"
 *   items={[...]}
 *   fullWidthHeader={true}
 *   backgroundVideo="/assets/videos/world-globe.mp4"
 * />
 * 
 * // Layout avec vidéo en arrière-plan (sans fullWidthHeader)
 * <MuxxusSection2 
 *   title="Section Title"
 *   description={["Description 1", "Description 2"]}
 *   leftImage="/path/to/image.jpg"
 *   items={[...]}
 *   backgroundVideo="/assets/videos/custom-video.mp4"
 * />
 */
const MuxxusSection2 = ({ 
  title, 
  description, 
  leftImage,
  items,
  action_btn,
  imagePosition = 'left', // Default to left
  fullWidthHeader = false, // Default to false
  backgroundVideo // New prop
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
      
      // Ralentir la vidéo
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`relative overflow-hidden mt-16 min-h-[600px] ${backgroundVideo ? 'bg-transparent' : 'bg-gray-900'}`}>
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      
      {/* Vidéo en arrière-plan de TOUTE LA SECTION */}
      {backgroundVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {/* Overlay sombre pour améliorer la lisibilité */}
      {backgroundVideo && (
        <div className="absolute inset-0 bg-black/20 -z-5"></div>
      )}
      
      {fullWidthHeader && (
        <>
          {/* Header en pleine largeur - COMPLÈTEMENT EN DEHORS DE INNER-CONTAINER */}
          <div className="relative text-center mb-16 space-y-6 h-[250px] flex flex-col justify-center">
            {/* Contenu par-dessus la vidéo */}
            <div className="relative z-10 px-4">
              {/* Titre */}
              <h1 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[1.1] font-medium has_text_mov_anim text-white mb-4">
                {title}
              </h1>
              
              {/* Description */}
              <div className="space-y-3">
                {description?.map((para, index) => (
                  <p
                    key={`para-${index}`}
                    className="has_text_mov_anim text-[16px] leading-[1.6] text-white !font-primary"
                    data-delay={index * 0.1}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className="inner-container relative z-10">
        
        {/* Section principale avec layout dynamique */}
        <div className="py-16 lg:py-20">
          {fullWidthHeader ? (
            <>
              {/* Contenu en 2 colonnes - SÉPARÉ du header */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Colonne avec Image (position dynamique) */}
                <div className={`space-y-10 ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                  {/* Image principale sans effet */}
                  <ImageComponent
                    src={leftImage}
                    width={400}
                    height={300}
                    alt="Section Image"
                    className="w-full max-w-md"
                  />
                </div>
                
                {/* Colonne avec Items (position dynamique) */}
                <div className={`space-y-10 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
                  {/* Items avec icône, titre et description */}
                  <div className="space-y-6">
                    {items?.map((item, index) => (
                      <div
                        key={`item-${index}`}
                        className="has_fade_anim flex items-start gap-4 group"
                        data-delay={index * 0.1}
                      >
                        {/* Icône */}
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bouton d'action (optionnel) */}
                  {action_btn && (
                    <div
                      className="has_fade_anim"
                      data-fade-from="top"
                      data-fade-offset="70"
                      data-ease="bounce"
                    >
                      <ButtonFlip
                        btnText={action_btn.label}
                        link={action_btn.link}
                        className="border-white text-white hover:bg-white hover:text-gray-900 text-lg py-5 px-10"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
                         /* Layout original en 2 colonnes */
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Colonne avec Image (position dynamique) */}
               <div className={`space-y-10 ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                 {/* Image principale sans effet */}
                 <ImageComponent
                   src={leftImage}
                   width={400}
                   height={300}
                   alt="Section Image"
                   className="w-full max-w-md"
                 />
               </div>
              
              {/* Colonne avec Titre, Description et Items (position dynamique) */}
              <div className={`space-y-10 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
                {/* 1. Titre */}
                <h1 className="text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] leading-[1.1] font-medium has_text_mov_anim text-white">
                  {title}
                </h1>
                
                {/* 2. Description */}
                <div className="space-y-6">
                  {description?.map((para, index) => (
                    <p
                      key={`para-${index}`}
                      className="has_text_mov_anim text-[18px] leading-[1.7] text-white !font-primary"
                      data-delay={index * 0.1}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                
                {/* 3. Items avec icône, titre et description */}
                <div className="space-y-6">
                  {items?.map((item, index) => (
                    <div
                      key={`item-${index}`}
                      className="has_fade_anim flex items-start gap-4 group"
                      data-delay={index * 0.1}
                    >
                      {/* Icône */}
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 4. Bouton d'action (optionnel) */}
                {action_btn && (
                  <div
                    className="has_fade_anim"
                    data-fade-from="top"
                    data-fade-offset="70"
                    data-ease="bounce"
                  >
                    <ButtonFlip
                      btnText={action_btn.label}
                      link={action_btn.link}
                      className="border-white text-white hover:bg-white hover:text-gray-900 text-lg py-5 px-10"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MuxxusSection2;
