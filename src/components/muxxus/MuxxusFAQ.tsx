"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MuxxusSectionTitle from "./MuxxusSectionTitle";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const MuxxusFAQ = ({
  title,
  subtitle,
  description,
  faqs,
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
      <div className="max-w-4xl mx-auto px-6">
        <MuxxusSectionTitle 
          title={title}
          subtitle={subtitle}
          description={description}
          align={align}
        />
        <div className="space-y-6 mt-16">
          {faqs.map((faq, index) => (
            <div key={index} className="has_fade_anim bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300" data-delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusFAQ;
