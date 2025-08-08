# Guide des Composants Muxxus

## 🎯 Objectif
Remplacer tous les composants existants par des composants Muxxus harmonisés avec le bleu du footer (`gray-900`) et un design cohérent.

## 🎨 Couleur Muxxus
- **Couleur principale** : `#111827` (gray-900) - Couleur du footer
- **Couleur hover** : `#1f2937` (gray-800)
- **Couleur light** : `#374151` (gray-700)

## 📦 Composants Disponibles

### 1. MuxxusHero
**Remplacer :** WebHero, BrandingHero, DesignHero, etc.
```tsx
import { MuxxusHero } from '@/components/muxxus';

<MuxxusHero
  title="We are Skilled in Web Design"
  subtitle="BUILDING OUTSTANDING DESIGN"
  description="We are a full-service digital agency that builds fascinating user experiences."
  primaryButton={{
    text: "Get Started Now",
    href: "/contact"
  }}
  secondaryButton={{
    text: "Learn More",
    href: "/about"
  }}
  videoUrl="https://example.com/video.mp4"
  image={{
    src: "/assets/imgs/gallery/img-s-68.jpg",
    alt: "Hero Image"
  }}
  stats={{
    number: "18k+",
    label: "customers world-wide"
  }}
/>
```

### 2. MuxxusAbout
**Remplacer :** WebAbout, BrandingAbout, DesignAbout, etc.
```tsx
import { MuxxusAbout } from '@/components/muxxus';

<MuxxusAbout
  title="About Our Company"
  subtitle="WHO WE ARE"
  description="We are a team of passionate designers and developers creating exceptional digital experiences."
  image={{
    src: "/assets/imgs/gallery/img-s-72.jpg",
    alt: "About Image"
  }}
  stats={{
    number: "1.8x",
    label: "Faster Service",
    description: "than industry average"
  }}
  actionButton={{
    text: "Learn More",
    href: "/about"
  }}
  features={[
    "Expert team of professionals",
    "Cutting-edge technology",
    "Proven track record",
    "24/7 support"
  ]}
/>
```

### 3. MuxxusSectionTitle
**Remplacer :** WebSectionTitle, BrandingSectionTitle, etc.
```tsx
import { MuxxusSectionTitle } from '@/components/muxxus';

<MuxxusSectionTitle
  title="Our Services"
  subtitle="WHAT WE DO"
  description="We provide comprehensive digital solutions to help your business grow."
  align="center"
  className="mb-16"
/>
```

### 4. MuxxusService
**Remplacer :** WebService, BrandingService, DesignService, etc.
```tsx
import { MuxxusService } from '@/components/muxxus';

<MuxxusService
  title="Our Services"
  subtitle="WHAT WE OFFER"
  description="Comprehensive digital solutions for modern businesses"
  services={services}
  showViewAll={true}
  viewAllText="View All Services"
  viewAllHref="/services"
/>
```

### 5. MuxxusContact
**Remplacer :** WebContact, BrandingContact, etc.
```tsx
import { MuxxusContact } from '@/components/muxxus';

<MuxxusContact
  title="Ready to Get Started?"
  subtitle="LET'S TALK"
  description="Ready to transform your business? Let's discuss your project."
  buttonText="Contact Us"
  buttonHref="/contact"
  shape="/assets/imgs/shape/img-s-73.png"
  background="blue"
/>
```

### 6. MuxxusTeam
**Remplacer :** WebTeam, BrandingTeam, DesignTeam, etc.
```tsx
import { MuxxusTeam } from '@/components/muxxus';

<MuxxusTeam
  title="Meet Our Team"
  subtitle="THE EXPERTS"
  description="Our talented team of professionals"
  teamMembers={teamMembers}
  showViewAll={true}
  viewAllText="Meet Our Team"
  viewAllHref="/team"
/>
```

### 7. MuxxusFeature
**Remplacer :** WebFeature, BrandingFeature, etc.
```tsx
import { MuxxusFeature } from '@/components/muxxus';

<MuxxusFeature
  title="Enterprise-grade security for your business"
  description="Protect your data and operations with military-grade security infrastructure."
  features={features}
/>
```

### 8. MuxxusFooter
**Remplacer :** Footer1, Footer2, Footer3, etc.
```tsx
import { MuxxusFooter } from '@/components/muxxus';

<MuxxusFooter footerNav={navigation.footer1} />
```

### 9. MuxxusNewsletter
**Ajouter avant le footer :**
```tsx
import { MuxxusNewsletter } from '@/components/muxxus';

<MuxxusNewsletter />
```

## 🔄 Migration des Pages

### Page Web
```tsx
// AVANT
import WebHero from "@/components/hero/WebHero";
import WebAbout from "@/components/about/WebAbout";
import WebService from "@/components/service/web/WebService";
import WebContact from "@/components/contact/WebContact";

// APRÈS
import { 
  MuxxusHero, 
  MuxxusAbout, 
  MuxxusService, 
  MuxxusContact 
} from "@/components/muxxus";

// Dans le JSX
<MuxxusHero {...heroData} />
<MuxxusAbout {...aboutData} />
<MuxxusService {...serviceData} />
<MuxxusContact {...contactData} />
```

### Page Branding
```tsx
// AVANT
import BrandingHero from "@/components/hero/BrandingHero";
import BrandingAbout from "@/components/about/BrandingAbout";

// APRÈS
import { MuxxusHero, MuxxusAbout } from "@/components/muxxus";

// Dans le JSX
<MuxxusHero {...brandingHeroData} />
<MuxxusAbout {...brandingAboutData} />
```

## 🎨 Avantages des Composants Muxxus

### 1. Cohérence Visuelle
- Couleurs harmonisées (gray-900 du footer)
- Typographie cohérente
- Espacement uniforme

### 2. Réutilisabilité
- Props flexibles
- Variants configurables
- Facilement personnalisables

### 3. Performance
- Optimisés pour les animations GSAP
- Chargement efficace des images
- Transitions fluides

### 4. Accessibilité
- Support du mode sombre
- Contrastes appropriés
- Navigation au clavier

## 📋 Checklist de Migration

### Pages à Migrer
- [ ] `/web` - Page Web Agency
- [ ] `/branding` - Page Branding
- [ ] `/marketing` - Page Marketing
- [ ] `/seo` - Page SEO
- [ ] `/video` - Page Video
- [ ] `/ai-agency` - Page AI Agency
- [ ] `/design` - Page Design (déjà partiellement migrée)

### Composants à Remplacer
- [ ] Tous les Hero components
- [ ] Tous les About components
- [ ] Tous les Service components
- [ ] Tous les Contact components
- [ ] Tous les Team components
- [ ] Tous les Footer components

### Layouts à Mettre à Jour
- [ ] Layouts des pages Home
- [ ] Layouts des pages Inner Style
- [ ] Layouts des pages Portfolio

## 🚀 Prochaines Étapes

1. **Migrer une page par une page** pour tester la cohérence
2. **Adapter les données** pour correspondre aux props des composants Muxxus
3. **Tester en mode sombre et clair**
4. **Valider les animations et transitions**
5. **Optimiser les performances**

## 📝 Notes Importantes

- Tous les composants Muxxus utilisent le bleu `#111827` (gray-900) du footer
- Les animations GSAP sont intégrées par défaut
- Le support du mode sombre est automatique
- Les composants sont responsives par défaut
