"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import { cn } from "@/lib/utils";

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
};

/**
 * MuxxusAiSection - Composant de section AI avec layout dynamique
 * 
 * Structure : Titre → Description → Bouton d'action | Image
 * 
 * @example
 * // Image à gauche (par défaut)
 * <MuxxusAiSection 
 *   title="AI Solutions"
 *   description={["Description 1", "Description 2"]}
 *   action_btn={{ label: "Learn More", link: "/ai" }}
 *   shape_img="/path/to/image.jpg"
 *   small_shape={{ light: "/light.jpg", dark: "/dark.jpg" }}
 *   imagePosition="left" // ou omettre pour la valeur par défaut
 * />
 * 
 * // Image à droite
 * <MuxxusAiSection 
 *   {...props}
 *   imagePosition="right"
 * />
 * 
 * @param imagePosition - Position de l'image : 'left' (par défaut) ou 'right'
 * @param title - Titre principal de la section
 * @param description - Tableau de paragraphes descriptifs
 * @param action_btn - Bouton d'action avec label et lien
 * @param shape_img - Image principale
 * @param small_shape - Petite image décorative (light/dark)
 */
const MuxxusAiSection = ({ 
  title, 
  description, 
  action_btn, 
  shape_img, 
  small_shape, 
  imagePosition = 'left' // Default to left
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
    <section ref={containerRef}>
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      <div className="inner-container">


        {/* Section principale avec layout dynamique */}
        <div className="py-20 lg:py-24 relative z-[2]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne avec Titre, Description et Bouton (position dynamique) */}
            <div className={`space-y-10 ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
              {/* 1. Titre */}
              <h1 className="text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] leading-[1.1] font-medium has_text_mov_anim">
                {title}
              </h1>
              
              {/* 2. Description */}
              <div className="space-y-8">
                {description?.map((para, index) => (
                  <p
                    key={`para-${index}`}
                    className="has_text_mov_anim text-[18px] leading-[1.7] text-text-3 !font-primary"
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
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-gradient-to-r from-[#111827] to-[#1f2937] text-white hover:from-[#1f2937] hover:to-[#374151] border-0 px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  )}
                  href={action_btn.link}
                >
                  <span data-text={action_btn.label}>{action_btn.label}</span>
                  <FaPlay className="ml-3" />
                </Link>
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
