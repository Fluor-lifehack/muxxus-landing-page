"use client";
import CircleFillButton from "@/components/elements/button/CircleFillButton";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import ButtonFlip from "@/components/elements/button/ButtonFlip";
import TopLineButton from "@/components/elements/button/TopLineButton";
import { Button } from "@/components/ui/button";
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import { ActionBtnType, TServiceType } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import PricingCard from "@/components/pricing/PricingCard";

type Props = {
  title: string;
  description: string;
  sub_title: string;
  action_btn: ActionBtnType;
  services: TServiceType[];
};

// Fonction pour convertir les services en format pricing card
const convertServicesToPricingCard = (services: TServiceType[]) => {
  return services.map((service, index) => ({
    tag: service.data.title,
    price: `$${(index + 1) * 50 + 50}`, // Prix dynamique basé sur l'index
    feature_list: [
      { text: "Design personnalisé" },
      { text: "Révisions illimitées" },
      { text: "Support 24/7" },
      { text: service.data.description ? service.data.description.substring(0, 50) + "..." : "Service premium" },
    ],
    btn_title: "Commander",
    service: service, // Garder la référence au service original
  }));
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
    <section ref={containerRef} className="py-20 relative bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/assets/imgs/muxxus/background/img.png')" }}
      />
      <div className="relative z-10 inner-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 block">
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

              const colorSchemes = [
                {
                  bg: "bg-white",
                  border: "border-gray-300",
                  hoverBorder: "hover:border-gray-400",
                  text: "text-black",
                  hoverText: "group-hover:text-primary",
                  arrow: "text-gray-600",
                  shadow: "shadow-sm hover:shadow-md"
                },
                {
                  bg: "bg-white",
                  border: "border-gray-300",
                  hoverBorder: "hover:border-gray-400",
                  text: "text-black",
                  hoverText: "group-hover:text-primary",
                  arrow: "text-gray-600",
                  shadow: "shadow-sm hover:shadow-md"
                },
                {
                  bg: "bg-white",
                  border: "border-gray-200",
                  hoverBorder: "hover:border-gray-300",
                  text: "text-black",
                  hoverText: "group-hover:text-primary",
                  arrow: "text-gray-600",
                  shadow: "shadow-sm hover:shadow-md"
                },
                {
                  bg: "bg-white",
                  border: "border-gray-200",
                  hoverBorder: "hover:border-gray-300",
                  text: "text-black",
                  hoverText: "group-hover:text-primary",
                  arrow: "text-gray-600",
                  shadow: "shadow-sm hover:shadow-md"
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
                        <p className="text-gray-600 text-sm leading-relaxed">
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
            <ButtonFlip
              btnText={action_btn.label.replace(/<br\s*\/?>/gi, ' ').trim()}
              link={action_btn.link}
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      {/* <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nos Tarifs</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de design adaptées à tous les budgets
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {convertServicesToPricingCard(services).map((card, index) => (
            <PricingCard key={index} card={card} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default DesignService;
