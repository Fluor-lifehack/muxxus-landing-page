"use client";

import { useRef } from "react";
import MuxxusProductFeatureCard from "./MuxxusProductFeatureCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const MuxxusProductFeature = ({ title, subtitle, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  
  return (
    <section
      className="pt-[90px] pb-[83px] 2xl:pt-[120px] 2xl:pb-[113px] bg-[#111827]"
      ref={containerRef}
    >
      <div className="inner-container">
        <div>
          {/* Header Section */}
          {(title || subtitle || description) && (
            <div className="text-center mb-16">
              {subtitle && (
                <span className="text-white text-[16px] font-semibold uppercase tracking-wider mb-4 block">
                  {subtitle}
                </span>
              )}
              {title && (
                <h2 className="text-white text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-light leading-[1.1] mb-6">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}
          
          {/* Features Grid */}
          <div>
            <div className="grid gap-[60px] grid-cols-1 md:grid-cols-[repeat(2,310px)] lg:grid-cols-[repeat(3,240px] xl:grid-cols-[repeat(3,300px)] justify-between">
              {features.map((feature, index) => (
                <div
                  className="has_fade_anim"
                  data-fade-from="left"
                  data-delay={0.15 * (index + 1)}
                  key={`feature-${index}`}
                >
                  <MuxxusProductFeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusProductFeature;
