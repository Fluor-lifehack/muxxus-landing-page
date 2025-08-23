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

const SimpleBusinessFaq = ({ title, subtitle, description, faqs, className }: Props) => {
  const [openItem, setOpenItem] = useState<string>("item-1");
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={cn("py-24 bg-white", className)}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          {subtitle && (
            <div className="mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                {subtitle}
              </span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="space-y-6">
          {faqs?.map((item, index) => (
            <div 
              key={index} 
              className="has_fade_anim bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300"
              data-delay={index * 0.1}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger
                    className="px-6 py-5 text-left hover:bg-gray-100 transition-colors duration-200"
                    customIcon={true}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            Still have questions?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contact our support team
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleBusinessFaq;
