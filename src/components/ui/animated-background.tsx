"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedBackgroundProps = {
  variant?: "floating-shapes" | "gradient-mesh" | "particle-field" | "geometric-pattern";
  intensity?: "low" | "medium" | "high";
  className?: string;
  children?: React.ReactNode;
  autoPlay?: boolean;
  scrollReactive?: boolean;
};

const AnimatedBackground = ({
  variant = "floating-shapes",
  intensity = "medium",
  className = "",
  children,
  autoPlay = true,
  scrollReactive = true,
}: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const getIntensityValue = () => {
    switch (intensity) {
      case "low": return 0.3;
      case "medium": return 0.6;
      case "high": return 1;
      default: return 0.6;
    }
  };

  useGSAP(() => {
    if (!containerRef.current || !backgroundRef.current) return;

    const intensityValue = getIntensityValue();

    switch (variant) {
      case "floating-shapes":
        createFloatingShapes(backgroundRef.current, intensityValue);
        break;
      case "gradient-mesh":
        createGradientMesh(backgroundRef.current, intensityValue);
        break;
      case "particle-field":
        createParticleField(backgroundRef.current, intensityValue);
        break;
      case "geometric-pattern":
        createGeometricPattern(backgroundRef.current, intensityValue);
        break;
    }
  }, { scope: containerRef });

  const createFloatingShapes = (container: HTMLElement, intensity: number) => {
    const shapes = [];
    const shapeCount = Math.floor(8 * intensity);

    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement("div");
      shape.className = "floating-shape";
      shape.style.cssText = `
        position: absolute;
        width: ${20 + Math.random() * 40}px;
        height: ${20 + Math.random() * 40}px;
        background: rgba(59, 130, 246, ${0.1 * intensity});
        border: 1px solid rgba(59, 130, 246, ${0.2 * intensity});
        border-radius: ${Math.random() > 0.5 ? '50%' : '4px'};
        pointer-events: none;
        z-index: 0;
      `;

      container.appendChild(shape);
      shapes.push(shape);

      // Position initiale
      gsap.set(shape, {
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        rotation: Math.random() * 360,
      });

      // Animation flottante
      gsap.to(shape, {
        y: -100,
        x: Math.random() * container.offsetWidth - container.offsetWidth / 2,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        delay: Math.random() * 8,
        ease: "none",
      });
    }

    // Animation réactive au scroll
    if (scrollReactive) {
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: -50 * intensity,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }
  };

  const createGradientMesh = (container: HTMLElement, intensity: number) => {
    const mesh = document.createElement("div");
    mesh.className = "gradient-mesh";
    mesh.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, ${0.1 * intensity}) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(147, 51, 234, ${0.1 * intensity}) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(16, 185, 129, ${0.05 * intensity}) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    `;

    container.appendChild(mesh);

    if (scrollReactive) {
      gsap.to(mesh, {
        background: `radial-gradient(circle at 80% 80%, rgba(59, 130, 246, ${0.2 * intensity}) 0%, transparent 50%),
                    radial-gradient(circle at 20% 20%, rgba(147, 51, 234, ${0.2 * intensity}) 0%, transparent 50%),
                    radial-gradient(circle at 60% 60%, rgba(16, 185, 129, ${0.1 * intensity}) 0%, transparent 50%)`,
        duration: 2,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  };

  const createParticleField = (container: HTMLElement, intensity: number) => {
    const particles = [];
    const particleCount = Math.floor(15 * intensity);

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 3}px;
        height: ${2 + Math.random() * 3}px;
        background: rgba(59, 130, 246, ${0.6 * intensity});
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
      `;

      container.appendChild(particle);
      particles.push(particle);

      // Position initiale
      gsap.set(particle, {
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
      });

      // Animation de mouvement
      gsap.to(particle, {
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        delay: Math.random() * 10,
        ease: "none",
      });
    }

    // Animation réactive au scroll
    if (scrollReactive) {
      particles.forEach((particle) => {
        gsap.to(particle, {
          scale: 1.5,
          opacity: 0.8,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      });
    }
  };

  const createGeometricPattern = (container: HTMLElement, intensity: number) => {
    const pattern = document.createElement("div");
    pattern.className = "geometric-pattern";
    pattern.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(45deg, rgba(59, 130, 246, ${0.05 * intensity}) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(147, 51, 234, ${0.05 * intensity}) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, ${0.05 * intensity}) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, ${0.05 * intensity}) 75%);
      background-size: 40px 40px;
      background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
      pointer-events: none;
      z-index: 0;
    `;

    container.appendChild(pattern);

    if (scrollReactive) {
      gsap.to(pattern, {
        backgroundPosition: "40px 40px, 40px 60px, 60px 20px, 20px 40px",
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
