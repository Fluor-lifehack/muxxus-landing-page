"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  className?: string;
};

/**
 * KeyBenefitsSection - Composant de section des avantages clés
 * 
 * Structure : Titre + Description + Grille de cartes d'avantages
 * 
 * @example
 * <KeyBenefitsSection 
 *   title="Key Benefits"
 *   description="Description of the benefits"
 *   benefits={[
 *     { icon: "💰", title: "Benefit 1", description: "Description of benefit 1" },
 *     { icon: "🌍", title: "Benefit 2", description: "Description of benefit 2" }
 *   ]}
 * />
 */
const KeyBenefitsSection = ({ 
  title, 
  description, 
  benefits,
  className = ""
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
    <section className={`py-20 bg-background ${className}`} ref={containerRef}>
      <div className="container2">
        <div className="text-center mb-16">
          <h2 className="has_text_mov_anim text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-6">
            {title}
          </h2>
          <p className="has_fade_anim text-xl text-text-3 max-w-4xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="has_fade_anim text-center p-8 bg-white rounded-[20px] border border-border hover:shadow-lg transition-shadow group"
              data-delay={index * 0.1}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl text-primary group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-text-3 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
