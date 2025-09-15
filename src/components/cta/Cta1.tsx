"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonFlip from "../elements/button/ButtonFlip";
import { ActionBtnType } from "@/types";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
  bg_video?: string;
};

const Cta1 = ({ title, sub_title, action_btn, bg_video }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);

  // Debug: Log des props reçues
  console.log('Cta1 props:', { title, sub_title, action_btn, bg_video });

  // Optimisation de la vidéo pour de meilleures performances
  useEffect(() => {
    console.log('useEffect triggered, bg_video:', bg_video);
    console.log('videoRef.current:', videoRef.current);
    
    if (videoRef.current && bg_video) {
      console.log('Setting up video...');
      
      // Préchargement de la vidéo
      videoRef.current.load();
      
      // Optimisation des performances
      videoRef.current.playbackRate = 1.0;
      
      // Gestion des erreurs de vidéo
      const handleError = () => {
        console.log('Erreur de chargement vidéo, utilisation du fallback');
      };
      
      // Gestion du chargement réussi
      const handleLoadedData = () => {
        console.log('Vidéo chargée avec succès');
        if (videoRef.current) {
          videoRef.current.play().catch(e => {
            console.log('Erreur de lecture vidéo:', e);
          });
        }
      };
      
      videoRef.current.addEventListener('error', handleError);
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('error', handleError);
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    } else {
      console.log('Video setup skipped - missing videoRef or bg_video');
    }
  }, [bg_video]);

  useGSAP(
    () => {
      // Suppression de hasPinContent pour éviter les pauses de scroll
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className="cta_area main-section-style relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Vidéo en arrière-plan optimisée */}
      {bg_video ? (
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.3)',
              willChange: 'transform', // Optimisation des performances
              transform: 'translateZ(0)' // Activation de l'accélération matérielle
            }}
          >
            <source src={bg_video} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          {/* Overlay pour assurer la lisibilité du texte */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-0"></div>
      )}
      
      <div ref={containerRef} className="container relative z-20">
        <div className="main-section-spacing">
          <div className="text-center">
            <div>
              <div>
                <span className="has_fade_anim text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] uppercase !font-getaway !leading-none font-normal text-white">
                  {sub_title}
                </span>
              </div>
              <div className="mt-5 xl:mt-[30px]">
                <h2 className="has_fade_anim text-[60px] sm:text-[70px] lg:text-[100px] xl:text-[120px] 2xl:text-[150px] !font-normal !font-getaway uppercase max-w-[900px] mx-auto text-white">
                  {title}
                </h2>
              </div>
            </div>
            {action_btn?.enable && (
              <div className="has_fade_anim flex justify-center mt-[35px] xl:mt-[45px]">
                <ButtonFlip
                  btnText={action_btn.label}
                  link={action_btn.link}
                  className="bg-primary text-white border-primary hover:bg-primary/90"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
