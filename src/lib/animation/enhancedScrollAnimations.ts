import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Configuration globale des animations
const SCROLL_CONFIG = {
  default: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse",
    scrub: false,
    markers: false,
  },
  fast: {
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none reverse",
    scrub: false,
    markers: false,
  },
  slow: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    scrub: false,
    markers: false,
  },
  sticky: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    scrub: 1,
    markers: false,
  },
};

// Animation de révélation avec parallax
export const revealWithParallax = (
  element: HTMLElement,
  options: {
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    parallax?: boolean;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    direction = "up",
    distance = 100,
    duration = 1.2,
    delay = 0,
    ease = "power3.out",
    parallax = true,
    config = "default",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  // Position initiale selon la direction
  let initialPosition = {};
  switch (direction) {
    case "up":
      initialPosition = { y: distance, opacity: 0, scale: 0.9 };
      break;
    case "down":
      initialPosition = { y: -distance, opacity: 0, scale: 0.9 };
      break;
    case "left":
      initialPosition = { x: -distance, opacity: 0, scale: 0.9 };
      break;
    case "right":
      initialPosition = { x: distance, opacity: 0, scale: 0.9 };
      break;
  }

  // Animation principale
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      ...scrollConfig,
    },
  });

  tl.fromTo(
    element,
    initialPosition,
    {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
    }
  );

  // Effet parallax si activé
  if (parallax) {
    gsap.to(element, {
      y: distance * 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }

  return tl;
};

// Animation de stagger avec effet cascade
export const staggerReveal = (
  elements: HTMLElement[],
  options: {
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    direction = "up",
    distance = 80,
    duration = 1,
    stagger = 0.1,
    delay = 0,
    ease = "power2.out",
    config = "default",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  // Position initiale selon la direction
  let initialPosition = {};
  switch (direction) {
    case "up":
      initialPosition = { y: distance, opacity: 0, scale: 0.8 };
      break;
    case "down":
      initialPosition = { y: -distance, opacity: 0, scale: 0.8 };
      break;
    case "left":
      initialPosition = { x: -distance, opacity: 0, scale: 0.8 };
      break;
    case "right":
      initialPosition = { x: distance, opacity: 0, scale: 0.8 };
      break;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0],
      ...scrollConfig,
    },
  });

  tl.fromTo(
    elements,
    initialPosition,
    {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease,
    }
  );

  return tl;
};

// Animation de morphing et transformation
export const morphingAnimation = (
  element: HTMLElement,
  options: {
    morphTo?: string;
    duration?: number;
    delay?: number;
    ease?: string;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    morphTo = "scale(1.05) rotate(2deg)",
    duration = 1.5,
    delay = 0,
    ease = "power2.inOut",
    config = "default",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      ...scrollConfig,
    },
  });

  tl.fromTo(
    element,
    {
      scale: 0.8,
      rotation: -5,
      opacity: 0,
    },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: duration * 0.6,
      delay,
      ease,
    }
  )
    .to(element, {
      transform: morphTo,
      duration: duration * 0.4,
      ease: "power1.out",
    }, "-=0.2");

  return tl;
};

// Animation de texte avec effet de révélation progressive
export const textRevealAnimation = (
  element: HTMLElement,
  options: {
    type?: "chars" | "words" | "lines";
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    direction = "up",
    distance = 50,
    duration = 1,
    stagger = 0.05,
    delay = 0,
    ease = "power3.out",
    config = "default",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  // Position initiale selon la direction
  let initialPosition = {};
  switch (direction) {
    case "up":
      initialPosition = { y: distance, opacity: 0, scale: 0.9 };
      break;
    case "down":
      initialPosition = { y: -distance, opacity: 0, scale: 0.9 };
      break;
    case "left":
      initialPosition = { x: -distance, opacity: 0, scale: 0.9 };
      break;
    case "right":
      initialPosition = { x: distance, opacity: 0, scale: 0.9 };
      break;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      ...scrollConfig,
    },
  });

  // Animation du conteneur principal
  tl.fromTo(
    element,
    initialPosition,
    {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: duration * 0.4,
      delay,
      ease,
    }
  );

  // Animation des éléments internes avec stagger
  const children = element.children;
  if (children.length > 0) {
    tl.fromTo(
      children,
      {
        y: distance * 0.5,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: duration * 0.6,
        stagger,
        ease,
      },
      "-=0.3"
    );
  }

  return tl;
};

// Animation de carte avec effet de flip 3D
export const cardFlipAnimation = (
  element: HTMLElement,
  options: {
    direction?: "x" | "y";
    angle?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    direction = "y",
    angle = 15,
    duration = 1.2,
    delay = 0,
    ease = "power2.out",
    config = "default",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      ...scrollConfig,
    },
  });

  // Configuration 3D
  gsap.set(element, { 
    perspective: 1000,
    transformStyle: "preserve-3d"
  });

  tl.fromTo(
    element,
    {
      [`rotation${direction.toUpperCase()}`]: -angle,
      opacity: 0,
      scale: 0.8,
      z: -100,
    },
    {
      [`rotation${direction.toUpperCase()}`]: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      duration,
      delay,
      ease,
    }
  );

  return tl;
};

// Animation de gradient et couleur au scroll
export const gradientScrollAnimation = (
  element: HTMLElement,
  options: {
    fromColor?: string;
    toColor?: string;
    duration?: number;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    fromColor = "rgba(59, 130, 246, 0.1)",
    toColor = "rgba(147, 51, 234, 0.1)",
    duration = 2,
    config = "sticky",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  gsap.to(element, {
    backgroundColor: toColor,
    duration,
    scrollTrigger: {
      trigger: element,
      ...scrollConfig,
    },
  });

  return gsap.to(element, {
    backgroundColor: fromColor,
    duration,
    scrollTrigger: {
      trigger: element,
      start: "bottom top",
      end: "top bottom",
      scrub: 1,
    },
  });
};

// Animation de particules flottantes
export const floatingParticlesAnimation = (
  container: HTMLElement,
  options: {
    particleCount?: number;
    duration?: number;
    config?: keyof typeof SCROLL_CONFIG;
  } = {}
) => {
  const {
    particleCount = 5,
    duration = 3,
    config = "sticky",
  } = options;

  const scrollConfig = SCROLL_CONFIG[config];

  // Créer des particules
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-particle";
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
    `;
    container.appendChild(particle);

    // Animation de la particule
    gsap.set(particle, {
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
    });

    gsap.to(particle, {
      y: -100,
      x: Math.random() * container.offsetWidth - container.offsetWidth / 2,
      opacity: 0,
      duration,
      repeat: -1,
      delay: Math.random() * duration,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        ...scrollConfig,
      },
    });
  }
};

// Nettoyage des animations
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Configuration des animations par défaut
export const setupDefaultAnimations = () => {
  // Optimisations globales
  gsap.config({
    nullTargetWarn: false,
  });

  // Configuration ScrollTrigger
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
};

const enhancedScrollAnimations = {
  revealWithParallax,
  staggerReveal,
  morphingAnimation,
  textRevealAnimation,
  cardFlipAnimation,
  gradientScrollAnimation,
  floatingParticlesAnimation,
  cleanupAnimations,
  setupDefaultAnimations,
};

export default enhancedScrollAnimations;
