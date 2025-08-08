"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import DesignSkillCard from "@/components/skill/design/DesignSkillCard";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { cn } from "@/lib/utils";

// Composant Skeleton adaptatif pour les cartes
const CardSkeleton = ({ card }: { card: any }) => (
  <div className="bg-white rounded-xl p-8 animate-pulse">
    {/* Image skeleton - même dimensions que l'image réelle */}
    <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
    
    {/* Titre skeleton - adapté à la longueur du titre */}
    <div 
      className="h-6 bg-gray-200 rounded mb-4"
      style={{ width: `${Math.min(card.title.length * 8, 200)}px` }}
    ></div>
    
    {/* Description skeleton - lignes adaptées à la longueur */}
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
    
    {/* Bouton skeleton */}
    <div className="h-4 bg-gray-200 rounded w-24"></div>
  </div>
);

type Props = {
  title: string;
  description: string;
  skills: {
    title: string;
    description: string;
    icon: {
      light: string;
      dark: string;
    };
    img_small: string;
    img_main: string;
  }[];
};

const DesignSkill = ({ title, description, skills }: Props) => {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);

  // Données des cartes pour chaque service
  const cardsData = {
    0: { // Business Accounts
      cards: [
        {
          title: "Global Accounts",
          description: "Open local currency accounts to receive funds in 20+ currencies",
          icon: "globe",
          color: "blue"
        },
        {
          title: "FX & Transfers", 
          description: "Make global transfers to 200+ countries at interbank rates",
          icon: "transfer",
          color: "green"
        },
        {
          title: "Corporate Cards",
          description: "Issue multi-currency corporate cards instantly",
          icon: "card",
          color: "purple"
        },
        {
          title: "Integrations",
          description: "Connect Airwallex to other popular software platforms",
          icon: "integration",
          color: "orange"
        }
      ]
    },
    1: { // Spend
      cards: [
        {
          title: "Smart Cards",
          description: "Control spending with smart cards and automated approvals",
          icon: "card",
          color: "blue"
        },
        {
          title: "Analytics",
          description: "Track spending with detailed analytics and insights",
          icon: "chart",
          color: "green"
        },
        {
          title: "Approvals",
          description: "Automated approval workflows for expense management",
          icon: "check",
          color: "purple"
        },
        {
          title: "Reporting",
          description: "Comprehensive reporting and expense tracking",
          icon: "report",
          color: "orange"
        }
      ]
    },
    2: { // Payments
      cards: [
        {
          title: "Global Network",
          description: "Send and receive payments globally with competitive rates",
          icon: "network",
          color: "blue"
        },
        {
          title: "Instant Settlement",
          description: "Real-time settlement for faster payment processing",
          icon: "clock",
          color: "green"
        },
        {
          title: "Multi-Currency",
          description: "Support for multiple currencies and exchange rates",
          icon: "currency",
          color: "purple"
        },
        {
          title: "Security",
          description: "Enterprise-grade security for all payment transactions",
          icon: "shield",
          color: "orange"
        }
      ]
    },
    3: { // Platform APIs
      cards: [
        {
          title: "REST APIs",
          description: "Powerful REST APIs for seamless integration",
          icon: "api",
          color: "blue"
        },
        {
          title: "SDKs",
          description: "Comprehensive SDKs for multiple programming languages",
          icon: "code",
          color: "green"
        },
        {
          title: "Webhooks",
          description: "Real-time notifications via webhooks",
          icon: "webhook",
          color: "purple"
        },
        {
          title: "Documentation",
          description: "Comprehensive documentation and developer resources",
          icon: "docs",
          color: "orange"
        }
      ]
    }
  };

  const currentCards = cardsData[active as keyof typeof cardsData]?.cards || cardsData[0].cards;

  // Fonction pour changer de service avec loading
  const handleServiceChange = (index: number) => {
    if (index === active) return;
    
    setIsLoading(true);
    setActive(index);
    
    // Simuler un délai de chargement
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[60px] xl:pt-[140px]">
          <div className="grid grid-cols-[auto] lg:grid-cols-[auto,auto] justify-between gap-y-[20px] gap-x-[60px]">
            <WebSectionTItle
              title={title}
              className="has_text-move_anim max-w-[660px]"
            />
            <p className="has_fade_anim max-w-[300px]">{description}</p>
          </div>
          <div className="mt-[59px]">
            <div className="grid gap-y-10 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[420px,auto] justify-between">
              <ul className={cn(
                "border-s border-border ps-[18px] ms-[1px]",
                active !== null && "border-l-4 border-black/10"
              )}>
                {skills.map((skill, index) => (
                  <li
                    className={cn(
                      "has_fade_anim first:mt-0 mt-8 transition-all duration-300 ease-in-out",
                      index === active && "nav-link-before border-l-4 border-black -ml-[18px] pl-[18px] relative z-10"
                    )}
                    key={index}
                    onClick={() => handleServiceChange(index)}
                  >
                    <DesignSkillCard {...skill} active={index === active} />
                  </li>
                ))}
              </ul>
              <div
                className="has_fade_anim pt-[45px] ps-20 relative"
                data-fade-offset="0"
                data-delay="0.45"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {isLoading ? (
                    // Afficher les skeletons adaptatifs pendant le chargement
                    currentCards.map((card, index) => (
                      <CardSkeleton key={index} card={card} />
                    ))
                  ) : (
                    // Afficher les vraies cartes
                    currentCards.map((card, index) => (
                      <div key={index} className="bg-white rounded-xl p-8 transition-all duration-500 ease-in-out">
                        <ImageComponent
                          src={skills[active].img_main}
                          width={400}
                          height={250}
                          alt={card.title.toLowerCase().replace(/\s+/g, '-')}
                          className="rounded-lg transition-all duration-[2000ms] ease-in-out mb-6 w-full h-48 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                        <p className="text-gray-600 mb-6">{card.description}</p>
                        <button className="text-gray-900 hover:text-gray-800 font-medium transition-colors duration-200">
                          Learn more →
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSkill;
