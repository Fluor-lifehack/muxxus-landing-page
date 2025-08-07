"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import SeoSectionTitle from "@/components/sectionTitle/SeoSectionTitle";
import { FaUsers, FaTrophy, FaProjectDiagram, FaAward } from "react-icons/fa";

type Props = {
  title: string;
  experience: {
    value: string;
    prefix: string;
  };
  projects: {
    value: string;
    prefix: string;
  };
  team_member: {
    value: string;
    prefix: string;
  };
  awards: {
    value: string;
    prefix: string;
  };
};

const StatMuxxus = ({
  title,
  experience,
  projects,
  team_member,
  awards,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
      hasCountAnim();
    },
    { scope: containerRef }
  );
  return (
    <section className="inner-container" ref={containerRef}>
      <div className="section-spacing-top">
        <SeoSectionTitle
          title={title}
          className="max-w-[520px] mx-auto text-center"
        />
                                   <div className="mt-[41px] xl:mt-[61px]">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="has_fade_anim text-center" data-delay="0.15">
                <div className="text-6xl xl:text-8xl font-bold text-black-600">
                  <span data-count={experience.value} className="has_count_anim">
                    {experience.value}
                  </span>
                  {experience.prefix}
                </div>
                <div className="text-lg xl:text-xl text-gray-600 mt-4">Years experience</div>
              </div>
              
              <div className="hidden lg:block w-24 h-1 bg-gray-300"></div>
              
              <div className="has_fade_anim text-center" data-delay="0.30">
                <div className="text-6xl xl:text-8xl font-bold text-black-600">
                  <span data-count={projects.value} className="has_count_anim">
                    {projects.value}
                  </span>
                  {projects.prefix}
                </div>
                <div className="text-lg xl:text-xl text-gray-600 mt-4">Projects done successfully</div>
              </div>
              
              <div className="hidden lg:block w-24 h-1 bg-gray-300"></div>
              
              <div className="has_fade_anim text-center" data-delay="0.45">
                <div className="text-6xl xl:text-8xl font-bold text-black-600">
                  <span data-count={team_member.value} className="has_count_anim">
                    {team_member.value}
                  </span>
                  {team_member.prefix}
                </div>
                <div className="text-lg xl:text-xl text-gray-600 mt-4">Marketing team member</div>
              </div>
              
              <div className="hidden lg:block w-24 h-1 bg-gray-300"></div>
              
              <div className="has_fade_anim text-center" data-delay="0.60">
                <div className="text-6xl xl:text-8xl font-bold text-black-600">
                  <span data-count={awards.value} className="has_count_anim">
                    {awards.value}
                  </span>
                  {awards.prefix}
                </div>
                <div className="text-lg xl:text-xl text-gray-600 mt-4">We achieved awards</div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default StatMuxxus;
