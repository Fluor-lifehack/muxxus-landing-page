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
const CardSkeleton = ({ card }: { card: { title: string; description: string; image: string } }) => (
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

  // Données des cartes pour chaque service avec images
  const cardsData = {
    0: { // Business Accounts
      cards: [
        {
          title: "Global Accounts",
          description: "Create and manage multi-currency accounts worldwide with local banking capabilities",
          image: "/assets/images/accueil/145789.png",
          // image: skills[0]?.img_main || "/assets/images/accueil/145789.png",
          icon: "globe",
          color: "blue"
        },
        {
          title: "FX & Transfers", 
          description: "Exchange currencies and transfer funds globally at competitive rates",
          image: "/assets/images/accueil/6318783.png",
          // image: skills[0]?.img_main || "/assets/imgs/skill/design/skill2.jpg",
          icon: "transfer",
          color: "green"
        },

      ]
    },
    1: { // Spend
      cards: [
        {
          title: "Corporate Cards",
          description: "Issue virtual and physical cards with spending controls and real-time monitoring",
          image: "/assets/images/accueil/237653.png",
          // image: skills[1]?.img_main || "/assets/imgs/skill/design/skill5.jpg",
          icon: "card",
          color: "blue"
        },
        {
          title: "Expense Management",
          description: "Automate expense tracking, approval workflows, and reimbursement processes",
          image: "/assets/images/accueil/092834.png",
          // image: skills[1]?.img_main || "/assets/imgs/skill/design/skill6.jpg",
          icon: "chart",
          color: "green"
        },
        {
          title: "Bill Pay",
          description: "Streamline bill payments with automated scheduling and vendor management",
          image: "/assets/images/accueil/098735.png",
          // image: skills[1]?.img_main || "/assets/imgs/skill/design/skill7.jpg",
          icon: "check",
          color: "purple"
        },
      ]
    },
    2: { // Payments


      cards: [
        {
          title: "Checkout",
          description: "Accept payments online with secure checkout solutions and multiple payment methods",
          image:"/assets/images/accueil/checkout-illustration.png",
          icon: "network",
          color: "blue"
        },
        {
          title: "Payment Plugins",
          description: "Integrate payment processing into your applications with ready-to-use plugins",
          image: "/assets/images/accueil/plugin-puzzle.png",
          icon: "clock",
          color: "green"
        },
        {
          title: "Payment Links",
          description: "Create shareable payment links for quick and easy transactions",
          image: "/assets/images/accueil/payment-link.png",
          icon: "currency",
          color: "purple"
        },
      ]
    },
    3: {
      cards: [
        {
          title: "Connected Accounts",
          description: "Onboard and manage third-party accounts with automated compliance",
          image: "/assets/images/accueil/connected-accounts.png",
          icon: "api",
          color: "blue"
        },
        {
          title: "Accounts",
          description: "Create and manage multi-currency accounts programmatically via APIs",
          image: "/assets/images/accueil/accounts.png",
          icon: "code",
          color: "green"
        },
        {
          title: "Payments",
          description: "Process payments globally with real-time settlement and webhook notifications",
          image: "/assets/images/accueil/payments.png",
          icon: "webhook",
          color: "purple"
        },

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
                    // Afficher les cartes avec images au lieu des descriptions
                    currentCards.map((card, index) => (
                      <div key={index} className="bg-white rounded-xl p-8 transition-all duration-500 ease-in-out shadow-sm hover:shadow-md">
                        {/* Image principale de la carte */}
                        <div className="mb-6 overflow-hidden rounded-lg">
                          <ImageComponent
                            src={card.image}
                            width={400}
                            height={250}
                            alt={card.title.toLowerCase().replace(/\s+/g, '-')}
                            className="w-full h-48 object-cover transition-all duration-500 ease-in-out hover:scale-105"
                          />
                        </div>
                        
                        {/* Titre de la carte */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                        
                        {/* Description de la carte */}
                        <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                        
                        {/* Bouton d'action */}
                        <button className="text-gray-900 hover:text-gray-800 font-medium transition-colors duration-200 flex items-center gap-2 group">
                          <span>Learn more</span>
                          <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
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
