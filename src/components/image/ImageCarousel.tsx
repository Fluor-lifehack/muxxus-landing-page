"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ImageComponent from "@/components/tools/ImageComponent";

type Props = {
  images: string[];
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
};

const ImageCarousel = ({ 
  images, 
  alt = "Carousel Image", 
  className = "",
  autoPlay = true,
  interval = 5000
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Animation d'entrée
    gsap.fromTo(containerRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      }
    );
  }, { scope: containerRef });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play effect
  useGSAP(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, interval]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden py-20 ${className}`}
    >
      <div className="inner-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Image Gallery</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our visual collection with interactive navigation
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Image principale */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <ImageComponent
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              width={800}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              dataSpeed={0.3}
            />
            
            {/* Overlay avec informations */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Image {currentIndex + 1}</h3>
              <p className="text-sm opacity-90">Beautiful visual content</p>
            </div>
            
            {/* Indicateur de progression */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Bouton play/pause */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Indicateurs de navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Miniatures */}
        <div className="flex justify-center mt-8 space-x-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-110 ${
                index === currentIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <ImageComponent
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={60}
                className="w-20 h-16 object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-blue-500/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
