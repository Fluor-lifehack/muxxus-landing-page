"use client";

import { ActionBtnType } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";

type Props = {
  title: string;
  description: string;
  bg_video: string;
  action_btn: ActionBtnType;
};

const SolutionHero = ({
  title,
  description,
  bg_video,
  action_btn,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasCharAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className="bg-background-fixed relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={bg_video}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute w-full h-full bg-black top-0 left-0 opacity-80 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
        {/* Contenu centré */}
        <div className="flex flex-col items-center justify-center text-center py-16 max-w-4xl">
          <h1
            className="has_char_anim text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight mb-6"
            data-translatex="150"
            data-delay=".45"
          >
            {title}
          </h1>
          <p
            className="has_word_anim text-white font-beatricetrial text-base sm:text-lg md:text-lg max-w-2xl mb-8"
            data-duration="1"
            data-translatex="50"
            data-delay=".30"
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
