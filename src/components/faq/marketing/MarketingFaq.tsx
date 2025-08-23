"use client";

import { useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import MarketingSectionTitle from "@/components/sectionTitle/MarketingSectionTitle";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import gsap from "gsap";
import { ScrollSmoother } from "@/lib/plugins";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};

const MarketingFaq = ({ title, subtitle, description, faqs, className }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <MarketingSectionTitle 
            title={title}
            className="has_fade_anim"
          />
          {subtitle && (
            <div className="mt-4">
              <span className="text-[16px] leading-none font-bold uppercase inline-block text-blue-600">
                {subtitle}
              </span>
            </div>
          )}
          {description && (
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full has_fade_anim"
            defaultValue={openItem}
            onValueChange={(value) => {
              setOpenItem(value || "");
              const smoother = ScrollSmoother.get();
              if (smoother) {
                smoother.refresh();
              } else {
                ScrollTrigger.refresh();
              }
            }}
            data-delay="0.45"
          >
            {faqs?.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="first:border-t border-gray-200 bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger
                  className="text-[20px] xl:text-[24px] pt-6 pb-[18px] px-6 font-semibold text-start text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  customIcon={true}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[18px] leading-[1.44] px-6 pb-6 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MarketingFaq;
