"use client";

import { useRef } from "react";
import ServiceInnerCard from "./ServiceInnerCard";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import Image from "next/image";
import { TServiceType } from "@/types";

type Props = {
  title: string;
  description: string;
  services: TServiceType[];
};

const ServiceInnerArea = ({ title, description, services }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="main-section-spacing">
      <div className="container2" ref={containerRef}>
        <div className="pb-[57px] grid items-center lg:grid-cols-[1fr_420px]">
          <h2
            className="font-normal inner-section-title has_text_mov_anim"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text has_fade_anim">{description}</p>
        </div>
        <div className="overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[50px] mx-[-30px] xl:mx-[-70px]">
            {services.map((item, index) => (
              <div
                key={item.data?.id}
                className="has_fade_anim"
                data-delay={(index + 1) * 0.15}
              >
                <ServiceInnerCard service={item} />
              </div>
            ))}
            {/* Image LBS alignée avec les colonnes */}
            <div className="has_fade_anim" data-delay={0.6}>
              <div className="px-[30px] xl:px-[70px] flex items-center justify-center">
                <Image
                  src="/assets/imgs/muxxus/lbs-business-accounts.png"
                  alt="LBS Business Accounts Services"
                  className="w-[200px] h-[300px] object-cover rounded-2xl shadow-2xl"
                  width={200}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInnerArea;
