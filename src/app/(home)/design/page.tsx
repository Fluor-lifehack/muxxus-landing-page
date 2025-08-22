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
import {
  ScrollAnimationProvider,
  RevealOnScroll,
  StaggerOnScroll,
  TextRevealOnScroll,
  CardFlipOnScroll,
  GradientOnScroll,
  ParticlesOnScroll,
  MorphOnScroll,
} from "@/components/ui/scroll-animations";

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
    <ScrollAnimationProvider>
      <main className="min-h-screen">
        <BindBtnMoveEffect />
        
        <SeoData
          title="Design Studio - Muxxus"
          description="Découvrez notre studio de design créatif. Nous créons des expériences visuelles uniques et mémorables pour votre marque."
        />

        {/* Section Héro avec animation de révélation - Pas de décalage avec la navigation */}

            <DesignHero {...hero} />


        {/* Slider de texte avec animation de stagger */}
        <StaggerOnScroll direction="left" distance={80} stagger={0.15}>
          <DesignTextSlider sliderItems={sliderData} />
        </StaggerOnScroll>

        {/* Statistiques Muxxus avec animation de révélation */}
        <RevealOnScroll direction="up" distance={100} duration={1.3} delay={0.3}>
          <StatMuxxus {...statFact} />
        </RevealOnScroll>

        {/* Section À propos avec animation de texte */}
        <TextRevealOnScroll type="words" direction="up" distance={60} stagger={0.1}>
          <DesignAbout {...about} />
        </TextRevealOnScroll>

        {/* Section Image avec animation de morphing */}
        <MorphOnScroll morphTo="scale(1.02)" duration={1.8}>
          <DesignImage2 {...image} />
        </MorphOnScroll>

        {/* Services de design avec animation de stagger */}
        <StaggerOnScroll direction="up" distance={70} stagger={0.12}>
          <DesignService {...service} services={services} />
        </StaggerOnScroll>


        {/* Statistiques de l'équipe avec animation de révélation */}
        <RevealOnScroll direction="right" distance={90} duration={1.4} delay={0.2}>
          <TeamCounterArea {...counterArea} />
        </RevealOnScroll>

        {/* Compétences de design avec animation de carte 3D */}
        <CardFlipOnScroll direction="y" angle={12} duration={1.6}>
          <DesignSkill {...skill} />
        </CardFlipOnScroll>

        {/* Espacement avec séparateur après les compétences */}
        <SectionSpacing size="lg" showSeparator separatorVariant="dots" />

        {/* Fonctionnalités AI avec animation de gradient */}
        <GradientOnScroll fromColor="rgba(59, 130, 246, 0.05)" toColor="rgba(147, 51, 234, 0.05)">
          <AiFeature {...aiFeatures} />
        </GradientOnScroll>

      
        {/* Section Image fine avec animation de révélation */}
        <RevealOnScroll direction="up" distance={110} duration={1.7} delay={0.4}>
          <FineImageSection {...image} />
        </RevealOnScroll>


        {/* Fonctionnalités Muxxus avec animation de particules - ACCÉLÉRÉES */}
        <ParticlesOnScroll particleCount={8} duration={2.5}> {/* Réduit de 4 à 2.5 */}
          <MuxxusFeature {...feature} />
        </ParticlesOnScroll>

        {/* Portfolio de travaux avec animation de stagger */}
        <StaggerOnScroll direction="up" distance={85} stagger={0.18}>
          <MuxxusWork works={works} />
        </StaggerOnScroll>

      </main>
    </ScrollAnimationProvider>
  );
};

export default Design;
