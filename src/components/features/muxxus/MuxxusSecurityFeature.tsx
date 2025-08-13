"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import MuxxusFeatureCard from "@/components/features/muxxus/MuxxusFeatureCard";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const MuxxusSecurityFeature = ({ title, subtitle, description, features }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-gray-900" ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[60px] lg:pt-[80px] xl:pt-[140px]">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="has_fade_anim mb-4">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <MuxxusSectionTitle
              title={title}
              className="has_text_move_anim max-w-[460px] lg:max-w-[460px] xl:max-w-[730px] lg:mx-auto text-white"
            />
            <div className="mt-6">
              <p className="text-gray-300 text-lg lg:text-xl max-w-4xl mx-auto has_fade_anim">
                {description}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-[53px] xl:mt-[73px] overflow-hidden">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[-30px] xl:mx-[-80px] 2xl:mx-[-100px]">
              {features.map((feature, index) => (
                <MuxxusFeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusSecurityFeature;
