"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import MuxxusFeatureCard from "@/components/features/muxxus/MuxxusFeatureCard";
import { cn } from "@/lib/utils";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import hasCharAnim from "@/lib/animation/hasCharAnim";

// Enregistrer ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  title: string;
  description: string;
  img_icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const MuxxusFeature = ({ title, img_icon, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const iconRef = useRef<HTMLDivElement>(null!);
  const decorativeElementsRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Animations de base
      hasFadeAnim();
      hasTextMovAnim();
      hasCharAnim();

      // Animation de l'icône décorative au scroll - ACCÉLÉRÉE
      gsap.fromTo(
        iconRef.current,
        {
          y: -50,
          scale: 0.8,
          opacity: 0,
          rotation: -15,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8, // Réduit de 1.2 à 0.8
          delay: 0.1,    // Réduit de 0.3 à 0.1
          ease: "back.out(1.4)", // Légèrement plus rapide
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation du titre avec effet de révélation au scroll - ACCÉLÉRÉE
      gsap.fromTo(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8, // Réduit de 1.2 à 0.8
          delay: 0.2,    // Réduit de 0.5 à 0.2
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la description avec effet de typewriter au scroll - ACCÉLÉRÉE
      gsap.fromTo(
        descriptionRef.current,
        {
          y: 50,
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.0, // Réduit de 1.5 à 1.0
          delay: 0.4,    // Réduit de 0.8 à 0.4
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des éléments décoratifs au scroll - ACCÉLÉRÉE
      const decorativeElements = decorativeElementsRef.current?.children;
      if (decorativeElements) {
        gsap.fromTo(
          decorativeElements,
          {
            y: 100,
            opacity: 0,
            scale: 0.5,
            rotation: 45,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.7,    // Réduit de 1.0 à 0.7
            stagger: 0.15,    // Réduit de 0.3 à 0.15
            ease: "power2.out",
            scrollTrigger: {
              trigger: decorativeElementsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animation de l'effet de brillance sur l'icône au scroll - ACCÉLÉRÉE
      gsap.to(iconRef.current, {
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
        duration: 0.3, // Réduit de 0.5 à 0.3
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          scrub: 1,
        },
      });

    },
    { scope: containerRef }
  );

  return (
    <section 
      className="relative bg-white dark:bg-gray-800 overflow-hidden" 
      ref={containerRef}
    >
      {/* Background subtil avec motif */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/assets/imgs/muxxus/background/img.png')" }}
      />
      
      {/* Éléments décoratifs subtils avec animation au scroll - DÉLAIS RÉDUITS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={decorativeElementsRef}>
        <div className="has_fade_anim absolute w-32 h-32 top-20 left-10 z-10 hidden xl:block" 
             data-fade-offset="0" 
             data-delay="0.4"> {/* Réduit de 0.8 à 0.4 */}
          <div className="w-full h-full border border-gray-300/20 rounded-lg transform rotate-45"></div>
        </div>
        
        <div className="has_fade_anim absolute w-24 h-24 top-40 right-20 z-10 hidden xl:block" 
             data-fade-offset="0" 
             data-delay="0.6"> {/* Réduit de 1.2 à 0.6 */}
          <div className="w-full h-full border border-gray-300/20 rounded-full"></div>
        </div>

        <div className="has_fade_anim absolute w-40 h-40 bottom-32 left-1/4 z-10 hidden xl:block" 
             data-fade-offset="0" 
             data-delay="0.8"> {/* Réduit de 1.6 à 0.8 */}
          <div className="w-full h-full border border-gray-300/20 transform rotate-12"></div>
        </div>
      </div>

      <div className="inner-container relative z-10">
        <div className="section-spacing-top pb-[60px] xl:pb-[100px]">
          {/* Header de la section */}
          <div className="text-center mb-16">
            {/* Icône décorative avec animation au scroll */}
            <div className="mb-8" ref={iconRef}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 transition-all duration-300"> {/* Réduit de 500ms à 300ms */}
                <img 
                  src={img_icon} 
                  alt="Features Icon" 
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Titre principal avec animation au scroll */}
            <div className="mb-6" ref={titleRef}>
              <DesignSectionTitle 
                title={title}
                className="max-w-[460px] lg:max-w-[600px] xl:max-w-[730px] mx-auto text-gray-900 dark:text-white"
              />
            </div>

            {/* Description avec animation au scroll */}
            <div className="max-w-[460px] lg:max-w-[600px] xl:max-w-[700px] mx-auto" ref={descriptionRef}>
              <p className={cn(
                "text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300",
                "leading-relaxed font-light",
                "has_fade_anim"
              )}>
                {description}
              </p>
            </div>
          </div>

          {/* Grille des fonctionnalités */}
          <div className="overflow-hidden" ref={featuresRef}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <MuxxusFeatureCard 
                  key={index} 
                  {...feature} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusFeature;
