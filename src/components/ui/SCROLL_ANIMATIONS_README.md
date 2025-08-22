# 🚀 Animations au Scroll Avancées - Guide Complet

## 🎯 Vue d'ensemble

Ce système d'animations au scroll utilise GSAP ScrollTrigger pour créer des expériences visuelles fluides et performantes. Chaque composant est optimisé pour déclencher des animations au bon moment lors du défilement.

## 📦 Composants d'Animation Disponibles

### 1. **`RevealOnScroll`** - Révélation avec Parallax
```tsx
import { RevealOnScroll } from "@/components/ui/scroll-animations";

<RevealOnScroll 
  direction="up" 
  distance={120} 
  duration={1.5} 
  delay={0.2}
  parallax={true}
>
  <YourComponent />
</RevealOnScroll>
```

**Props :**
- `direction` : "up" | "down" | "left" | "right" (défaut: "up")
- `distance` : Distance de déplacement en pixels (défaut: 100)
- `duration` : Durée de l'animation en secondes (défaut: 1.2)
- `delay` : Délai avant le début de l'animation (défaut: 0)
- `ease` : Fonction d'easing GSAP (défaut: "power3.out")
- `parallax` : Effet parallax au scroll (défaut: true)
- `config` : Configuration ScrollTrigger (défaut: "default")

### 2. **`StaggerOnScroll`** - Animation en Cascade
```tsx
import { StaggerOnScroll } from "@/components/ui/scroll-animations";

<StaggerOnScroll 
  direction="up" 
  distance={80} 
  stagger={0.15}
  duration={1}
>
  <div>Élément 1</div>
  <div>Élément 2</div>
  <div>Élément 3</div>
</StaggerOnScroll>
```

**Props :**
- `stagger` : Délai entre chaque élément (défaut: 0.1)
- Autres props identiques à `RevealOnScroll`

### 3. **`TextRevealOnScroll`** - Révélation de Texte
```tsx
import { TextRevealOnScroll } from "@/components/ui/scroll-animations";

<TextRevealOnScroll 
  type="words" 
  direction="up" 
  distance={50} 
  stagger={0.05}
>
  <h2>Votre titre avec animation de texte</h2>
</TextRevealOnScroll>
```

**Props :**
- `type` : "chars" | "words" | "lines" (défaut: "words")
- Autres props identiques à `RevealOnScroll`

### 4. **`CardFlipOnScroll`** - Flip 3D
```tsx
import { CardFlipOnScroll } from "@/components/ui/scroll-animations";

<CardFlipOnScroll 
  direction="y" 
  angle={15} 
  duration={1.2}
>
  <div className="card">Votre carte</div>
</CardFlipOnScroll>
```

**Props :**
- `direction` : "x" | "y" (défaut: "y")
- `angle` : Angle de rotation en degrés (défaut: 15)
- Autres props identiques à `RevealOnScroll`

### 5. **`MorphOnScroll`** - Transformation et Morphing
```tsx
import { MorphOnScroll } from "@/components/ui/scroll-animations";

<MorphOnScroll 
  morphTo="scale(1.05) rotate(2deg)" 
  duration={1.8}
>
  <div>Élément avec transformation</div>
</MorphOnScroll>
```

**Props :**
- `morphTo` : Transformation CSS finale (défaut: "scale(1.05) rotate(2deg)")
- Autres props identiques à `RevealOnScroll`

### 6. **`GradientOnScroll`** - Animation de Couleur
```tsx
import { GradientOnScroll } from "@/components/ui/scroll-animations";

<GradientOnScroll 
  fromColor="rgba(59, 130, 246, 0.05)" 
  toColor="rgba(147, 51, 234, 0.05)"
  duration={2}
>
  <div>Élément avec gradient animé</div>
</GradientOnScroll>
```

**Props :**
- `fromColor` : Couleur de départ (défaut: "rgba(59, 130, 246, 0.1)")
- `toColor` : Couleur d'arrivée (défaut: "rgba(147, 51, 234, 0.1)")
- Autres props identiques à `RevealOnScroll`

### 7. **`ParticlesOnScroll`** - Particules Flottantes
```tsx
import { ParticlesOnScroll } from "@/components/ui/scroll-animations";

<ParticlesOnScroll 
  particleCount={8} 
  duration={4}
>
  <div>Élément avec particules</div>
</ParticlesOnScroll>
```

**Props :**
- `particleCount` : Nombre de particules (défaut: 5)
- `duration` : Durée de l'animation des particules (défaut: 3)
- Autres props identiques à `RevealOnScroll`

## ⚙️ Configurations ScrollTrigger

### **Configurations prédéfinies :**

```tsx
// default - Animation standard
{
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
  scrub: false,
  markers: false,
}

// fast - Animation rapide
{
  start: "top 90%",
  end: "bottom 10%",
  toggleActions: "play none none reverse",
  scrub: false,
  markers: false,
}

// slow - Animation lente
{
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
  scrub: false,
  markers: false,
}

// sticky - Animation avec scrub
{
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
  scrub: 1,
  markers: false,
}
```

## 🎨 Exemples d'Utilisation

### **Page complète avec animations :**
```tsx
import { ScrollAnimationProvider } from "@/components/ui/scroll-animations";

const Page = () => {
  return (
    <ScrollAnimationProvider>
      <main>
        {/* Hero avec révélation */}
        <RevealOnScroll direction="up" distance={120}>
          <HeroSection />
        </RevealOnScroll>

        {/* Services avec stagger */}
        <StaggerOnScroll direction="up" stagger={0.15}>
          <ServicesSection />
        </StaggerOnScroll>

        {/* Titre avec révélation de texte */}
        <TextRevealOnScroll type="words" direction="left">
          <h1>Votre titre</h1>
        </TextRevealOnScroll>

        {/* Cartes avec flip 3D */}
        <CardFlipOnScroll direction="y" angle={12}>
          <CardGrid />
        </CardFlipOnScroll>
      </main>
    </ScrollAnimationProvider>
  );
};
```

### **Combinaison d'animations :**
```tsx
// Animation complexe avec plusieurs composants
<RevealOnScroll direction="up" distance={100}>
  <div className="container">
    <TextRevealOnScroll type="words" direction="left">
      <h2>Titre principal</h2>
    </TextRevealOnScroll>
    
    <StaggerOnScroll direction="up" stagger={0.1}>
      <div>Contenu 1</div>
      <div>Contenu 2</div>
      <div>Contenu 3</div>
    </StaggerOnScroll>
  </div>
</RevealOnScroll>
```

## 🔧 Hooks Personnalisés

### **Utilisation des hooks directement :**
```tsx
import { useRevealAnimation } from "@/components/ui/scroll-animations";

const MyComponent = () => {
  const ref = useRevealAnimation({
    direction: "up",
    distance: 100,
    duration: 1.2,
  });

  return (
    <div ref={ref}>
      Votre contenu avec animation
    </div>
  );
};
```

### **Hook de stagger :**
```tsx
import { useStaggerAnimation } from "@/components/ui/scroll-animations";

const MyList = () => {
  const ref = useStaggerAnimation({
    direction: "up",
    stagger: 0.15,
  });

  return (
    <div ref={ref}>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

## 🎭 Effets Visuels Avancés

### **Parallax :**
```tsx
<RevealOnScroll 
  direction="up" 
  distance={120} 
  parallax={true}
>
  <div>Élément avec effet parallax</div>
</RevealOnScroll>
```

### **Morphing complexe :**
```tsx
<MorphOnScroll 
  morphTo="scale(1.1) rotate(5deg) translateY(-10px)" 
  duration={2}
>
  <div>Élément avec transformation complexe</div>
</MorphOnScroll>
```

### **Gradient dynamique :**
```tsx
<GradientOnScroll 
  fromColor="rgba(255, 0, 0, 0.1)" 
  toColor="rgba(0, 0, 255, 0.1)"
  duration={3}
>
  <div>Élément avec gradient rouge vers bleu</div>
</GradientOnScroll>
```

## 📱 Responsive et Performance

### **Optimisations automatiques :**
- **Mobile** : Animations réduites pour les performances
- **Tablet** : Animations intermédiaires
- **Desktop** : Animations complètes

### **Gestion de la mémoire :**
- Nettoyage automatique des ScrollTriggers
- Optimisation des animations GSAP
- Support des navigateurs modernes

## 🚀 Bonnes Pratiques

### **1. Hiérarchie des animations :**
```tsx
// Commencer par les animations principales
<RevealOnScroll direction="up" distance={120}>
  <MainSection />
</RevealOnScroll>

// Puis les animations secondaires
<StaggerOnScroll direction="up" stagger={0.1}>
  <SubElements />
</StaggerOnScroll>
```

### **2. Timing des animations :**
```tsx
// Délais progressifs pour créer un flux
<RevealOnScroll delay={0} />
<RevealOnScroll delay={0.2} />
<RevealOnScroll delay={0.4} />
```

### **3. Distances cohérentes :**
```tsx
// Utiliser des distances similaires pour la cohérence
<RevealOnScroll distance={100} />
<RevealOnScroll distance={80} />
<RevealOnScroll distance={120} />
```

## 🔍 Débogage

### **Activer les marqueurs :**
```tsx
// Temporairement pour le débogage
<RevealOnScroll config="default" markers={true}>
  <div>Votre contenu</div>
</RevealOnScroll>
```

### **Console GSAP :**
```tsx
// Dans la console du navigateur
gsap.globalTimeline.timeScale(0.5); // Ralentir toutes les animations
gsap.globalTimeline.timeScale(1);   // Vitesse normale
```

## 📚 Exemples Complets

Voir `src/app/(home)/design/page.tsx` pour un exemple d'utilisation complète de tous les composants d'animation au scroll.

## 🎨 Personnalisation Avancée

### **Créer des animations personnalisées :**
```tsx
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CustomAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, 
        { scale: 0, rotation: 180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 1.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );
    }
  }, { scope: ref });

  return <div ref={ref}>Animation personnalisée</div>;
};
```

Ce système d'animations au scroll offre une expérience utilisateur fluide et engageante tout en maintenant des performances optimales ! 🎉✨
