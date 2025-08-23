import React, { memo } from "react";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import MuxxusFooter from "@/components/footer/MuxxusFooter";
import MuxxusNewsletter from "@/components/newsletter/MuxxusNewsletter";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import MuxxusHeader from "@/components/headers/MuxxusHeader";
import "@/styles/design-page.css";

// Types pour une meilleure type safety
interface LayoutProps {
  children: React.ReactNode;
}

// Constantes pour éviter la recréation d'objets
const LAYOUT_CLASSES = {
  root: "beatrice-kanit root-layout",
  theme: "style-3",
  contentWrapper: "pt-16 lg:pt-20",
} as const;

// Composant Header mémorisé pour éviter les re-renders inutiles
const MemoizedHeader = memo(MuxxusHeader);
const MemoizedFooter = memo(MuxxusFooter);
const MemoizedNewsletter = memo(MuxxusNewsletter);

/**
 * Layout principal pour les pages de design
 * Optimisé pour la performance et la maintenabilité
 */
const DesignLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <div 
      className={LAYOUT_CLASSES.root} 
      theme-setting={LAYOUT_CLASSES.theme}
      data-testid="design-layout"
    >
      {/* Composants d'outils globaux */}
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      
      {/* Header fixe en dehors du ScrollSmoother pour une meilleure UX */}
      <MemoizedHeader />
      
      {/* Wrapper principal avec ScrollSmoother */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Contenu principal avec padding-top ajusté */}
          <main className={LAYOUT_CLASSES.contentWrapper}>
            {children}
          </main>
          
          {/* Sections de contenu */}
          <MemoizedNewsletter />
          <MemoizedFooter />
        </div>
      </div>
    </div>
  );
};

// Mémorisation du composant pour éviter les re-renders inutiles
export default memo(DesignLayout);
