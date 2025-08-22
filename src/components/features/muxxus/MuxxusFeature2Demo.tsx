"use client";

import { useState } from "react";
import MuxxusFeature2 from "./MuxxusFeature2";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  leftData: any;
  rightData: any;
};

const MuxxusFeature2Demo = ({ leftData, rightData }: Props) => {
  const [currentPosition, setCurrentPosition] = useState<"left" | "right">("left");
  const [currentData, setCurrentData] = useState(leftData);

  const switchToLeft = () => {
    setCurrentPosition("left");
    setCurrentData(leftData);
  };

  const switchToRight = () => {
    setCurrentPosition("right");
    setCurrentData(rightData);
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
      <MuxxusFeature2
        {...currentData}
        imagePosition={currentPosition}
      />
    </div>
  );
};

export default MuxxusFeature2Demo;
