"use client";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { ActionBtnType, TServiceType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  description: string;
  sub_title: string;
  action_btn: ActionBtnType;
  services: TServiceType[];
};

const DesignService = ({
  title,
  description,
  sub_title,
  action_btn,
  services,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 bg-gray-50">
      <div className="inner-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              {sub_title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              // Définir les couleurs pour chaque service (Business Accounts)
              const colorSchemes = [
                {
                  bg: "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
                  border: "border-[#667eea]",
                  hoverBorder: "hover:border-[#5a6fd8]",
                  text: "text-white",
                  hoverText: "group-hover:text-[#f0f4ff]",
                  arrow: "text-white",
                  shadow: "shadow-lg hover:shadow-xl"
                },
                {
                  bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
                  border: "border-[#f093fb]",
                  hoverBorder: "hover:border-[#e885f7]",
                  text: "text-white",
                  hoverText: "group-hover:text-[#fef7ff]",
                  arrow: "text-white",
                  shadow: "shadow-lg hover:shadow-xl"
                },
                {
                  bg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
                  border: "border-[#4facfe]",
                  hoverBorder: "hover:border-[#3a9bf4]",
                  text: "text-white",
                  hoverText: "group-hover:text-[#f0fdff]",
                  arrow: "text-white",
                  shadow: "shadow-lg hover:shadow-xl"
                },
                {
                  bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
                  border: "border-[#43e97b]",
                  hoverBorder: "hover:border-[#3dd870]",
                  text: "text-white",
                  hoverText: "group-hover:text-[#f0fff4]",
                  arrow: "text-white",
                  shadow: "shadow-lg hover:shadow-xl"
                }
              ];

              const colors = colorSchemes[index % colorSchemes.length];

              return (
                <Link
                  href={`/service/design/${service.slug}`}
                  key={service.data.id}
                  className={`group ${colors.bg} rounded-2xl p-8 ${colors.shadow} transition-all duration-300 border ${colors.border} ${colors.hoverBorder} transform hover:scale-105`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${colors.text} mb-4 ${colors.hoverText} transition-colors`}>
                        {service.data.title}
                      </h3>
                      {service.data.description && (
                        <p className="text-white/90 text-sm leading-relaxed">
                          {service.data.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className={`${colors.text} font-medium text-sm`}>
                        Learn more
                      </span>
                      <FaArrowRightLong className={`${colors.arrow} group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <CircleFillButton
              text={action_btn.label}
              href={action_btn.link}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignService;
