"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ImageComponent from "@/components/tools/ImageComponent";
import { FaDribbble, FaBehance, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  team_members: {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    favorite_project: string;
    social_links: {
      dribbble?: string;
      behance?: string;
      linkedin?: string;
      instagram?: string;
      twitter?: string;
    };
  }[];
};

const CreativeTeamShowcase = ({ title, description, team_members }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "dribbble": return <FaDribbble className="w-4 h-4" />;
      case "behance": return <FaBehance className="w-4 h-4" />;
      case "linkedin": return <FaLinkedin className="w-4 h-4" />;
      case "instagram": return <FaInstagram className="w-4 h-4" />;
      case "twitter": return <FaTwitter className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="has_text_move_anim text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="has_fade_anim text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team_members.map((member) => (
            <div
              key={member.id}
              className="has_fade_anim group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Photo et infos principales */}
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <ImageComponent
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Compétences */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Compétences</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projet préféré */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Projet Préféré</h4>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;{member.favorite_project}&rdquo;
                </p>
              </div>

              {/* Liens sociaux */}
              <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                {Object.entries(member.social_links).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      {getSocialIcon(platform)}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Rejoindre l'équipe */}
        <div className="text-center mt-16">
          <button className="has_fade_anim inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>Rejoindre Notre Équipe</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeTeamShowcase;
