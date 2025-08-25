"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { FaLightbulb, FaSearch, FaPencilAlt, FaCode, FaEye, FaRocket } from "react-icons/fa";
import ButtonFlip from "@/components/elements/button/ButtonFlip";

type Props = {
  title: string;
  description: string;
  process_steps: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
};

const DesignProcess = ({ title, description, process_steps }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lightbulb": return <FaLightbulb className="w-8 h-8" />;
      case "search": return <FaSearch className="w-8 h-8" />;
      case "pencil": return <FaPencilAlt className="w-8 h-8" />;
      case "code": return <FaCode className="w-8 h-8" />;
      case "eye": return <FaEye className="w-8 h-8" />;
      case "rocket": return <FaRocket className="w-8 h-8" />;
      default: return <FaLightbulb className="w-8 h-8" />;
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="has_text_move_anim text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="has_fade_anim text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process_steps.map((step, index) => (
            <div
              key={index}
              className="has_fade_anim group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              data-delay={`${index * 0.1}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(step.icon)}
              </div>
              
              <h3 
                className="text-xl font-bold text-gray-900 mb-4"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              <div className="mt-6 text-sm text-gray-400 font-medium">
                Étape {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonFlip
            btnText="Discover Our Approach"
            link="#"
            className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
