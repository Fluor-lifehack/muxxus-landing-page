"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  leftData: Record<string, unknown>;
  rightData: Record<string, unknown>;
};

const MuxxusFeature2Demo = ({ }: Props) => {
  const [currentPosition, setCurrentPosition] = useState<"left" | "right">("left");

  const switchToLeft = () => {
    setCurrentPosition("left");
  };

  const switchToRight = () => {
    setCurrentPosition("right");
  };

  return (
    <div className="space-y-8">
      {/* Contrôles de switch */}
      <div className="flex justify-center space-x-4">
        <Button
          onClick={switchToLeft}
          variant={currentPosition === "left" ? "default" : "outline"}
          className="flex items-center space-x-2"
        >
          <FaArrowLeft />
          <span>Image à gauche</span>
        </Button>
        
        <Button
          onClick={switchToRight}
          variant={currentPosition === "right" ? "default" : "outline"}
          className="flex items-center space-x-2"
        >
          <span>Image à droite</span>
          <FaArrowRight />
        </Button>
      </div>

      {/* Indicateur de position actuelle */}
      <div className="text-center">
        <span className="text-sm text-gray-600">
          Position actuelle : <strong>{currentPosition === "left" ? "Gauche" : "Droite"}</strong>
        </span>
      </div>

      {/* Composant MuxxusFeature2 avec position dynamique */}
      <div className="text-center py-8">
        <p className="text-gray-600">Position: {currentPosition}</p>
      </div>
    </div>
  );
};

export default MuxxusFeature2Demo;
