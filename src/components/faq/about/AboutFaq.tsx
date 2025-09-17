"use client";

import { useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { cn } from "@/lib/utils";

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

const AboutFaq = ({ title, subtitle, description, faqs, className }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={cn("py-24 bg-gray-50", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-0 lg:grid-cols-[1fr_1fr] xl:gap-x-16 items-start">
          <div className="has_fade_anim">
            <div className="mb-8">
              {subtitle && (
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {subtitle}
                </span>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-gray-600 mt-6 max-w-lg">
                  {description}
                </p>
              )}
            </div>
          </div>
          
          <div className="has_fade_anim" data-delay="0.3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue={openItem}
                onValueChange={(value) => setOpenItem(value || "")}
              >
                {faqs?.map((item, index) => (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="first:border-t border-gray-200 border-opacity-30"
                  >
                    <AccordionTrigger
                      className="text-gray-900 text-lg xl:text-xl py-4 text-start font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed py-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
