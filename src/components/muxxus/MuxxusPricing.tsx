"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import MuxxusSectionTitle from "./MuxxusSectionTitle";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import { FaCheck } from "react-icons/fa";

type PricingPlan = {
  name: string;
  price: string;
  features: string[];
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  plans: PricingPlan[];
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const MuxxusPricing = ({
  title,
  subtitle,
  description,
  plans,
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
          {plans.map((plan, index) => (
            <div key={index} className="has_fade_anim bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-delay={index * 0.1}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FaCheck className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <CircleFillButton 
                  text="Get Started" 
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusPricing;
