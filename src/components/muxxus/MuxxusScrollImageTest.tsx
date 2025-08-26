"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MuxxusScrollImageTest: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const testImages = [
    "/assets/imgs/muxxus/image/img1.jpg",
    "/assets/imgs/muxxus/image/img2.jpg", 
    "/assets/imgs/muxxus/image/img3.jpg"
  ];

  // Test simple : changer d'image toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % testImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Test de changement d'image</h3>
      <div className="mb-4">
        <p>Image actuelle: {currentImageIndex + 1} / {testImages.length}</p>
        <p>Chemin: {testImages[currentImageIndex]}</p>
      </div>
      <div className="w-64 h-48 bg-white rounded-lg overflow-hidden">
        <Image
          src={testImages[currentImageIndex]}
          alt={`Test image ${currentImageIndex + 1}`}
          width={256}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MuxxusScrollImageTest;
