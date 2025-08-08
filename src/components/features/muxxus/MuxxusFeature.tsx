"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import WebFeatureCard from "@/components/features/web/WebFeatureCard";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

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
          <div className=" relative">
            <div className="has_fade_anim absolute w-[93px] top-[-80px] start-[80%] z-[99] hidden xl:block" data-fade-offset="0" data-delay="0.8">
              <svg className="w-full h-full text-white/60 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <WebSectionTItle
              title={title}
              className="has_text_move_anim max-w-[460px] lg:max-w-[460px] xl:max-w-[730px] lg:mx-auto text-white"
            />
          </div>
          <div className="mt-[12px] xl:mt-[22px]">
            <p className="text has_fade_anim max-w-[460px] lg:ms-[430px] xl:ms-[520px] 2xl:ms-[580px] lg:max-w-[300px] text-white">
              {description}
            </p>
          </div>

          <div className="mt-[53px] xl:mt-[73px] overflow-hidden">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-[-30px] xl:mx-[-80px] 2xl:mx-[-100px]">
              {features.map((feature, index) => (
                <WebFeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusFeature;
