// MuxxusFeatureCard.tsx (Modèle 3 : Sliding Border)
"use client";

import { cn } from "@/lib/utils";
import ImageComponent from "@/components/tools/ImageComponent";
import { convertWithBr } from "@/lib/helper/converter";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const MuxxusFeatureCard = ({ title, description, icon }: Props) => {
  return (
      <div
        className={cn(
          "group relative rounded-xl p-8 overflow-hidden h-48 transition-all duration-300",
          "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
          "hover:border-blue-400 dark:hover:border-blue-600" // Change la bordure extérieure
        )}
      >
      {/* 1. L'élément de Bordure Glissante (Anime au survol) */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1 bg-blue-500 transform scale-y-0 origin-top transition-transform duration-500 ease-out",
          "group-hover:scale-y-100" // Glisse du haut vers le bas au survol
        )}
      />

       {/* 2. Contenu */}
       <div className="flex flex-col h-full justify-between">
         {/* Titre et icône côte à côte */}
         <div className="flex items-center gap-3 mb-4">
           <ImageComponent 
             src={icon} 
             height={32} 
             width={32} 
             className="w-8 h-8 object-contain dark:invert flex-shrink-0"
           />
           <h3
             className="text-xl font-bold text-gray-900 dark:text-white"
             dangerouslySetInnerHTML={convertWithBr(title)}
           />
         </div>
         
         <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
           {description}
         </p>
       </div>
    </div>
  );
};

export default MuxxusFeatureCard;