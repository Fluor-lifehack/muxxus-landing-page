"use client";

import { convertWithBr } from "@/lib/helper/converter";
import Link from "next/link";
import ImageComponent from "@/components/tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import MuxxusFeatureCard2 from "./MuxxusFeatureCard2";

type FeatureSection = {
  title: string;
  image: string;
  sub_title: string;
  sub_icon: string;
  action_btn: {
    enable: boolean;
    label: string;
    link: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  imagePosition?: "left" | "right"; // Nouvelle prop pour contrôler la position
};

const MuxxusFeature2 = ({
  title,
  image,
  sub_title,
  sub_icon,
  action_btn,
  features,
  imagePosition = "left", // Par défaut à gauche
}: FeatureSection) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  // Composant pour l'image avec overlay
  const ImageSection = () => (
    <div className="relative rounded-[20px] overflow-hidden max-w-[660px]">
      <div>
        <ImageComponent
          src={image}
          width={660}
          height={567}
          alt="feature image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pos-center text-center flex flex-col items-center">
        <ImageComponent
          src={sub_icon}
          width={90}
          height={98}
          alt="shape icon"
          className="w-[60px] md:w-[90px] h-auto"
        />
        <p
          className="text-[18px] md:text-[24px] leading-[1.08] mt-[11px] text-text-fixed-2 font-instrument font-medium"
          dangerouslySetInnerHTML={convertWithBr(sub_title)}
        />
      </div>
      <div className="rounded-t-[20px] bg-background-5 absolute py-[15px] px-[25px] md:pt-[25px] md:pb-[19px] md:px-[35px] start-[40px] md:start-[110px] bottom-0 before:content-[''] before:absolute before:w-10 before:h-10 before:bg-transparent before:rounded-full before:bottom-0 before:right-full before:[box-shadow:20px_20px_0_#F0F2F4] dark:before:[box-shadow:20px_20px_0_#252525] after:content-[''] after:absolute after:w-10 after:h-10 after:bg-transparent after:rounded-full after:bottom-0 after:left-full after:[box-shadow:-20px_20px_0_#F0F2F4] dark:after:[box-shadow:-20px_20px_0_#252525]">
        <div className="wc-btn-underline btn-text-flip text-[18px] font-instrument font-medium pb-2 before:!h-[1px]">
          <span data-text={action_btn.label}>{action_btn.label}</span>
        </div>
      </div>
    </div>
  );

  // Composant pour les fonctionnalités
  const FeaturesSection = () => (
    <div>
      {features.map((feature, index) => (
        <MuxxusFeatureCard2 {...feature} key={`muxxus-feature-${index}`} />
      ))}
    </div>
  );

  return (
    <div className="container large" ref={containerRef}>
      <section className="bg-background-5 rounded-[20px] px-4 md:px-[45px]">
        <div className="inner-container">
          <div className="main-section-spacing 2xl:!py-[130px]">
            <MuxxusSectionTitle title={title} className="max-w-[820px]" />
            
            <div className={cn(
              "grid gap-y-10 gap-x-[60px] mt-[33px] xl:mt-[43px] 2xl:mt-[63px] items-start",
              // Grille responsive avec position d'image configurable
              imagePosition === "left" 
                ? "grid-cols-[auto] xl:grid-cols-[auto_450px] 2xl:grid-cols-[auto_550px]"
                : "grid-cols-[auto] xl:grid-cols-[450px_auto] 2xl:grid-cols-[550px_auto]"
            )}>
              
              {/* Affichage conditionnel selon la position de l'image */}
              {imagePosition === "left" ? (
                <>
                  <ImageSection />
                  <FeaturesSection />
                </>
              ) : (
                <>
                  <FeaturesSection />
                  <ImageSection />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuxxusFeature2;
