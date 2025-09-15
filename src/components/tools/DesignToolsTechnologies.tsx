"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import { FaFigma, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiSketch, SiAdobephotoshop } from "react-icons/si";

type Props = {
  title: string;
  description: string;
  design_tools: {
    name: string;
    icon: string;
    description: string;
    category: "design" | "development" | "collaboration";
  }[];
  technologies: {
    name: string;
    icon: string;
    description: string;
    proficiency: number; // 0-100
  }[];
};

const DesignToolsTechnologies = ({ title, description, design_tools, technologies }: Props) => {
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
      case "figma": return <FaFigma className="w-8 h-8" />;
      case "adobe": return <SiAdobephotoshop className="w-8 h-8" />;
      case "sketch": return <SiSketch className="w-8 h-8" />;
      case "framer": return <SiFramer className="w-8 h-8" />;
      case "react": return <FaReact className="w-8 h-8" />;
      case "next": return <SiNextdotjs className="w-8 h-8" />;
      case "typescript": return <SiTypescript className="w-8 h-8" />;
      case "tailwind": return <SiTailwindcss className="w-8 h-8" />;
      case "node": return <FaNodeJs className="w-8 h-8" />;
      case "github": return <FaGithub className="w-8 h-8" />;
      default: return <FaFigma className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "design": return "bg-purple-500";
      case "development": return "bg-blue-500";
      case "collaboration": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "design": return "Design";
      case "development": return "Développement";
      case "collaboration": return "Collaboration";
      default: return "Autre";
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="has_text_move_anim text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="has_fade_anim text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Outils de Design */}
        <div className="mb-20">
          <h3 className="has_fade_anim text-2xl font-bold text-gray-900 mb-8 text-center">
            Outils de Design Créatif
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {design_tools.map((tool, index) => (
              <div
                key={index}
                className="has_fade_anim group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-delay={`${index * 0.1}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4 ${getCategoryColor(tool.category)}`}>
                    {getIcon(tool.icon)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{tool.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tool.category === "design" ? "bg-purple-100 text-purple-800" :
                      tool.category === "development" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {getCategoryLabel(tool.category)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="has_fade_anim text-2xl font-bold text-gray-900 mb-8 text-center">
            Technologies & Frameworks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="has_fade_anim group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-delay={`${index * 0.1}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-4">
                    {getIcon(tech.icon)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{tech.name}</h4>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Barre de compétence */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Maîtrise</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="has_fade_anim inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>Découvrir Nos Compétences</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignToolsTechnologies;
