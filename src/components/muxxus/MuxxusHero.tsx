"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import { FaPlay } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/tools/VideoModal";
import { useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  videoUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
  stats?: {
    number: string;
    label: string;
  };
};

const MuxxusHero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  videoUrl,
  image,
  stats,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-white dark:bg-gray-900">
      <div className="container2">
        <div className="relative pt-[50px] 2xl:pt-[100px] pb-[55px] lg:pb-[85px] xl:pb-[115px]">
          <div className="grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_370px] 2xl:grid-cols-[1fr_520px] gap-y-[50px] gap-x-[60px]">
            <div className="md:mt-[50px]">
              {subtitle && (
                <div className="mb-[15px] sm:mb-[-26px] lg:mb-[-32px] 2xl:mb-[-40px]">
                  <span className="has_fade_anim text-[16px] leading-none font-bold uppercase inline-block text-gray-900">
                    {subtitle}
                  </span>
                </div>
              )}
              
              <h1 className="has_fade_anim uppercase text-[80px] xl:text-[110px] 2xl:text-[190px] leading-[0.76] text-gray-900 dark:text-white">
                {title}
              </h1>

              <div className="relative ms-[110px] 2xl:ms-[315px] mt-[35px] 2xl:mt-[65px]">
                <p className="text-lg 2xl:text-[20px] leading-[1.37] max-w-[380px] has_fade_anim text-gray-600 dark:text-gray-300">
                  {description}
                </p>

                <div className="mt-[48px] has_fade_anim flex flex-col sm:flex-row gap-4">
                  {primaryButton && (
                    <MuxxusButton
                      href={primaryButton.href}
                      variant="muxxus"
                      size="lg"
                      className="text-sm uppercase"
                    >
                      {primaryButton.text}
                    </MuxxusButton>
                  )}
                  
                  {secondaryButton && (
                    <MuxxusButton
                      href={secondaryButton.href}
                      variant="muxxusOutline"
                      size="lg"
                      className="text-sm uppercase"
                    >
                      {secondaryButton.text}
                    </MuxxusButton>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="has_fade_anim relative" data-fade-from="right">
                {videoUrl && (
                  <div className="absolute end-0 top-[66%] z-[1]">
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => setIsOpen(!isOpen)}
                        className="wc-btn-circle !w-[100px] !h-[100px] !border-[5px] !border-background !bg-gray-900 !text-white hover:bg-gray-800"
                      >
                        <FaPlay />
                      </Button>
                      <span className="text-sm font-medium uppercase leading-[1.14] inline-block text-gray-900 dark:text-white">
                        Watch <br />
                        Video
                      </span>
                    </div>
                  </div>
                )}

                {image && (
                  <div className="flex items-start">
                    <div className="mt-[160px] relative">
                      <ImageComponent
                        src={image.src}
                        width={400}
                        height={500}
                        alt={image.alt}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {stats && (
                  <div className="mt-[41px] flex justify-end">
                    <div className="inline-block ms-auto text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {stats.number}
                      </div>
                      <p className="text-lg leading-tight text-gray-600 dark:text-gray-300">
                        {stats.label}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {videoUrl && (
        <VideoModal
          link={videoUrl}
          isOpen={isOpen}
          close={closeDialog}
        />
      )}
    </section>
  );
};

export default MuxxusHero;
