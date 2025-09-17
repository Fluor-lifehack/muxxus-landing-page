"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import MuxxusFeature from "./MuxxusFeature";
import EnhancedMuxxusFeature from "./EnhancedMuxxusFeature";
import { cn } from "@/lib/utils";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  description: string;
  img_icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  variant?: "standard" | "enhanced";
  className?: string;
};

const FeatureShowcase = ({ 
  title, 
  description, 
  img_icon, 
  features, 
  variant = "standard",
  className 
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    hasFadeAnim();
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={cn("relative", className)}
    >
      {/* Sélecteur de variante (pour la démonstration) */}
      <div className="has_fade_anim mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
          <span className="text-gray-600 dark:text-gray-300">Variante:</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {variant === "enhanced" ? "Premium" : "Standard"}
          </span>
        </div>
      </div>

      {/* Composant de fonctionnalités selon la variante */}
      {variant === "enhanced" ? (
        <EnhancedMuxxusFeature 
          title={title}
          description={description}
          img_icon={img_icon}
          features={features}
        />
      ) : (
        <MuxxusFeature 
          title={title}
          description={description}
          features={features}
        />
      )}

      {/* Informations sur les variantes */}
      <div className="mt-16 has_fade_anim" data-delay="0.5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Choisissez votre expérience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Variante Standard */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Variante Standard
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Design épuré et professionnel avec animations subtiles. Parfait pour les sites d&apos;entreprise.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Animations GSAP de base</li>
                <li>• Design responsive</li>
                <li>• Support thème clair/sombre</li>
                <li>• Performance optimisée</li>
              </ul>
            </div>

            {/* Variante Enhanced */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Variante Premium
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expérience immersive avec particules, animations 3D et effets visuels avancés.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Particules flottantes</li>
                <li>• Animations 3D</li>
                <li>• Effets de parallaxe</li>
                <li>• Expérience premium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
