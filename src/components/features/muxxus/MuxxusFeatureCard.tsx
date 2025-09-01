"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBr } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// Enregistrer ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  title: string;
  description: string;
  icon: string;
  index?: number;
};

const MuxxusFeatureCard = ({ title, description, icon, index = 0 }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null!);
  const iconRef = useRef<HTMLDivElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);
  const progressRef = useRef<HTMLDivElement>(null!);
  const borderRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    // Animation de base avec hasFadeAnim
    hasFadeAnim();

    // Animation d'entrée de la carte au scroll
    gsap.fromTo(
      cardRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotationY: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation de l'icône avec effet de rebond
    gsap.fromTo(
      iconRef.current,
      {
        y: -30,
        scale: 0.7,
        opacity: 0,
        rotation: -10,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation du contenu avec effet de révélation
    gsap.fromTo(
      contentRef.current,
      {
        y: 40,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation de l'indicateur de progression
    gsap.fromTo(
      progressRef.current,
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation de la bordure décorative
    gsap.fromTo(
      borderRef.current,
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation de l'effet de brillance au scroll - ACCÉLÉRÉE
    gsap.to(cardRef.current, {
      backgroundColor: "rgba(59, 130, 246, 0.02)",
      duration: 0.3,                      // Réduit de 0.5 à 0.3
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        scrub: 1,
      },
    });

    // Animation de l'icône au scroll (légère élévation) - ACCÉLÉRÉE
    gsap.to(iconRef.current, {
      y: -5,
      scale: 1.05,
      duration: 0.2,                      // Réduit de 0.3 à 0.2
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        scrub: 1,
      },
    });

  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card relative bg-white dark:bg-gray-800 rounded-2xl p-8",
        "border border-gray-200 dark:border-gray-700",
        "shadow-sm transition-all duration-300",
        "transform-gpu",
        "has_fade_anim"
      )}
      data-fade-from="bottom"
    >
      {/* Effet de brillance au scroll */}
      <div className="absolute inset-0 bg-gray-100/30 dark:bg-gray-700/30 opacity-0 transition-opacity duration-300 rounded-2xl"></div>

      {/* Icône avec animation au scroll */}
      <div className="relative z-10 mb-6" ref={iconRef}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-200">
          <ImageComponent 
            src={icon} 
            height={32} 
            width={32} 
            className="w-8 h-8 object-contain filter transition-all duration-200"
          />
        </div>
      </div>

      {/* Contenu de la carte avec animation au scroll */}
      <div className="relative z-10" ref={contentRef}>
        <h3
          className={cn(
            "text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4",
            "leading-tight transition-colors duration-200"
          )}
          dangerouslySetInnerHTML={convertWithBr(title)}
        />
        
        <p className={cn(
          "text-gray-600 dark:text-gray-300 leading-relaxed",
          "transition-colors duration-200"
        )}>
          {description}
        </p>

        {/* Indicateur de progression avec animation au scroll */}
        {/* <div className="mt-6 flex items-center gap-2 transition-opacity duration-200" ref={progressRef}>
          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Fonctionnalité active</span>
        </div> */}
      </div>

      {/* Bordure décorative avec animation au scroll */}
      <div 
        ref={borderRef}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600 dark:bg-gray-400 transform scale-x-0 origin-left rounded-b-2xl"
      ></div>

      {/* Effet de lueur subtil au scroll */}
      <div className="absolute inset-0 bg-gray-100/20 dark:bg-gray-700/20 opacity-0 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );
};

export default MuxxusFeatureCard;
