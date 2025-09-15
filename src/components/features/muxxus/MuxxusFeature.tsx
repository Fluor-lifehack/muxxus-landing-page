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
    <section className="relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="inner-container relative z-10">
        <div className="section-spacing-top pb-[60px] xl:pb-[100px]">
          {/* Header de la section */}
          <div className="text-center mb-16">
            {/* Titre principal */}
            <div className="mb-6">
              <DesignSectionTitle 
                title={title}
                className="max-w-[460px] lg:max-w-[600px] xl:max-w-[730px] mx-auto text-gray-900 dark:text-white"
              />
            </div>

            {/* Description */}
            <div className="max-w-[460px] lg:max-w-[600px] xl:max-w-[700px] mx-auto">
              <p className={cn(
                "text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300",
                "leading-relaxed font-light"
              )}>
                {description}
              </p>
            </div>
          </div>

          {/* Grille des fonctionnalités */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MuxxusFeatureCard 
                key={index} 
                {...feature} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusFeature;
