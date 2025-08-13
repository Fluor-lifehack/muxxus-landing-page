"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import WebFeatureCard from "@/components/features/web/WebFeatureCard";
import ImageComponent from "@/components/tools/ImageComponent";
import MarketingImage from "@/components/image/MarketingImage";
import DesignImage2 from "@/components/image/DesignImage2";
import DesignImage from "@/components/image/DesignImage";
import SeoImage from "@/components/image/SeoImage";
import WebImage from "@/components/image/WebImage";
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
  image?: any; // Ajout de la prop image pour les composants d'images
};

const WebFeature = ({ title, img_icon, description, features, image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-theme" ref={containerRef}>
      <div className="inner-container">
        <div className="pt-[60px] lg:pt-[80px] xl:pt-[140px]">
          <div className=" relative">
            <div
              className="has_fade_anim absolute w-[93px] top-[-60px] start-[43%] z-[99] hidden xl:block"
              data-fade-offset="0"
              data-delay="0.8"
            >
              <ImageComponent 
                src={img_icon} 
                width={93} 
                height={98} 
                className="brightness-0 invert"
              />
            </div>
            <WebSectionTItle
              title={title}
              className="has_text_move_anim max-w-[460px] lg:max-w-[460px] xl:max-w-[730px] lg:mx-auto !text-white [&_span]:!text-white [&_*]:!text-white"
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

          {/* Composants d'images ajoutés */}
          {image && (
            <>
              <MarketingImage {...image} />
              <DesignImage2 {...image} />
              <DesignImage {...image} />
              <SeoImage {...image} />
              <WebImage {...image} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebFeature;
