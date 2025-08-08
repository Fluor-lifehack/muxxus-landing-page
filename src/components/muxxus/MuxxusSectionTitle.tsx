"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
};

const MuxxusSectionTitle = ({
  title,
  subtitle,
  description,
  className,
  align = 'left',
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div ref={containerRef} className={cn("has_text_mov_anim", alignClasses[align], className)}>
      {subtitle && (
        <div className="mb-4">
          <span className="text-[16px] leading-none font-bold uppercase inline-block text-gray-900">
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className="text-[42px] xl:text-[52px] 2xl:text-[62px] leading-[0.88] font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default MuxxusSectionTitle;
