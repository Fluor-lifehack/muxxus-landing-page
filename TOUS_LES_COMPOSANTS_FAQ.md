# 📚 Tous les Composants FAQ du Projet Muxxus

## 🎯 Vue d'ensemble

Ce document recense **TOUS** les composants FAQ présents dans le projet Muxxus, organisés par catégorie et fonctionnalité.

## 📁 **1. Composants FAQ Principaux (Muxxus)**

### **MuxxusFAQ** - FAQ Principal Muxxus
**Fichier :** `src/components/muxxus/MuxxusFAQ.tsx`

**Fonctionnalités :**
- ✅ **Animations GSAP** avec `hasFadeAnim()`
- ✅ **Liste de FAQ** avec animations progressives
- ✅ **Effets de hover** sur les cartes
- ✅ **Design responsive** et moderne
- ✅ **Props typées** avec TypeScript

**Props :**
```tsx
type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
  align?: 'left' | 'center' | 'right';
  className?: string;
};
```

**Utilisation :**
```tsx
<MuxxusFAQ {...faqData} />
```

---

## 📁 **2. Composants FAQ par Catégorie**

### **FaqSection** - FAQ avec Accordéon (Branding)
**Fichier :** `src/components/faq/branding/FaqSection.tsx`

**Fonctionnalités :**
- ✅ **Accordéon interactif** avec états ouverts/fermés
- ✅ **Animations GSAP** avec `hasFadeAnim()`
- ✅ **Intégration ScrollSmoother** pour une expérience fluide
- ✅ **Design responsive** et accessible

**Props :**
```tsx
type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};
```

**Utilisation :**
```tsx
<FaqSection faqs={faqData.faqs} />
```

---

### **AiFaq** - FAQ avec Design AI
**Fichier :** `src/components/faq/ai/AiFaq.tsx`

**Fonctionnalités :**
- ✅ **Design AI moderne** avec `AiSectionTitle`
- ✅ **Bouton d'action** intégré avec `ActionBtnType`
- ✅ **Animations GSAP** avec `hasFadeAnim()` et `hasTextMovAnim()`
- ✅ **Layout en grille** responsive
- ✅ **Intégration ScrollSmoother**

**Props :**
```tsx
type Props = {
  title: string;
  description: string;
  action_btn: ActionBtnType;
  faqs: {
    question: string;
    answer: string;
  }[];
};
```

**Utilisation :**
```tsx
<AiFaq 
  title="AI-Powered Business Solutions"
  description="Discover how AI enhances your business banking..."
  action_btn={{
    enable: true,
    label: "Explore AI Features",
    link: "/contact"
  }}
  faqs={faqData.faqs}
/>
```

---

### **WebFaq** - FAQ avec Design Web
**Fichier :** `src/components/faq/web/WebFaq.tsx`

**Fonctionnalités :**
- ✅ **Design Web moderne** avec `WebSectionTitle`
- ✅ **Layout en grille** avec titre à gauche et FAQ à droite
- ✅ **Animations GSAP** avec `hasFadeAnim()` et `hasTextMovAnim()`
- ✅ **Intégration** avec `FaqSection` existant

**Props :**
```tsx
type Props = {
  title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};
```

**Utilisation :**
```tsx
<WebFaq 
  title="Web-Based Banking Solutions"
  description="Access your business accounts from anywhere..."
  faqs={faqData.faqs}
/>
```

---

### **AboutFaq** - FAQ avec Design About
**Fichier :** `src/components/faq/about/AboutFaq.tsx`

**Fonctionnalités :**
- ✅ **Layout en grille** avec titre à gauche et FAQ à droite
- ✅ **Design moderne** avec cartes blanches et ombres
- ✅ **Animations GSAP** avec `hasFadeAnim()`
- ✅ **Design responsive** et élégant

**Props :**
```tsx
type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};
```

**Utilisation :**
```tsx
<AboutFaq {...aboutFaqData} />
```

---

### **MarketingFaq** - FAQ avec Design Marketing
**Fichier :** `src/components/faq/marketing/MarketingFaq.tsx`

**Fonctionnalités :**
- ✅ **Design Marketing** avec `MarketingSectionTitle`
- ✅ **Accordéon moderne** avec effets de hover
- ✅ **Animations GSAP** avec `hasFadeAnim()` et `hasTextMovAnim()`
- ✅ **Intégration ScrollSmoother**
- ✅ **Design responsive** et professionnel

**Props :**
```tsx
type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};
```

**Utilisation :**
```tsx
<MarketingFaq {...marketingFaqData} />
```

---

### **SimpleBusinessFaq** - FAQ Simple Business
**Fichier :** `src/components/faq/business/SimpleBusinessFaq.tsx`

**Fonctionnalités :**
- ✅ **Design simple et épuré** pour les comptes business
- ✅ **Accordéon intégré** dans des cartes modernes
- ✅ **Animations GSAP** avec `hasFadeAnim()`
- ✅ **Lien de contact** intégré
- ✅ **Design responsive** et accessible

**Props :**
```tsx
type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  className?: string;
};
```

**Utilisation :**
```tsx
<SimpleBusinessFaq {...simpleBusinessFaqData} />
```

---

## 📁 **3. Composants FAQ de Service**

### **ServiceDetailsFaq** - FAQ pour Services
**Fichier :** `src/components/service/accounts/ServiceDetailsFaq.tsx`

**Fonctionnalités :**
- ✅ **FAQ intégré** dans les pages de service
- ✅ **Accordéon interactif** avec états ouverts/fermés
- ✅ **Animations GSAP** avec `hasFadeAnim()`
- ✅ **Design cohérent** avec les autres composants de service

**Props :**
```tsx
type Props = {
  faqTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};
```

**Utilisation :**
```tsx
<ServiceDetailsFaq faqTitle="FAQ" faqs={faqData.faqs} />
```

---

### **WebServiceDetailsFaq** - FAQ pour Services Web
**Fichier :** `src/components/service/web/WebServiceDetailsFaq.tsx`

**Fonctionnalités :**
- ✅ **FAQ spécialisé** pour les services web
- ✅ **Design Web** avec `WebSectionTitle`
- ✅ **Animations GSAP** avec `hasFadeAnim()` et `hasTextMovAnim()`
- ✅ **Intégration** avec `FaqSection`

**Props :**
```tsx
// Utilise TServiceType avec faq_title, faq_description, faqs
```

**Utilisation :**
```tsx
<WebServiceDetailsFaq data={serviceData} />
```

---

## 📁 **4. Composants FAQ Spécialisés**

### **AboutFaqs** - FAQ avec Vidéo et Image
**Fichier :** `src/components/about/AboutFaqs.tsx`

**Fonctionnalités :**
- ✅ **FAQ avec image** et vidéo intégrée
- ✅ **Modal vidéo** interactif
- ✅ **Layout en grille** avec image à gauche et FAQ à droite
- ✅ **Animations GSAP** avec `hasFadeAnim()`

**Props :**
```tsx
type Props = {
  title: string;
  image: string;
  video: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};
```

**Utilisation :**
```tsx
<AboutFaqs 
  title="About Our Company"
  image="/path/to/image.jpg"
  video="/path/to/video.mp4"
  faqs={faqData.faqs}
/>
```

---

### **SeoPricingFaqs** - FAQ pour Prix SEO
**Fichier :** `src/components/pricing/seo/SeoPricingFaqs.tsx`

**Fonctionnalités :**
- ✅ **FAQ simple** pour les pages de prix
- ✅ **Accordéon basique** sans animations complexes
- ✅ **Design minimaliste** et fonctionnel
- ✅ **Support thème sombre/clair**

**Props :**
```tsx
type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};
```

**Utilisation :**
```tsx
<SeoPricingFaqs faqs={pricingFaqData} />
```

---

## 📁 **5. Pages FAQ**

### **FAQPage** - Page FAQ Principale
**Fichier :** `src/app/faq/page.tsx`

**Fonctionnalités :**
- ✅ **Page FAQ complète** avec catégories
- ✅ **Navigation par catégorie** avec icônes
- ✅ **Design responsive** et moderne
- ✅ **Intégration** avec `DesignSectionTitle`

**Utilisation :**
```tsx
// Page accessible via /faq
```

---

### **Faqs** - Page FAQ Style 1
**Fichier :** `src/app/(inner-style-1)/faq/page.tsx`

**Fonctionnalités :**
- ✅ **Page FAQ** avec style inner-style-1
- ✅ **Intégration** avec `FaqSection`
- ✅ **Support SEO** avec `SeoData`
- ✅ **Layout** avec `TopLineButton` et `IntroSection`

**Utilisation :**
```tsx
// Page accessible via /faq avec style inner-style-1
```

---

## 📁 **6. Structure Complète des Fichiers**

```
src/
├── components/
│   ├── muxxus/
│   │   └── MuxxusFAQ.tsx                    # FAQ principal Muxxus
│   ├── faq/
│   │   ├── index.ts                         # Export centralisé
│   │   ├── branding/
│   │   │   └── FaqSection.tsx               # FAQ avec accordéon
│   │   ├── ai/
│   │   │   └── AiFaq.tsx                    # FAQ design AI
│   │   ├── web/
│   │   │   └── WebFaq.tsx                   # FAQ design Web
│   │   ├── about/
│   │   │   └── AboutFaq.tsx                 # FAQ design About
│   │   ├── marketing/
│   │   │   └── MarketingFaq.tsx             # FAQ design Marketing
│   │   └── business/
│   │       └── SimpleBusinessFaq.tsx        # FAQ simple business
│   ├── service/
│   │   ├── accounts/
│   │   │   └── ServiceDetailsFaq.tsx        # FAQ pour services
│   │   └── web/
│   │       └── WebServiceDetailsFaq.tsx     # FAQ pour services web
│   ├── about/
│   │   └── AboutFaqs.tsx                    # FAQ avec vidéo/image
│   └── pricing/
│       └── seo/
│           └── SeoPricingFaqs.tsx           # FAQ pour prix SEO
└── app/
    ├── faq/
    │   └── page.tsx                          # Page FAQ principale
    └── (inner-style-1)/
        └── faq/
            └── page.tsx                      # Page FAQ style 1
```

## 🚀 **Utilisation et Import**

### **Import Centralisé**
```tsx
// Depuis le fichier d'index
import { 
  MuxxusFAQ, 
  FaqSection, 
  AiFaq, 
  WebFaq, 
  AboutFaq, 
  MarketingFaq, 
  SimpleBusinessFaq 
} from "@/components/faq";
```

### **Import Individuel**
```tsx
// Import direct depuis les composants
import MuxxusFAQ from "@/components/muxxus/MuxxusFAQ";
import FaqSection from "@/components/faq/branding/FaqSection";
import AiFaq from "@/components/faq/ai/AiFaq";
import WebFaq from "@/components/faq/web/WebFaq";
import AboutFaq from "@/components/faq/about/AboutFaq";
import MarketingFaq from "@/components/faq/marketing/MarketingFaq";
import SimpleBusinessFaq from "@/components/faq/business/SimpleBusinessFaq";
```

## ✨ **Fonctionnalités Communes**

- **Animations GSAP** : La plupart utilisent des animations fluides
- **Responsive Design** : Adaptation automatique à tous les écrans
- **TypeScript** : Props typées pour une meilleure maintenabilité
- **Accessibilité** : Support des lecteurs d'écran et navigation clavier
- **Performance** : Optimisation des re-renders et des animations

## 🎨 **Design System**

- **Cohérence visuelle** : Tous suivent le design system Muxxus
- **Couleurs harmonisées** : Utilisation des couleurs de la marque
- **Typographie** : Hiérarchie claire et lisible
- **Espacement** : Système d'espacement cohérent
- **Interactions** : Effets de hover et transitions fluides

## 🔧 **Maintenance et Évolution**

- **Code modulaire** : Chaque composant est indépendant et réutilisable
- **Props flexibles** : Configuration facile via les props
- **Documentation** : Commentaires et types TypeScript clairs
- **Tests** : Structure prête pour l'ajout de tests unitaires
- **Évolutivité** : Facile d'ajouter de nouveaux composants FAQ

## 📊 **Statistiques**

- **Total des composants FAQ** : 12 composants
- **Composants principaux** : 7 composants
- **Composants de service** : 2 composants
- **Composants spécialisés** : 2 composants
- **Pages FAQ** : 2 pages
- **Support TypeScript** : 100%
- **Support GSAP** : 90%
- **Design responsive** : 100%
