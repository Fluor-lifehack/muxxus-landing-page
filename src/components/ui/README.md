# Composants UI - Espacement et Séparateurs

## 🎯 Vue d'ensemble

Cette collection de composants UI fournit des solutions standardisées pour gérer les espacements et séparateurs entre les sections de vos pages.

## 📦 Composants disponibles

### 1. `Spacing` - Espacement simple

Composant de base pour ajouter de l'espacement vertical entre les composants.

```tsx
import Spacing from "@/components/ui/spacing";

// Utilisation basique
<Spacing size="lg" />

// Avec classe personnalisée
<Spacing size="xl" className="bg-gray-50" />
```

**Props :**
- `size` : "sm" | "md" | "lg" | "xl" | "2xl" (défaut: "md")
- `className` : Classes CSS personnalisées
- `children` : Contenu optionnel

**Tailles disponibles :**
- `sm` : py-4 md:py-6 lg:py-8
- `md` : py-6 md:py-8 lg:py-12
- `lg` : py-8 md:py-12 lg:py-16
- `xl` : py-12 md:py-16 lg:py-20
- `2xl` : py-16 md:py-20 lg:py-24

### 2. `Separator` - Séparateur visuel

Composant pour ajouter des séparateurs visuels entre les sections.

```tsx
import Separator from "@/components/ui/separator";

// Ligne simple
<Separator variant="line" size="md" />

// Points décoratifs
<Separator variant="dots" size="lg" />

// Vague stylisée
<Separator variant="wave" size="sm" />
```

**Props :**
- `variant` : "line" | "dots" | "wave" | "none" (défaut: "line")
- `size` : "sm" | "md" | "lg" (défaut: "md")
- `className` : Classes CSS personnalisées

**Variants disponibles :**
- `line` : Ligne horizontale avec dégradé
- `dots` : Trois points centrés
- `wave` : Forme de vague SVG
- `none` : Aucun séparateur

### 3. `SectionSpacing` - Espacement de section avancé

Composant combiné qui gère à la fois l'espacement et le séparateur.

```tsx
import SectionSpacing from "@/components/ui/section-spacing";

// Espacement avec séparateur
<SectionSpacing 
  size="lg" 
  showSeparator 
  separatorVariant="wave" 
  separatorSize="md" 
/>

// Espacement simple sans séparateur
<SectionSpacing size="xl" />
```

**Props :**
- `size` : "sm" | "md" | "lg" | "xl" | "2xl" (défaut: "lg")
- `showSeparator` : boolean (défaut: false)
- `separatorVariant` : "line" | "dots" | "wave" | "none" (défaut: "line")
- `separatorSize` : "sm" | "md" | "lg" (défaut: "md")
- `className` : Classes CSS personnalisées
- `children` : Contenu optionnel

## 🎨 Utilisation recommandée

### Pattern d'espacement standard

```tsx
const PageComponent = () => {
  return (
    <main>
      {/* Section principale */}
      <HeroSection />
      
      {/* Espacement standard entre sections */}
      <SectionSpacing size="lg" showSeparator separatorVariant="line" />
      
      {/* Section suivante */}
      <ContentSection />
      
      {/* Espacement avec séparateur décoratif */}
      <SectionSpacing size="lg" showSeparator separatorVariant="wave" />
      
      {/* Section finale */}
      <FooterSection />
      
      {/* Espacement final plus important */}
      <SectionSpacing size="xl" showSeparator separatorVariant="dots" />
    </main>
  );
};
```

### Alternance des séparateurs

Pour créer une variété visuelle, alternez entre différents types de séparateurs :

```tsx
// Pattern d'alternance
<SectionSpacing size="lg" showSeparator separatorVariant="line" />
<SectionSpacing size="lg" showSeparator separatorVariant="dots" />
<SectionSpacing size="lg" showSeparator separatorVariant="wave" />
<SectionSpacing size="lg" showSeparator separatorVariant="line" />
```

### Espacement conditionnel

```tsx
const ConditionalSpacing = ({ showSeparator = true }) => (
  <SectionSpacing 
    size="lg" 
    showSeparator={showSeparator}
    separatorVariant={showSeparator ? "line" : "none"}
  />
);
```

## 🔧 Personnalisation

### Classes CSS personnalisées

```tsx
<SectionSpacing 
  size="lg" 
  className="bg-gradient-to-r from-blue-50 to-indigo-50"
  showSeparator 
  separatorVariant="wave"
/>
```

### Séparateurs personnalisés

```tsx
// Créer un séparateur personnalisé
<Separator 
  variant="none" 
  className="flex justify-center"
>
  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
</Separator>
```

## 📱 Responsive

Tous les composants sont responsifs et s'adaptent automatiquement :

- **Mobile** : Espacement réduit (py-4 à py-8)
- **Tablet** : Espacement moyen (py-6 à py-12)
- **Desktop** : Espacement complet (py-8 à py-24)

## 🎯 Cas d'usage

### 1. **Pages de contenu** (blogs, articles)
```tsx
<SectionSpacing size="md" showSeparator separatorVariant="line" />
```

### 2. **Sections principales** (hero, about, services)
```tsx
<SectionSpacing size="lg" showSeparator separatorVariant="wave" />
```

### 3. **Sections de transition** (entre composants similaires)
```tsx
<SectionSpacing size="sm" showSeparator separatorVariant="dots" />
```

### 4. **Espacement final** (avant footer)
```tsx
<SectionSpacing size="xl" showSeparator separatorVariant="wave" />
```

## 🚀 Bonnes pratiques

1. **Cohérence** : Utilisez les mêmes tailles d'espacement pour des sections similaires
2. **Variété** : Alternez les types de séparateurs pour éviter la monotonie
3. **Hiérarchie** : Utilisez des espacements plus importants pour les sections principales
4. **Responsive** : Les composants s'adaptent automatiquement, pas besoin de media queries
5. **Accessibilité** : Les séparateurs sont purement décoratifs et n'affectent pas la navigation

## 🔄 Migration

Si vous avez des espacements manuels dans votre code :

```tsx
// Avant
<div className="py-8 md:py-12 lg:py-16"></div>

// Après
<SectionSpacing size="lg" />
```

## 📚 Exemples complets

Voir `src/app/(home)/design/page.tsx` pour un exemple d'utilisation complète de tous les composants d'espacement.
