import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";
import MuxxusFeatureCard from "@/components/features/muxxus/MuxxusFeatureCard";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const MuxxusFeature = ({ title, description, features }: Props) => {

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="inner-container relative z-10">
        <div className="section-spacing-top pb-[60px] xl:pb-[100px]">
          {/* Header de la section avec nouveau design */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Fonctionnalités Muxxus
            </div>

            {/* Titre principal avec effet de gradient */}
            <div className="mb-8">
              <DesignSectionTitle 
                title={title}
                className="max-w-[460px] lg:max-w-[600px] xl:max-w-[730px] mx-auto bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent"
              />
            </div>

            {/* Description avec nouveau style */}
            <div className="max-w-[460px] lg:max-w-[600px] xl:max-w-[700px] mx-auto">
              <p className={cn(
                "text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300",
                "leading-relaxed font-light relative"
              )}>
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-60"></span>
                {description}
              </p>
            </div>
          </div>

          {/* Grille des fonctionnalités avec nouveau layout */}
          <div className="relative">
            {/* Ligne de connexion décorative */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent transform -translate-y-1/2"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  {/* Carte avec effet hover amélioré */}
                  <div className="relative transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                    <MuxxusFeatureCard 
                      {...feature} 
                    />
                    
                    {/* Effet de lueur au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MuxxusFeature;
