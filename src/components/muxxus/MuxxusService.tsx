"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import MuxxusSectionTitle from "@/components/muxxus/MuxxusSectionTitle";
import MuxxusButton from "@/components/elements/button/MuxxusButton";
import Link from "next/link";

type ServiceType = {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: {
    light: string;
    dark: string;
  };
  slug: string;
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  services: ServiceType[];
  showViewAll?: boolean;
  viewAllText?: string;
  viewAllHref?: string;
};

const MuxxusService = ({
  title,
  subtitle,
  description,
  services,
  showViewAll = false,
  viewAllText = "View All Services",
  viewAllHref = "/services",
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <section ref={containerRef} className="bg-white dark:bg-gray-900">
      <div className="container2">
        <div className="py-[60px] xl:py-[140px]">
          <div className="text-center mb-16">
            <MuxxusSectionTitle
              title={title}
              subtitle={subtitle}
              description={description}
              align="center"
            />
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="has_fade_anim first:border-t border-b border-gray-200 dark:border-gray-700">
                <Link href={`/service/${service.slug}`}>
                  <div className="py-8 grid gap-y-5 gap-x-[60px] grid-cols-[auto] sm:grid-cols-[100px,1fr,100px] xl:grid-cols-[160px,1fr,100px] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                    <span className="text-[22px] xl:text-[30px] font-semibold font-teko text-gray-900">
                      {formatSerialNumber(service.id)}.
                    </span>
                    
                    <div className="grid gap-y-5 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[210px,1fr] xl:grid-cols-[300px,1fr] 2xl:grid-cols-[360px,1fr]">
                      <h3 className="text-[26px] xl:text-[36px] leading-[.88] uppercase text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      
                      <div>
                        <p className="max-w-[340px] text-gray-600 dark:text-gray-300 mb-4">
                          {service.description}
                        </p>
                        
                        {service.features && service.features.length > 0 && (
                          <div className="mt-[18px]">
                            <ul className="space-y-2">
                              {service.features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="text-[18px] leading-[1.41] text-gray-900">
                                  + {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {service.icon && (
                      <div className="w-[88px] h-[115px] border border-gray-900 rounded-[44px] inline-flex justify-center items-center bg-gray-50 dark:bg-gray-800">
                        <ImageComponent
                          src={service.icon.light || service.icon.dark || "/assets/imgs/icon/icon-s-24.png"}
                          darkSrc={service.icon.dark || service.icon.light || "/assets/imgs/icon/icon-s-24.png"}
                          width={45}
                          height={45}
                          className="filter brightness-0 invert"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-12">
              <MuxxusButton
                href={viewAllHref}
                variant="muxxusOutline"
                size="lg"
              >
                {viewAllText}
              </MuxxusButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MuxxusService;
