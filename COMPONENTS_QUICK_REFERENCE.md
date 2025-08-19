# 🚀 RÉFÉRENCE RAPIDE DES COMPOSANTS MUXXUS

## ⚡ **COMPOSANTS ESSENTIELS (DÉJÀ UTILISÉS)**

### 🎯 **Boutons & Actions**
```typescript
import CircleFillButton from "@/components/elements/button/CircleFillButton";

// Utilisation :
<CircleFillButton 
  text="Texte du bouton" 
  href="/lien" 
  className="bg-blue-600 hover:bg-blue-700"
/>
```

### 🧭 **Navigation**
```typescript
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";

// Utilisation :
<BreadcrumbNav 
  items={[
    { label: "Home", href: "/" },
    { label: "Page Actuelle", href: "/page", isActive: true }
  ]} 
/>
```

### 📝 **Titres de Section**
```typescript
import DesignSectionTitle from "@/components/sectionTitle/DesignSectionTitle";

// Utilisation :
<DesignSectionTitle title="Titre de la Section" />
```

---

## 🔄 **COMPOSANTS À INTÉGRER DANS LES PAGES**

### 🚀 **Hero Sections**
```typescript
// Pour les pages de service
import ServicesHero from "@/components/service/accounts/ServicesHero";

// Pour les pages marketing
import MarketingHero from "@/components/hero/MarketingHero";

// Pour les pages web
import WebHero from "@/components/hero/WebHero";

// Pour les pages AI
import AiHero from "@/components/hero/Ai/AiHero";
```

### 💼 **Sections de Service**
```typescript
// Détails de service
import ServiceDetails from "@/components/service/accounts/ServiceDetails";

// FAQ des services
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";

// Cartes de service
import ServiceInnerCard from "@/components/service/accounts/ServiceInnerCard";

// Zones de service
import ServiceInnerArea from "@/components/service/accounts/ServiceInnerArea";
```

### 👥 **Sections Clients**
```typescript
// Zone principale des clients
import ClientArea from "@/components/clients/ClientArea";

// Clients spécialisés
import MarketingClients from "@/components/clients/MarketingClients";
import VideoClients from "@/components/clients/VideoClients";
import AiClient from "@/components/clients/AiClient";
```

### 💰 **Sections de Tarification**
```typescript
// Zone de tarification
import PricingArea from "@/components/pricing/PricingArea";

// Cartes de tarification
import PricingCard from "@/components/pricing/PricingCard";
```

### 📞 **Sections de Contact**
```typescript
// Bannière de contact
import ContactBanner from "@/components/banner/ContactBanner";

// Hero section contact
import ContactHero from "@/components/contact/ContactHero";

// Zone de contact
import ContactArea from "@/components/contact/ContactArea";
```

### ✨ **Sections de Fonctionnalités**
```typescript
// Fonctionnalités Muxxus
import MuxxusFeature from "@/components/features/muxxus/MuxxusFeature";
import MuxxusFeatureCard from "@/components/features/muxxus/MuxxusFeatureCard";
import MuxxusSecurityFeature from "@/components/features/muxxus/MuxxusSecurityFeature";
```

---

## 🎨 **COMPOSANTS SPÉCIALISÉS PAR TYPE DE PAGE**

### 📰 **Pages Blog/News**
```typescript
import BlogArea from "@/components/blog/BlogArea";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogTags from "@/components/blog/BlogTags";
import BlogFeatureArea from "@/components/blog/BlogFeatureArea";
```

### 🖼️ **Pages Portfolio**
```typescript
import DesignPortfolioGallery from "@/components/portfolio/DesignPortfolioGallery";
import SliderNav from "@/components/portfolio/SliderNav";
```

### 💼 **Pages Carrière**
```typescript
import CareerHero from "@/components/career/CareerHero";
import CareerHiring from "@/components/career/CareerHiring";
import CareerProcess from "@/components/career/CareerProcess";
import JobDetailsCard from "@/components/career/JobDetailsCard";
```

### 👨‍💼 **Pages Équipe**
```typescript
import TeamArea from "@/components/team/TeamArea";
import TeamMemberDetails from "@/components/team/TeamMemberDetails";
import TeamStatCard from "@/components/team/TeamStatCard";
import CreativeTeamShowcase from "@/components/team/CreativeTeamShowcase";
```

### 💬 **Pages Témoignages**
```typescript
import AboutBoldTestimonial from "@/components/testimonial/AboutBoldTestimonial";
import TestimonialSliderNav from "@/components/testimonial/TestimonialSliderNav";
```

---

## 🎯 **COMPOSANTS UI AVANCÉS (Shadcn/UI)**

### 📱 **Interface Utilisateur**
```typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
```

---

## ⚠️ **ERREURS COURANTES ET SOLUTIONS**

### 🔍 **Chemins d'Import Incorrects :**

#### **❌ Erreurs Fréquentes :**
```typescript
// ❌ INCORRECT - Chemin trop court
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";

// ❌ INCORRECT - Mauvais dossier
import BreadcrumbNav from "@/components/elements/BreadcrumbNav";
```

#### **✅ Chemins Corrects :**
```typescript
// ✅ CORRECT - Chemin complet
import ServiceDetailsFaq from "@/components/service/accounts/ServiceDetailsFaq";

// ✅ CORRECT - Bon dossier
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
```

### 🎯 **Composants avec Chemins Spéciaux :**

#### **Service Components :**
- `ServiceDetails` → `@/components/service/accounts/ServiceDetails`
- `ServiceDetailsFaq` → `@/components/service/accounts/ServiceDetailsFaq`
- `ServicesHero` → `@/components/service/accounts/ServicesHero`

#### **Navigation Components :**
- `BreadcrumbNav` → `@/components/navigation/BreadcrumbNav`
- `SecondaryNav` → `@/components/navigation/SecondaryNav`

#### **Section Title Components :**
- `DesignSectionTitle` → `@/components/sectionTitle/DesignSectionTitle`
- `AiSectionTitle` → `@/components/sectionTitle/AiSectionTitle`

---

## 🔧 **PATTERNS D'UTILISATION RECOMMANDÉS**

### 📋 **Structure de Page Standard**
```typescript
const PageName = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[color]-50 to-[color]-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BreadcrumbNav items={[...]} />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Titre Principal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Description</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CircleFillButton text="Action Principale" href="#" />
              <CircleFillButton text="Action Secondaire" href="#" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Section de Contenu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignSectionTitle title="Titre de Section" />
          {/* Contenu de la section */}
        </div>
      </section>

      {/* Section Alternée */}
      <section className="py-20 bg-gray-50">
        {/* Contenu avec fond alterné */}
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Call to Action</h2>
          <CircleFillButton text="Action" href="#" />
        </div>
      </section>
    </main>
  );
};
```

### 🎨 **Palette de Couleurs Muxxus**
```typescript
// Couleurs principales
const colors = {
  primary: "from-blue-50 to-blue-100",      // Bleu
  secondary: "from-green-50 to-green-100",  // Vert
  accent: "from-purple-50 to-purple-100",   // Violet
  highlight: "from-orange-50 to-orange-100" // Orange
};

// Utilisation dans les gradients
className={`bg-gradient-to-br ${colors.primary}`}
```

### 📱 **Classes Responsives Essentielles**
```typescript
// Conteneur principal
"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Grilles responsives
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Espacement vertical
"py-20" // Section complète
"py-16" // Section moyenne
"py-12" // Section petite

// Marges et espacement
"mb-16" // Marge basse grande
"mb-8"  // Marge basse moyenne
"mb-4"  // Marge basse petite
```

---

## ⚠️ **POINTS D'ATTENTION**

### 🔍 **Imports Corrects**
- Toujours vérifier le chemin d'import : `@/components/[dossier]/[composant]`
- Utiliser les composants existants plutôt que de créer de nouveaux
- Maintenir la cohérence des props entre composants

### 🎯 **Performance**
- Éviter les re-renders inutiles
- Utiliser les composants optimisés existants
- Maintenir la structure de données cohérente

### 📱 **Responsive**
- Tester sur différentes tailles d'écran
- Utiliser les classes Tailwind appropriées
- Maintenir la lisibilité sur mobile

---

## 📚 **RESSOURCES SUPPLÉMENTAIRES**

### 🔗 **Documentation**
- **Base complète** : `COMPONENTS_KNOWLEDGE_BASE.md`
- **Composants UI** : Documentation Shadcn/UI
- **Tailwind CSS** : Classes et utilitaires

### 🎯 **Exemples d'Intégration**
- Voir les pages déjà générées pour des exemples concrets
- Réutiliser les patterns établis
- Maintenir la cohérence visuelle

---

*Référence rapide - Mise à jour : Décembre 2024*
