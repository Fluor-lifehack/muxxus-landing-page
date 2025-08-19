"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useMode } from "@/context/app.context";

export default function ImageComponent({
  src = "",
  darkSrc = "",
  width = 0,
  height = 0,
  customHeight = "",
  customWidth = "",
  dataSpeed = 1,
  alt = "Image",
  className = "",
  priority = false,
  dataFadeFrom = "",
  dataFadeOffset = "",
  dataDelay = "",
  style,
}: {
  src?: string;
  darkSrc?: string;
  width?: number;
  height?: number;
  customHeight?: string;
  customWidth?: string;
  dataSpeed?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
  dataFadeFrom?: string;
  dataFadeOffset?: string;
  dataDelay?: string;
  style?: CSSProperties;
}) {
  const { mode } = useMode();

  return (
    <Image
      width={width}
      height={height}
      style={{ width: customWidth, height: customHeight, ...(style || {}) }}
      src={mode === "dark" ? (darkSrc ? darkSrc : src) : src}
      className={className}
      alt={alt}
      priority={priority}
      data-speed={dataSpeed}
      data-fade-from={dataFadeFrom}
      data-fade-offset={dataFadeOffset}
      data-delay={dataDelay}
    />
  );
}
