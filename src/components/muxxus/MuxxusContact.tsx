"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  shape?: string;
  background?: 'light' | 'dark' | 'blue';
};

const MuxxusContact = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  shape,
  background = 'light',
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  const backgroundClasses = {
    light: 'bg-white dark:bg-gray-900',
    dark: 'bg-gray-900',
    blue: 'bg-gray-900',
  };

  const textClasses = {
    light: 'text-gray-900 dark:text-white',
    dark: 'text-white',
    blue: 'text-white',
  };

  return (
    <section ref={containerRef} className={`${backgroundClasses[background]} relative z-[1] overflow-hidden`}>
      <div className="container2">
        <div className="py-[60px] xl:py-[140px] px-[30px] relative">
          {shape && (
            <div className="shape-1 absolute hidden -right-[6%] md:block w-[270px] top-[-35%] lg:w-[340px] lg:top-[-45%] xl:w-[440px] xl:top-[-15%] z-[-1]">
              <Image
                src={shape}
                width={439}
                height={660}
                alt="shape-1"
                className="opacity-20"
              />
            </div>
          )}
          
          <div className="text-center">
            <MuxxusSectionTitle
              title={title}
              subtitle={subtitle}
              description={description}
              align="center"
              className={`${textClasses[background]} max-w-[730px] mx-auto`}
            />
            
            <div className="has_fade_anim text-center mt-8">
              <MuxxusButton
                href={buttonHref}
                variant={background === 'blue' ? 'primary' : 'muxxus'}
                size="lg"
                className="text-sm uppercase"
              >
                {buttonText}
              </MuxxusButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusContact;
