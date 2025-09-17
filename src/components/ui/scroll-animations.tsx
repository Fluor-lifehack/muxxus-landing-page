"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import {
  revealWithParallax,
  staggerReveal,
  morphingAnimation,
  textRevealAnimation,
  cardFlipAnimation,
  gradientScrollAnimation,
  floatingParticlesAnimation,
  setupDefaultAnimations,
} from "@/lib/animation/enhancedScrollAnimations";

// Hook pour l'animation de révélation avec parallax
export const useRevealAnimation = (
  options: {
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    parallax?: boolean;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      revealWithParallax(elementRef.current, options);
    }
  }, { scope: elementRef });

  return elementRef;
};

// Hook pour l'animation de stagger
export const useStaggerAnimation = (
  options: {
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      const children = Array.from(containerRef.current.children) as HTMLElement[];
      if (children.length > 0) {
        staggerReveal(children, options);
      }
    }
  }, { scope: containerRef });

  return containerRef;
};

// Hook pour l'animation de morphing
export const useMorphingAnimation = (
  options: {
    morphTo?: string;
    duration?: number;
    delay?: number;
    ease?: string;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      morphingAnimation(elementRef.current, options);
    }
  }, { scope: elementRef });

  return elementRef;
};

// Hook pour l'animation de texte
export const useTextRevealAnimation = (
  options: {
    type?: "chars" | "words" | "lines";
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      textRevealAnimation(elementRef.current, options);
    }
  }, { scope: elementRef });

  return elementRef;
};

// Hook pour l'animation de carte 3D
export const useCardFlipAnimation = (
  options: {
    direction?: "x" | "y";
    angle?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      cardFlipAnimation(elementRef.current, options);
    }
  }, { scope: elementRef });

  return elementRef;
};

// Hook pour l'animation de gradient
export const useGradientAnimation = (
  options: {
    fromColor?: string;
    toColor?: string;
    duration?: number;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      gradientScrollAnimation(elementRef.current, options);
    }
  }, { scope: elementRef });

  return elementRef;
};

// Hook pour l'animation de particules
export const useParticlesAnimation = (
  options: {
    particleCount?: number;
    duration?: number;
    config?: "default" | "fast" | "slow" | "sticky";
  } = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      floatingParticlesAnimation(containerRef.current, options);
    }
  }, { scope: containerRef });

  return containerRef;
};

// Composant de révélation avec parallax
export const RevealOnScroll = ({
  children,
  className = "",
  direction = "up",
  distance = 100,
  duration = 1.2,
  delay = 0,
  ease = "power3.out",
  parallax = true,
  config = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  parallax?: boolean;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRevealAnimation({
    direction,
    distance,
    duration,
    delay,
    ease,
    parallax,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de stagger
export const StaggerOnScroll = ({
  children,
  className = "",
  direction = "up",
  distance = 80,
  duration = 1,
  stagger = 0.1,
  delay = 0,
  ease = "power2.out",
  config = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useStaggerAnimation({
    direction,
    distance,
    duration,
    stagger,
    delay,
    ease,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de morphing
export const MorphOnScroll = ({
  children,
  className = "",
  morphTo = "scale(1.05) rotate(2deg)",
  duration = 1.5,
  delay = 0,
  ease = "power2.inOut",
  config = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  morphTo?: string;
  duration?: number;
  delay?: number;
  ease?: string;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useMorphingAnimation({
    morphTo,
    duration,
    delay,
    ease,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de révélation de texte
export const TextRevealOnScroll = ({
  children,
  className = "",
  type = "words",
  direction = "up",
  distance = 50,
  duration = 1,
  stagger = 0.05,
  delay = 0,
  ease = "power3.out",
  config = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  type?: "chars" | "words" | "lines";
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useTextRevealAnimation({
    type,
    direction,
    distance,
    duration,
    stagger,
    delay,
    ease,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de carte 3D
export const CardFlipOnScroll = ({
  children,
  className = "",
  direction = "y",
  angle = 15,
  duration = 1.2,
  delay = 0,
  ease = "power2.out",
  config = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "x" | "y";
  angle?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useCardFlipAnimation({
    direction,
    angle,
    duration,
    delay,
    ease,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de gradient
export const GradientOnScroll = ({
  children,
  className = "",
  fromColor = "rgba(59, 130, 246, 0.1)",
  toColor = "rgba(147, 51, 234, 0.1)",
  duration = 2,
  config = "sticky",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  fromColor?: string;
  toColor?: string;
  duration?: number;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useGradientAnimation({
    fromColor,
    toColor,
    duration,
    config,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

// Composant de particules
export const ParticlesOnScroll = ({
  children,
  className = "",
  particleCount = 5,
  duration = 3,
  config = "sticky",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
  duration?: number;
  config?: "default" | "fast" | "slow" | "sticky";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useParticlesAnimation({
    particleCount,
    duration,
    config,
  });

  return (
    <div ref={ref} className={`relative ${className}`} {...props}>
      {children}
    </div>
  );
};

// Configuration globale des animations
export const ScrollAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    setupDefaultAnimations();
  }, []);

  return <>{children}</>;
};

const scrollAnimations = {
  useRevealAnimation,
  useStaggerAnimation,
  useMorphingAnimation,
  useTextRevealAnimation,
  useCardFlipAnimation,
  useGradientAnimation,
  useParticlesAnimation,
  RevealOnScroll,
  StaggerOnScroll,
  MorphOnScroll,
  TextRevealOnScroll,
  CardFlipOnScroll,
  GradientOnScroll,
  ParticlesOnScroll,
  ScrollAnimationProvider,
};

export default scrollAnimations;
