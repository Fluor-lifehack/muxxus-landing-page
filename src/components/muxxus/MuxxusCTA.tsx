"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MuxxusSectionTitle from "./MuxxusSectionTitle";
import CircleFillButton from "@/components/elements/button/CircleFillButton";

type CTAButton = {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  buttons: CTAButton[];
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const MuxxusCTA = ({
  title,
  subtitle,
  description,
  buttons,
  align = 'center',
  className = "",
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`py-24 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <MuxxusSectionTitle 
          title={title}
          subtitle={subtitle}
          description={description}
          align={align}
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          {buttons.map((button, index) => (
            <div key={index} className="has_fade_anim" data-delay={index * 0.1}>
              <CircleFillButton 
                text={button.text} 
                href={button.href}
                className={
                  button.variant === 'secondary' 
                    ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusCTA;
