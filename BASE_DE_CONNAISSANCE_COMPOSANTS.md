# Base de Connaissance - Composants Arolax React

## Vue d'ensemble du projet

**Arolax React** est une application Next.js 14 moderne construite avec React 18, TypeScript et Tailwind CSS. Le projet est organisé de manière modulaire avec des composants réutilisables et une architecture claire.

### Technologies principales
- **Framework**: Next.js 14.2.17
- **UI**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS + SASS
- **Animations**: GSAP (GreenSock)
- **Composants UI**: Radix UI + shadcn/ui
- **Formulaires**: React Hook Form + Zod
- **Thème**: next-themes (clair/sombre)

## Architecture des composants

### 1. Composants UI de base (`src/components/ui/`)

#### Button (`button.tsx`)
- **Variants**: default, destructive, outline, secondary, ghost, link, CornerCutButton, Seo, Video, circle, Ai
- **Sizes**: default, md, xl, icon
- **Fonctionnalités**: Support pour asChild, variants avec class-variance-authority
- **Utilisation**: Composant principal pour tous les boutons de l'interface

#### Form (`form.tsx`)
- **Intégration**: React Hook Form + Zod validation
- **Composants**: FormField, FormControl, FormItem, FormMessage
- **Utilisation**: Gestion des formulaires avec validation

#### Input (`input.tsx`)
- **Type**: Composant de base pour les champs de saisie
- **Styling**: Tailwind CSS avec classes personnalisées

#### Dialog (`dialog.tsx`)
- **Base**: Radix UI Dialog
- **Fonctionnalités**: Modales et dialogues modaux

#### Carousel (`carousel.tsx`)
- **Base**: Embla Carousel
- **Fonctionnalités**: Carrousel d'images avec navigation

#### Navigation Menu (`navigation-menu.tsx`)
- **Base**: Radix UI Navigation Menu
- **Fonctionnalités**: Menu de navigation principal

### 2. Composants de mise en page (`src/components/`)

#### Headers (`src/components/headers/`)
- **WebHeader**: Header principal pour les pages web
- **MarketingHeader**: Header pour les pages marketing
- **AiHeader**: Header pour les pages IA
- **SeoHeader**: Header pour les pages SEO
- **BrandingHeader**: Header pour les pages branding
- **DesignStudioHeader**: Header pour le studio de design

**Structure commune**:
- Logo avec support thème clair/sombre
- Menu de navigation principal
- Bouton de recherche globale
- Menu latéral mobile (SideNavModal)

#### Hero Sections (`src/components/hero/`)
- **WebHero**: Section héro pour le développement web
- **MarketingHero**: Section héro pour le marketing
- **AiHero**: Section héro pour l'IA
- **SeoHero**: Section héro pour le SEO
- **BrandingHero**: Section héro pour le branding
- **VideoHero**: Section héro pour la production vidéo

**Caractéristiques**:
- Animations GSAP (fade, word animations)
- Design responsive avec Tailwind
- Support des thèmes clair/sombre
- Intégration vidéo et images

#### Footer (`src/components/footer/`)
- Composant de pied de page réutilisable
- Liens de navigation et informations de contact

### 3. Composants métier

#### Features (`src/components/features/`)
- **WebFeature**: Fonctionnalités du développement web
- **AiFeature**: Fonctionnalités de l'IA
- **MarketingFeature**: Fonctionnalités marketing
- **SeoFeature**: Fonctionnalités SEO

**Structure**:
- WebFeatureCard : Carte de fonctionnalité avec icône, titre et description
- Animations d'apparition avec GSAP

#### Services (`src/components/service/`)
- Composants pour afficher les services offerts
- Intégration avec le système de thème

#### Portfolio (`src/components/portfolio/`)
- Affichage des projets et réalisations
- Support des images et descriptions

#### Team (`src/components/team/`)
- Présentation de l'équipe
- Photos et informations des membres

#### Testimonials (`src/components/testimonial/`)
- Avis clients et témoignages
- Système de notation avec étoiles

### 4. Composants utilitaires (`src/components/tools/`)

#### ImageComponent (`ImageComponent.tsx`)
- **Fonctionnalités**: Support thème clair/sombre, images responsives
- **Props**: src, darkSrc, width, height, customHeight, customWidth
- **Utilisation**: Composant d'image principal du projet

#### VideoModal (`VideoModal.tsx`)
- **Fonctionnalités**: Modal pour la lecture de vidéos
- **Intégration**: React Player

#### GlobalSearch (`GlobalSearch.tsx`)
- **Fonctionnalités**: Recherche globale dans l'application
- **Interface**: Modal de recherche avec résultats

#### CursorAnimation (`CursorAnimation.tsx`)
- **Fonctionnalités**: Animation du curseur personnalisé
- **Intégration**: GSAP pour les animations

#### ScrollSmoother (`ScrollSmoother.tsx`)
- **Fonctionnalités**: Défilement fluide avec GSAP
- **Amélioration**: Expérience utilisateur

### 5. Composants de formulaire (`src/components/form/`)

#### FlexibleForm (`src/components/form/branding/FlexibleForm.tsx`)
- **Validation**: Zod schema
- **Gestion**: React Hook Form
- **Champs**: Nom, email, téléphone, sujet, message
- **Styling**: Classes Tailwind personnalisées

### 6. Composants d'éléments (`src/components/elements/`)

#### Logo (`src/components/elements/logo/Logo.tsx`)
- **Fonctionnalités**: Support thème clair/sombre, tailles personnalisables
- **Configuration**: Via siteConfig.json
- **Props**: url, light, customWidth, customHeight, className

#### ButtonFlip (`src/components/elements/button/ButtonFlip.tsx`)
- **Fonctionnalités**: Bouton avec effet de retournement
- **Animations**: GSAP pour les transitions

### 7. Composants de navigation

#### Menu (`src/components/menu/Menu.tsx`)
- **Fonctionnalités**: Menu de navigation principal
- **Structure**: Navigation avec sous-menus
- **Styling**: Classes Tailwind personnalisées

#### SideNavModal (`src/components/sideNavModal/SideNavModal.tsx`)
- **Fonctionnalités**: Menu latéral mobile
- **Interface**: Modal avec navigation et actions

## Patterns et conventions

### 1. Structure des composants
```typescript
"use client"; // Pour les composants interactifs

import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const ComponentName = ({ prop1, prop2 }: Props) => {
  // Hooks et logique
  useGSAP(() => {
    // Animations GSAP
  });

  return (
    <div className={cn("base-classes", className)}>
      {/* Contenu du composant */}
    </div>
  );
};

export default ComponentName;
```

### 2. Gestion des thèmes
- Utilisation de `next-themes` pour le basculement clair/sombre
- Support des images avec versions claire et sombre
- Classes CSS conditionnelles basées sur le thème

### 3. Animations GSAP
- `hasFadeAnim()` : Animations d'apparition en fondu
- `hasWordAnim()` : Animations de texte
- Intégration avec `useGSAP` pour la portée des animations

### 4. Responsive Design
- Classes Tailwind avec breakpoints (lg:, xl:, 2xl:)
- Grilles CSS avec `grid-cols-[1fr_260px]`
- Espacement adaptatif avec classes conditionnelles

### 5. Gestion des images
- Composant `ImageComponent` unifié
- Support des images claires/sombres
- Optimisation Next.js avec `priority` et dimensions

## Utilisation des composants

### 1. Import et utilisation
```typescript
import { Button } from "@/components/ui/button";
import WebHero from "@/components/hero/WebHero";
import ImageComponent from "@/components/tools/ImageComponent";

// Utilisation
<Button variant="CornerCutButton" size="default">
  Cliquez ici
</Button>

<WebHero />

<ImageComponent 
  src="/path/to/image.png"
  darkSrc="/path/to/dark-image.png"
  width={400}
  height={300}
  alt="Description"
/>
```

### 2. Personnalisation des composants
```typescript
// Props personnalisées
<Logo light={isLight} customWidth={200} customHeight={100} />

// Classes CSS personnalisées
<Button className="custom-button-class" variant="default" />
```

### 3. Intégration des animations
```typescript
const containerRef = useRef<HTMLDivElement>(null!);

useGSAP(() => {
  hasFadeAnim();
  hasWordAnim();
}, { scope: containerRef });

return (
  <section ref={containerRef}>
    {/* Contenu avec animations */}
  </section>
);
```

## Bonnes pratiques

### 1. Performance
- Utilisation de `"use client"` uniquement quand nécessaire
- Composants d'image optimisés avec Next.js
- Animations GSAP avec portée limitée

### 2. Accessibilité
- Composants Radix UI pour l'accessibilité
- Attributs alt pour les images
- Support du clavier et de la navigation

### 3. Maintenabilité
- Structure modulaire claire
- Composants réutilisables
- Types TypeScript stricts
- Classes Tailwind organisées

### 4. Responsive
- Design mobile-first
- Grilles CSS flexibles
- Espacement adaptatif
- Images responsives

## Dépendances et intégrations

### 1. Bibliothèques UI
- **Radix UI**: Composants accessibles (Dialog, Select, Navigation Menu)
- **shadcn/ui**: Composants de base (Button, Input, Form)
- **Lucide React**: Icônes SVG
- **React Icons**: Bibliothèque d'icônes

### 2. Animations et interactions
- **GSAP**: Animations avancées
- **Embla Carousel**: Carrousels
- **Swiper**: Sliders et carrousels
- **React Fast Marquee**: Textes défilants

### 3. Formulaires et validation
- **React Hook Form**: Gestion des formulaires
- **Zod**: Validation des schémas
- **Hookform Resolvers**: Intégration des validateurs

### 4. Utilitaires
- **clsx**: Gestion conditionnelle des classes CSS
- **class-variance-authority**: Variants de composants
- **tailwind-merge**: Fusion des classes Tailwind

## Structure des fichiers

```
src/components/
├── ui/                    # Composants UI de base
├── headers/              # En-têtes de pages
├── hero/                 # Sections héro
├── features/             # Fonctionnalités
├── service/              # Services
├── portfolio/            # Portfolio
├── team/                 # Équipe
├── testimonial/          # Témoignages
├── form/                 # Formulaires
├── elements/             # Éléments réutilisables
├── tools/                # Composants utilitaires
├── menu/                 # Navigation
├── footer/               # Pied de page
└── ...                   # Autres composants métier
```

## Conclusion

Cette base de connaissance fournit une vue d'ensemble complète de l'architecture des composants d'Arolax React. Le projet suit les meilleures pratiques modernes de développement React avec Next.js, utilisant une approche modulaire et des composants réutilisables. L'intégration de GSAP pour les animations, Tailwind CSS pour le styling, et Radix UI pour l'accessibilité en fait une base solide pour des applications web modernes et performantes.
