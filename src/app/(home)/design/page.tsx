import { getMainPage, getAllPages } from "@/lib/helper/contentConverter";
import DesignHero from "@/components/hero/DesignHero";
import DesignTextSlider from "@/components/slider/design/DesignTextSlider";
import DesignAbout from "@/components/about/DesignAbout";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import DesignImage2 from "@/components/image/DesignImage2";
import DesignService from "@/components/service/design/DesignService";
import DesignSkill from "@/components/skill/design/DesignSkill";
import MuxxusWork from "@/components/work/muxxus/MuxxusWork";
import MuxxusFeature from "@/components/features/muxxus/MuxxusFeature";
import FineImageSection from '@/components/image/FineImageSection';
import TeamCounterArea from "@/components/team/TeamCounterArea";
import StatMuxxus from "@/components/muxxus/StatMuxxus";
import SeoData from "@/components/tools/SeoData";
import AiFeature from "@/components/features/ai/AiFeature";
import SectionSpacing from "@/components/ui/section-spacing";

const Design = () => {
  // Récupération des données principales
  const { data: hero } = getMainPage("/heros/design-hero.mdx");
  const { data: sliderData } = getMainPage("/slider/design/text-slider.mdx");
  const { data: about } = getMainPage("/about/design-about.mdx");
  const { data: image } = getMainPage("/image/design-image.mdx");
  const { data: service } = getMainPage("/services/design/_main.mdx");
  const { data: skill } = getMainPage("/skill/design-skill.mdx");
  const { data: feature } = getMainPage("/features/web-features.mdx");
  const { data: aiFeatures } = getMainPage("/features/design-ai-features.mdx");
  const { data: statFact } = getMainPage("/funFact/muxxus-stat.mdx");
  const { data: counterArea } = getMainPage("/team/design/counter-area.mdx");

  // Récupération des collections
  const services = getAllPages("/services/design");
  const works = getAllPages("/works/design");

  return (
    <main className="min-h-screen">
      <BindBtnMoveEffect />
      
      <SeoData
        title="Design Studio - Muxxus"
        description="Découvrez notre studio de design créatif. Nous créons des expériences visuelles uniques et mémorables pour votre marque."
      />

      {/* Section Héro */}
      <DesignHero {...hero} />

      {/* Espacement avec séparateur après le hero */}
      <SectionSpacing size="lg" showSeparator separatorVariant="wave" />

      {/* Slider de texte */}
      <DesignTextSlider sliderItems={sliderData} />

      {/* Espacement avec séparateur après le slider */}
      <SectionSpacing size="lg" showSeparator separatorVariant="dots" />

      {/* Statistiques Muxxus */}
      <StatMuxxus {...statFact} />

      {/* Espacement avec séparateur après les statistiques */}
      <SectionSpacing size="lg" showSeparator separatorVariant="line" />

      {/* Section À propos */}
      <DesignAbout {...about} />

      {/* Espacement avec séparateur après la section à propos */}
      <SectionSpacing size="lg" showSeparator separatorVariant="wave" />

      {/* Section Image */}
      <DesignImage2 {...image} />

      {/* Espacement avec séparateur après l'image */}
      <SectionSpacing size="lg" showSeparator separatorVariant="dots" />

      {/* Services de design */}
      <DesignService {...service} services={services} />

      {/* Espacement avec séparateur après les services */}
      <SectionSpacing size="lg" showSeparator separatorVariant="line" />

      {/* Statistiques de l'équipe */}
      <TeamCounterArea {...counterArea} />

      {/* Espacement avec séparateur après les statistiques de l'équipe */}
      <SectionSpacing size="lg" showSeparator separatorVariant="wave" />

      {/* Compétences de design */}
      <DesignSkill {...skill} />

      {/* Espacement avec séparateur après les compétences */}
      <SectionSpacing size="lg" showSeparator separatorVariant="dots" />

      {/* Fonctionnalités AI pour le design */}
      <AiFeature {...aiFeatures} />

      {/* Espacement avec séparateur après les fonctionnalités AI */}
      <SectionSpacing size="lg" showSeparator separatorVariant="line" />

      {/* Section Image fine */}
      <FineImageSection {...image} />

      {/* Espacement avec séparateur après l'image fine */}
      <SectionSpacing size="lg" showSeparator separatorVariant="wave" />

      {/* Fonctionnalités Muxxus */}
      <MuxxusFeature {...feature} />

      {/* Espacement avec séparateur après les fonctionnalités Muxxus */}
      <SectionSpacing size="lg" showSeparator separatorVariant="dots" />

      {/* Portfolio de travaux */}
      <MuxxusWork works={works} />

      {/* Espacement final avec séparateur */}
      <SectionSpacing size="xl" showSeparator separatorVariant="wave" />
    </main>
  );
};

export default Design;
