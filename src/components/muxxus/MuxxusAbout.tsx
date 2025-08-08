"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import MuxxusSectionTitle from "./MuxxusSectionTitle";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  stats?: {
    number: string;
    label: string;
    description?: string;
  };
  actionButton?: {
    text: string;
    href: string;
  };
  features?: string[];
};

const MuxxusAbout = ({
  title,
  subtitle,
  description,
  image,
  stats,
  actionButton,
  features,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-white dark:bg-gray-900">
      <div className="container2">
        <div className="py-[60px] xl:py-[140px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="has_fade_anim">
              {subtitle && (
                <div className="mb-6">
                  <span className="text-[16px] leading-none font-bold uppercase inline-block text-gray-900">
                    {subtitle}
                  </span>
                </div>
              )}
              
              <MuxxusSectionTitle
                title={title}
                className="mb-8"
              />
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                {description}
              </p>

              {features && (
                <div className="mb-8">
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="text-gray-900 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {actionButton && (
                <MuxxusButton
                  href={actionButton.href}
                  variant="muxxus"
                  size="lg"
                >
                  {actionButton.text}
                </MuxxusButton>
              )}
            </div>

            <div className="has_fade_anim" data-fade-from="right">
              {image && (
                <div className="relative">
                  <ImageComponent
                    src={image.src}
                    width={500}
                    height={400}
                    alt={image.alt}
                    className="rounded-lg"
                  />
                  
                  {stats && (
                    <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stats.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stats.label}
                      </div>
                      {stats.description && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {stats.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusAbout;
