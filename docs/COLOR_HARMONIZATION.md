# Harmonisation des Couleurs et Boutons - Muxxus

## 🎨 Système de Couleurs Harmonisé

### Couleurs Principales
- **Primary**: `#121212` (Noir principal)
- **Security Primary**: `#1e293b` (Slate-800)
- **Background**: `#ffffff` (Blanc) / `#121212` (Noir)
- **Text**: `#121212` (Sombre) / `#ffffff` (Clair)

### Classes Tailwind Harmonisées

#### Boutons
```tsx
// Utilisez MuxxusButton au lieu des boutons personnalisés
<MuxxusButton variant="primary" size="lg" href="/contact">
  Get Started
</MuxxusButton>

<MuxxusButton variant="secondary" size="md" href="/about">
  Learn More
</MuxxusButton>

<MuxxusButton variant="security" size="lg" href="/security">
  Secure Now
</MuxxusButton>
```

#### Textes
```tsx
// Utilisez les classes harmonisées
<h1 className="text-gray-900 dark:text-white">Titre</h1>
<p className="text-gray-600 dark:text-gray-300">Description</p>
<span className="text-gray-500 dark:text-gray-400">Texte secondaire</span>
```

#### Arrière-plans
```tsx
// Sections principales
<section className="bg-white dark:bg-gray-900">
<section className="bg-gray-50 dark:bg-gray-800">
<section className="bg-gray-900"> // Pour les sections sombres
```

## 🔧 Composants à Remplacer

### 1. Boutons
**Remplacer :**
- `ButtonSwap`
- `CircleFillButton`
- `ButtonFlip`
- `TopLineButton`

**Par :**
- `MuxxusButton` avec les variants appropriés

### 2. Couleurs de Texte
**Remplacer :**
- `text-text-fixed`
- `text-text-fixed-2`
- `text-text-fixed-3`

**Par :**
- `text-gray-900 dark:text-white`
- `text-gray-600 dark:text-gray-300`
- `text-gray-500 dark:text-gray-400`

### 3. Arrière-plans
**Remplacer :**
- `bg-background-fixed`
- `bg-background-3`
- `bg-theme`

**Par :**
- `bg-white dark:bg-gray-900`
- `bg-gray-50 dark:bg-gray-800`
- `bg-gray-900`

## 📋 Checklist d'Harmonisation

### Pages à Harmoniser

#### Pages Home
- [ ] `/web` - Page Web Agency
- [ ] `/design` - Page Design (déjà harmonisée)
- [ ] `/branding` - Page Branding
- [ ] `/marketing` - Page Marketing
- [ ] `/seo` - Page SEO
- [ ] `/video` - Page Video
- [ ] `/ai-agency` - Page AI Agency

#### Pages Inner Style
- [ ] `/about` - Page About
- [ ] `/contact` - Page Contact
- [ ] `/service` - Page Service
- [ ] `/team` - Page Team
- [ ] `/work` - Page Work
- [ ] `/blog` - Page Blog
- [ ] `/faq` - Page FAQ
- [ ] `/career` - Page Career

### Composants à Mettre à Jour

#### Headers
- [ ] `DesignStudioHeader`
- [ ] `WebHeader`
- [ ] `BrandingHeader`
- [ ] `MarketingHeader`
- [ ] `SeoHeader`
- [ ] `VideoHeader`
- [ ] `AiHeader`

#### Sections
- [ ] Tous les composants Hero
- [ ] Tous les composants About
- [ ] Tous les composants Service
- [ ] Tous les composants Feature
- [ ] Tous les composants Team
- [ ] Tous les composants Work
- [ ] Tous les composants Blog
- [ ] Tous les composants Contact

#### Footers
- [ ] `Footer1` - Remplacer par `MuxxusFooter`
- [ ] `Footer2` - Remplacer par `MuxxusFooter`
- [ ] `Footer3` - Remplacer par `MuxxusFooter`
- [ ] `Footer4` - Remplacer par `MuxxusFooter`
- [ ] `Footer5` - Remplacer par `MuxxusFooter`
- [ ] `Footer6` - Remplacer par `MuxxusFooter`

## 🚀 Guide d'Implémentation

### Étape 1: Remplacer les Boutons
```tsx
// AVANT
<ButtonSwap link="/contact" bgColor="bg-theme" />

// APRÈS
<MuxxusButton href="/contact" variant="primary" size="lg">
  Get Started
</MuxxusButton>
```

### Étape 2: Harmoniser les Couleurs
```tsx
// AVANT
<div className="bg-background-fixed text-text-fixed">

// APRÈS
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

### Étape 3: Mettre à Jour les Layouts
```tsx
// Dans chaque layout, remplacer le footer
import MuxxusFooter from "@/components/footer/MuxxusFooter";

// Remplacer
<Footer1 footerNav={navigation.footer1} />

// Par
<MuxxusFooter footerNav={navigation.footer1} />
```

## 🎯 Priorités

1. **Pages Home** - Commencer par les pages principales
2. **Headers** - Harmoniser tous les headers
3. **Footers** - Remplacer tous les footers par MuxxusFooter
4. **Sections** - Harmoniser les sections une par une
5. **Pages Inner** - Harmoniser les pages internes

## 📝 Notes

- Utilisez toujours `MuxxusButton` pour les nouveaux boutons
- Respectez la hiérarchie des couleurs définie
- Testez en mode clair et sombre
- Maintenez la cohérence visuelle entre toutes les pages
