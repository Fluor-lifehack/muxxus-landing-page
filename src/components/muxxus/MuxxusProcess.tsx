"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MuxxusSectionTitle from "./MuxxusSectionTitle";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  steps: ProcessStep[];
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const MuxxusProcess = ({
  title,
  subtitle,
  description,
  steps,
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
    <section ref={containerRef} className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <MuxxusSectionTitle 
          title={title}
          subtitle={subtitle}
          description={description}
          align={align}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="has_fade_anim text-center group" data-delay={index * 0.1}>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusProcess;
