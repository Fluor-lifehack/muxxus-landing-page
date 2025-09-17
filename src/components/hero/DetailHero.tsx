"use client";

import ImageComponent from "../tools/ImageComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonFlip from "../elements/button/ButtonFlip";

// Interface personnalisée pour DetailHero
interface DetailHeroProps {
  title: string;
  shape: {
    light: string;
    dark: string;
  };
  client_img: {
    light: string;
    dark: string;
  };
  customers: string;
  info: {
    thumb: {
      light: string;
      dark: string;
    };
    description: string;
    action_btn: {
      label: string;
      link: string;
    };
  };
  image: string;
  feature_text: string;
}

const DetailHero = ({
  title,
  info,
  image,
}: DetailHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  
  return (
    <section className="container large" ref={containerRef}>
      <div className="grid gap-5 md:grid-cols-[310px,1fr] 2xl:grid-cols-[400px_1fr]">
        {/* Info Card simplifié */}
        <div className="bg-background rounded-[20px] p-8 border border-border">
          <div className="mb-6">
            <ImageComponent
              src={info.thumb.light}
              darkSrc={info.thumb.dark}
              width={80}
              height={80}
              alt="info thumb"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg leading-relaxed mb-6 text-text">
            {info.description}
          </p>
          <ButtonFlip
            btnText={info.action_btn.label}
            link={info.action_btn.link}
            className="bg-primary text-white border-primary hover:bg-primary/90"
          />
        </div>
        
        {/* Image principale avec titre superposé */}
        <div className="bg-primary rounded-[20px] overflow-hidden relative z-[1] pt-[30px] pb-[150px] px-[30px]">
          <div className="absolute w-full h-full top-0 start-0 z-[-1] overflow-hidden">
            <ImageComponent
              src={image}
              width={1400}
              height={500}
              alt="image"
              dataSpeed={0.9}
              className="w-full h-full object-cover"
            />
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Titre superposé sur l'image */}
          <div className="relative z-10 text-center h-full flex flex-col justify-center">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-bold leading-[1.1] mb-6 text-white">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {info.description}
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default DetailHero;
