"use client";
import { TWorkType } from "@/types";
import Marquee from "react-fast-marquee";
import MuxxusWorkCard from "@/components/work/muxxus/MuxxusWorkCard";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  works: TWorkType[];
};

const MuxxusWork = ({ works }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="has_fade_anim">
        <div className="grid gap-[10px]">
          <Marquee direction="left" speed={300}>
            {works.map((work, i) => (
              <MuxxusWorkCard {...work} key={i} />
            ))}
          </Marquee>
          <Marquee direction="right" speed={300}>
            {works.map((work, i) => (
              <MuxxusWorkCard {...work} key={i} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MuxxusWork;
