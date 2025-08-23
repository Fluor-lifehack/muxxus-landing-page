# 🆕 Composants FAQ Implémentés

## 🎯 Objectif

Implémenter tous les composants FAQ utilisés dans la page `business-accounts` avec des designs cohérents et des fonctionnalités avancées.

## ✅ Composants Créés

### **1. MuxxusFAQ** - FAQ Principal Muxxus
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

### **2. FaqSection** - FAQ avec Accordéon
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

### **3. AiFaq** - FAQ avec Design AI
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

### **4. WebFaq** - FAQ avec Design Web
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

### **5. AboutFaq** - FAQ avec Design About
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

### **6. MarketingFaq** - FAQ avec Design Marketing
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

### **7. SimpleBusinessFaq** - FAQ Simple Business
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

## 📁 Structure des Fichiers

```
src/components/faq/
├── index.ts                    # Export centralisé
├── muxxus/
│   └── MuxxusFAQ.tsx         # FAQ principal Muxxus
├── branding/
│   └── FaqSection.tsx        # FAQ avec accordéon
├── ai/
│   └── AiFaq.tsx             # FAQ design AI
├── web/
│   └── WebFaq.tsx            # FAQ design Web
├── about/
│   └── AboutFaq.tsx          # FAQ design About
├── marketing/
│   └── MarketingFaq.tsx      # FAQ design Marketing
└── business/
    └── SimpleBusinessFaq.tsx # FAQ simple business
```

## 🚀 Utilisation dans business-accounts

```tsx
// Import des composants
import MuxxusFAQ from "@/components/muxxus/MuxxusFAQ";
import FaqSection from "@/components/faq/branding/FaqSection";
import AiFaq from "@/components/faq/ai/AiFaq";
import WebFaq from "@/components/faq/web/WebFaq";
import AboutFaq from "@/components/faq/about/AboutFaq";
import MarketingFaq from "@/components/faq/marketing/MarketingFaq";
import SimpleBusinessFaq from "@/components/faq/business/SimpleBusinessFaq";

// Utilisation avec données spécifiques
<MuxxusFAQ {...faqData} />
<FaqSection faqs={faqData.faqs} />
<AiFaq title="..." description="..." action_btn={...} faqs={faqData.faqs} />
<WebFaq title="..." description="..." faqs={faqData.faqs} />
<AboutFaq {...aboutFaqData} />
<MarketingFaq {...marketingFaqData} />
<SimpleBusinessFaq {...simpleBusinessFaqData} />
```

## ✨ Fonctionnalités Communes

- **Animations GSAP** : Tous les composants utilisent des animations fluides
- **Responsive Design** : Adaptation automatique à tous les écrans
- **TypeScript** : Props typées pour une meilleure maintenabilité
- **Accessibilité** : Support des lecteurs d'écran et navigation clavier
- **Performance** : Optimisation des re-renders et des animations

## 🎨 Design System

- **Cohérence visuelle** : Tous les composants suivent le design system Muxxus
- **Couleurs harmonisées** : Utilisation des couleurs de la marque
- **Typographie** : Hiérarchie claire et lisible
- **Espacement** : Système d'espacement cohérent
- **Interactions** : Effets de hover et transitions fluides

## 🔧 Maintenance

- **Code modulaire** : Chaque composant est indépendant et réutilisable
- **Props flexibles** : Configuration facile via les props
- **Documentation** : Commentaires et types TypeScript clairs
- **Tests** : Structure prête pour l'ajout de tests unitaires
