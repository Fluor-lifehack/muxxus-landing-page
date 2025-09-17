"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import MuxxusFeatureCard from "@/components/features/muxxus/MuxxusFeatureCard";
import { cn } from "@/lib/utils";

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

// Composant de particule flottante
const FloatingParticle = ({ delay, duration, x, y, size, color }: {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
  color: string;
}) => {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particleRef.current) {
      gsap.to(particleRef.current, {
        y: -100,
        x: Math.random() * 200 - 100,
        rotation: 360,
        opacity: 0,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "none",
      });
    }
  }, [delay, duration]);

  return (
    <div
      ref={particleRef}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="w-full h-full rounded-full opacity-60"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

const EnhancedMuxxusFeature = ({ title, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLDivElement>(null!);
  const descriptionRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const backgroundRef = useRef<HTMLDivElement>(null!);
  const [particles, setParticles] = useState<Array<{
    id: number;
    delay: number;
    duration: number;
    x: number;
    y: number;
    size: number;
    color: string;
  }>>([]);

  // Générer des particules aléatoires
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
    }));
    setParticles(newParticles);
  }, []);

  useGSAP(
    () => {
      // Animation du titre avec effet de révélation et glitch
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      titleTimeline
        .fromTo(
          titleRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .to(titleRef.current, {
          duration: 0.1,
          skewX: 2,
          ease: "power2.inOut",
          repeat: 1,
          yoyo: true,
        }, "-=0.5");

      // Animation de la description avec effet de typewriter
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
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des cartes avec effet de cascade et rebond
      const cards = featuresRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 100,
            opacity: 0,
            scale: 0.5,
            rotationY: -45,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animation du fond avec effet de parallaxe et distorsion
      gsap.to(backgroundRef.current, {
        yPercent: -30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animation des éléments décoratifs
      gsap.to(".decorative-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden min-h-screen" 
      ref={containerRef}
    >
      {/* Fond animé avec effet de parallaxe et distorsion */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
          filter: "blur(1px)",
        }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Éléments décoratifs géométriques */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-element absolute w-32 h-32 top-20 left-10 z-10 hidden xl:block">
          <div className="w-full h-full border-2 border-blue-500/30 rounded-lg transform rotate-45"></div>
        </div>
        
        <div className="decorative-element absolute w-24 h-24 top-40 right-20 z-10 hidden xl:block">
          <div className="w-full h-full border-2 border-purple-500/30 rounded-full"></div>
        </div>

        <div className="decorative-element absolute w-40 h-40 bottom-32 left-1/4 z-10 hidden xl:block">
          <div className="w-full h-full border-2 border-green-500/30 transform rotate-12"></div>
        </div>

        {/* Lignes de connexion */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Icône décorative principale avec animation 3D */}
      <div className="has_fade_anim absolute w-32 top-[-100px] right-[8%] z-20 hidden xl:block" 
           data-fade-offset="0" 
           data-delay="0.8">
        <div className="relative transform-gpu perspective-1000">
          <div className="transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500">
            <svg className="w-full h-full text-blue-400/60 animate-pulse" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="inner-container relative z-10">
        <div className="pt-[60px] lg:pt-[80px] xl:pt-[140px]">
          {/* Titre principal avec animation améliorée */}
          <div className="relative text-center" ref={titleRef}>
            <MuxxusSectionTitle
              title={title}
              className={cn(
                "has_text_move_anim max-w-[460px] lg:max-w-[600px] xl:max-w-[730px] mx-auto text-white",
                "drop-shadow-2xl filter contrast-125"
              )}
            />
          </div>

          {/* Description avec animation et style amélioré */}
          <div className="mt-[12px] xl:mt-[22px] text-center" ref={descriptionRef}>
            <p className={cn(
              "text-lg lg:text-xl xl:text-2xl max-w-[460px] lg:max-w-[600px] xl:max-w-[700px] mx-auto text-white/90",
              "leading-relaxed font-light tracking-wide",
              "has_fade_anim"
            )}>
              {description}
            </p>
          </div>

          {/* Grille des fonctionnalités avec animation stagger */}
          <div className="mt-[53px] xl:mt-[73px] overflow-hidden" ref={featuresRef}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-[-30px] xl:mx-[-80px] 2xl:mx-[-100px]">
              {features.map((feature, index) => (
                <MuxxusFeatureCard 
                  key={index} 
                  {...feature} 
                />
              ))}
            </div>
          </div>

          {/* Call-to-action amélioré */}
          <div className="mt-16 xl:mt-20 text-center has_fade_anim" data-delay="1.2">
            <div className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative z-10">Découvrir nos services</span>
              <svg className="w-6 h-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedMuxxusFeature;
