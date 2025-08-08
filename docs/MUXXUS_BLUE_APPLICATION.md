# Application du Bleu de Muxxus - Guide Rapide

## 🎯 Objectif
Appliquer le bleu de Muxxus (`#2563eb` / `blue-600`) sur toutes les pages du projet pour une cohérence visuelle.

## 🔵 Couleur Muxxus
- **Couleur principale**: `#2563eb` (blue-600)
- **Couleur hover**: `#1d4ed8` (blue-700)
- **Couleur light**: `#3b82f6` (blue-500)

## 📋 Pages à Mettre à Jour

### ✅ Pages Déjà Mises à Jour
- [x] `/design` - Page Design (complète)
- [x] `/web` - Page Web (partielle)

### 🔄 Pages à Mettre à Jour

#### Pages Home
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

## 🔧 Remplacements à Effectuer

### 1. Boutons
```tsx
// AVANT
<ButtonSwap link="/contact" bgColor="bg-theme" />
<CircleFillButton href="/contact" text="Get Started" />

// APRÈS
<MuxxusButton href="/contact" variant="muxxus" size="lg">
  Get Started
</MuxxusButton>
```

### 2. Couleurs de Texte
```tsx
// AVANT
<span className="text-text">Titre</span>
<span className="text-theme">Accent</span>

// APRÈS
<span className="text-gray-900 dark:text-white">Titre</span>
<span className="text-blue-600">Accent</span>
```

### 3. Couleurs d'Arrière-plan
```tsx
// AVANT
<div className="bg-theme">
<div className="bg-background-fixed">

// APRÈS
<div className="bg-blue-600">
<div className="bg-white dark:bg-gray-900">
```

### 4. Bordures et Éléments Visuels
```tsx
// AVANT
<div className="border-theme">
<span className="before:bg-[var(--theme)]">

// APRÈS
<div className="border-blue-600">
<span className="before:bg-blue-600">
```

## 🚀 Script d'Application Rapide

### Étape 1: Identifier les Composants Clés
Pour chaque page, identifier et mettre à jour :
1. **Hero Section** - Boutons et accents
2. **About Section** - Sous-titres et chiffres
3. **Service Section** - Numéros et icônes
4. **Contact Section** - Boutons d'action
5. **Footer** - Liens et accents

### Étape 2: Appliquer les Changements
```bash
# Pour chaque composant, remplacer :
# - text-theme → text-blue-600
# - bg-theme → bg-blue-600
# - border-theme → border-blue-600
# - before:bg-[var(--theme)] → before:bg-blue-600
```

### Étape 3: Tester la Cohérence
- Vérifier en mode clair et sombre
- Tester les interactions (hover, focus)
- Valider l'accessibilité

## 📝 Exemples Concrets

### BrandingHero
```tsx
// Mettre à jour les boutons et accents
<MuxxusButton variant="muxxus" size="lg">
  Start Project
</MuxxusButton>

// Mettre à jour les accents
<span className="text-blue-600">Branding</span>
```

### BrandingService
```tsx
// Mettre à jour les numéros
<span className="text-blue-600 font-semibold">01.</span>

// Mettre à jour les icônes
<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-600">
```

### BrandingContact
```tsx
// Mettre à jour les boutons
<MuxxusButton variant="muxxus" size="lg">
  Contact Us
</MuxxusButton>
```

## 🎨 Classes Tailwind à Utiliser

### Couleurs Principales
- `text-blue-600` - Texte bleu Muxxus
- `bg-blue-600` - Arrière-plan bleu Muxxus
- `border-blue-600` - Bordure bleue Muxxus
- `hover:bg-blue-700` - Hover bleu plus foncé

### Couleurs Secondaires
- `text-blue-500` - Bleu plus clair
- `bg-blue-50` - Arrière-plan bleu très clair
- `border-blue-200` - Bordure bleue claire

### États Interactifs
- `hover:text-blue-700` - Hover texte
- `focus:ring-blue-600` - Focus ring
- `active:bg-blue-700` - État actif

## 🔍 Vérification

Après chaque mise à jour, vérifier :
1. **Cohérence visuelle** entre toutes les pages
2. **Accessibilité** des contrastes
3. **Responsive design** sur tous les écrans
4. **Mode sombre** fonctionne correctement
5. **Animations** et transitions fluides

## 📊 Progression

- [x] Système de couleurs créé
- [x] MuxxusButton implémenté
- [x] Page Design harmonisée
- [x] Page Web partiellement harmonisée
- [ ] Pages restantes à harmoniser
- [ ] Tests finaux et validation
