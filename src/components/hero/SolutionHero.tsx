"use client";

import { ActionBtnType } from "@/types";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";


type Props = {
  title: string;
  description: string;
  bg_video?: string;
  bg_image?: string;
  action_btn: ActionBtnType;
};

const SolutionHero = ({
  title,
  description,
  bg_video,
  bg_image,
  action_btn,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <section
      className="bg-background-fixed relative h-screen w-full flex items-center justify-center overflow-hidden -mt-20 lg:-mt-24"
      ref={containerRef}
    >
      <div className="absolute w-full h-full top-0 left-0 z-0">
        {bg_video ? (
          <video
            className="w-full h-full object-cover"
            src={bg_video}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          bg_image && (
            <Image
              src={bg_image}
              alt="Background"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          )
        )}
        <div className="absolute w-full h-full bg-black top-0 left-0 opacity-80 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
        {/* Contenu centré */}
        <div className="flex flex-col items-center justify-center text-center py-16 max-w-4xl">
          <h1
            className="text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight mb-6"
          >
            {title}
          </h1>
          <p
            className="text-white font-beatricetrial text-base sm:text-lg md:text-lg max-w-2xl mb-8"
          >
            {description}
          </p>
          {/* Bouton d'action */}
          <Link
            href={action_btn.link}
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-500 whitespace-nowrap border border-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:border-white/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {action_btn.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
