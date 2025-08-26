"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import MuxxusScrollImage from './MuxxusScrollImage';

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  alt: string;
  color: string;
  icon: string;
}

interface MuxxusScrollImageDemoProps {
  className?: string;
}

const MuxxusScrollImageDemo: React.FC<MuxxusScrollImageDemoProps> = ({
  className = ''
}) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections: SectionData[] = [
    {
      id: "section-1",
      title: "Make it easier for customers to pay",
      subtitle: "Localise and tailor your checkout experience to individual customers",
      features: [
        "Automatically show available local payment methods",
        "Display checkout page in the customer's local language",
        "Present prices in local currencies or convert currency based on location",
        "Leverage responsive design and browser-based autofill",
        "Pay in one click with saved payment details"
      ],
      image: "/assets/imgs/muxxus/image/img1.jpg",
      alt: "Checkout optimization features",
      color: "from-blue-500 to-cyan-500",
      icon: "💳"
    },
    {
      id: "section-2", 
      title: "Strengthen trust with customers during the checkout flow",
      subtitle: "Enhance customer confidence by displaying your brand and verifying card details",
      features: [
        "Brand your checkout with your colours to maintain look and feel",
        "Identify card brand and validate card number for instant feedback",
        "PCI DSS, SOC1, and SOC2 compliant"
      ],
      image: "/assets/imgs/muxxus/image/img1.jpg",
      alt: "Checkout optimization features",
      color: "from-purple-500 to-pink-500",
      icon: "🛡️"
    },
    {
      id: "section-3",
      title: "Reduce failed payments", 
      subtitle: "Improve acceptance rates with Airwallex's out-of-the-box payment success optimisations",
      features: [
        "Benefit from machine learning optimisation - ISO alterations, smart MCCs, and automatic retries",
        "Leverage Airwallex's smart 3DS engine to determine when 3DS should be used",
        "Display descriptive error messages to encourage customers to retry payments"
      ],
      image: "/assets/imgs/muxxus/image/img1.jpg",
      alt: "Checkout optimization features",
      color: "from-green-500 to-emerald-500",
      icon: "📈"
    }
  ];

  // Intersection Observer pour détecter la section active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Gestion du scroll progress et visibilité
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calcul de la progression
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ));
      
      setScrollProgress(progress);
      setIsVisible(progress > 0.1);

    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  }, []);

  return (
    <>
      <section 
        ref={containerRef}
        className={`relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden ${className}`}
        aria-label="Checkout Optimization Features"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-pink-200/20 rounded-full blur-3xl transform -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header avec animation d'entrée */}
          <div 
            className={`text-center mb-16 ${
              isVisible ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
              Checkout Optimization
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Maximisez vos conversions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment notre solution de checkout optimise les conversions et améliore l&apos;expérience utilisateur
            </p>
          </div>


          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contenu textuel avec animations staggerées */}
            <div className="space-y-32">
              {sections.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={`space-y-8 min-h-[400px] ${
                    isVisible ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  {/* Header de section simplifié */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Étape {index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-2">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Features avec icônes */}
                  <div>
                    <ul className="space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className={`group flex items-start space-x-4 ${
                            activeSection >= index 
                              ? 'opacity-100' 
                              : 'opacity-60'
                          }`}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              ))}
            </div>
            
            {/* Image complètement statique et fixe - AUCUNE ANIMATION */}
            <div className="flex justify-center items-start">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white p-2 transform-none">
                {/* Image qui ne bouge JAMAIS */}
                <div className="w-full h-[500px] rounded-xl overflow-hidden transform-none">
                  <Image
                    src={sections[0]?.image}
                    alt={sections[0]?.alt}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-xl transform-none"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default MuxxusScrollImageDemo;