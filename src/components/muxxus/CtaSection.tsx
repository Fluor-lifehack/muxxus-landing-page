"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Cta1 from "@/components/cta/Cta1";

type Props = {
  ctaData: {
    title: string;
    sub_title: string;
    bg_video?: string;
    action_btn: {
      label: string;
      link: string;
    };
  };
  className?: string;
};

/**
 * CtaSection - Composant de section CTA
 * 
 * Structure : Section CTA avec composant Cta1
 * 
 * @example
 * <CtaSection 
 *   ctaData={{
 *     title: "Ready to start?",
 *     sub_title: "Join thousands of companies",
 *     action_btn: { label: "Get Started", link: "/start" }
 *   }}
 * />
 */
const CtaSection = ({ 
  ctaData,
  className = ""
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  // Debug: Log des données reçues
  console.log('CtaSection ctaData:', ctaData);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className={`${className}`} ref={containerRef}>
      <Cta1 {...ctaData} />
    </section>
  );
};

export default CtaSection;
