"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  images: string[];
  alt?: string;
  className?: string;
};

const ImageGrid = ({ images, alt = "Image Grid", className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !gridRef.current) return;

    // Animation d'entrée en cascade
    const gridItems = gridRef.current.children;
    gsap.fromTo(gridItems, 
      { 
        y: 50, 
        opacity: 0,
        scale: 0.9
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  const handleImageHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    
    gsap.to(target, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleImageLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    
    gsap.to(target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-20 ${className}`}
    >
      <div className="inner-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Creative Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest projects and creative solutions
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform-gpu"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              <ImageComponent
                src={image}
                alt={`${alt} ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                dataSpeed={0.5}
              />
              
              {/* Overlay avec effet de glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenu au survol */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Project {index + 1}</h3>
                  <p className="text-sm opacity-90">Creative Design Solution</p>
                </div>
              </div>
              
              {/* Bordure animée */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300" />
            </div>
          ))}
        </div>
        
        {/* Bouton CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
