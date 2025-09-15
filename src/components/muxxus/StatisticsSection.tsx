"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  statistics: {
    value: string;
    label: string;
  }[];
  className?: string;
  bgColor?: string;
};

/**
 * StatisticsSection - Composant de section des statistiques
 * 
 * Structure : Grille de statistiques avec valeur et label
 * 
 * @example
 * <StatisticsSection 
 *   statistics={[
 *     { value: "13+", label: "Supported Countries" },
 *     { value: "50+", label: "Available Currencies" }
 *   ]}
 *   bgColor="bg-primary"
 * />
 */
const StatisticsSection = ({ 
  statistics,
  className = "",
  bgColor = "bg-primary"
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className={`py-20 ${bgColor} text-white ${className}`} ref={containerRef}>
      <div className="container2">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="has_fade_anim"
              data-delay={index * 0.1}
            >
              <div className="text-[48px] md:text-[60px] font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
