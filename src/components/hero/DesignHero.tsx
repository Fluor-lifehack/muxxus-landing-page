"use client";

import ImageComponent from "@/components/tools/ImageComponent";
import { ActionBtnType } from "@/types";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";
import GetStartedModal from "@/components/modals/GetStartedModal";

type Props = {
  title: string;
  description: string;
  bg_video: string;
  action_btn: ActionBtnType;
};

const DesignHero = ({
  title,
  description,
  bg_video,
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

  // Slider state
  const images = [
    "/assets/imgs/muxxus/hero/img1.png",
    "/assets/imgs/muxxus/hero/img2.png",
    "/assets/imgs/muxxus/hero/img3.png"
  ];
  const [current, setCurrent] = useState(0);
  const SLIDE_DURATION = 4500; // ms
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [images.length]);

  const [email, setEmail] = useState("");
  const [acceptNewsletter, setAcceptNewsletter] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptNewsletter || !email.trim()) return;
    // Ouvrir le modal avec l'email saisi
    setIsModalOpen(true);
  };

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
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto">
        {/* Texte à gauche */}
        <div className="flex-1 flex flex-col items-start justify-center text-left py-16">
          <h1
            className="has_char_anim text-white text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight mb-6 max-w-3xl"
            data-translatex="150"
            data-delay=".45"
          >
            {title}
          </h1>
          <p
            className="has_word_anim text-white font-beatricetrial text-base sm:text-lg md:text-lg max-w-md mb-8"
            data-duration="1"
            data-translatex="50"
            data-delay=".30"
          >
            {description}
          </p>
          {/* Champ email + bouton Get started */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-2 mt-2 items-start"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                checked={acceptNewsletter}
                onChange={e => setAcceptNewsletter(e.target.checked)}
                required
                className="accent-black w-4 h-4 mr-2"
              />
              <label htmlFor="newsletter" className="text-xs text-white select-none cursor-pointer">
                I agree to receive the newsletter
              </label>
            </div>
            <div className="w-full flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition shadow"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition whitespace-nowrap"
              >
                Get started
              </button>
            </div>
          </form>
        </div>
        {/* Slider d'images à droite */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-auto mt-12 lg:mt-0">
          <div className="relative w-[750px] h-[750px] flex items-center justify-center overflow-hidden">
            {images.map((img, idx) => (
              <div
                key={img + idx}
                className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl transition-all duration-700 w-[600px] h-[600px] flex items-start justify-center overflow-hidden ${
                  idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'
                }`}
              >
                <ImageComponent
                  src={img}
                  alt={`slide-${idx}`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

            ))}
            
            {/* Progress bar - Dots avec point actif étiré (permanente) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
              <div className="flex items-center justify-center gap-2">
                {images.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`rounded-full transition-all duration-300 ${
                      dotIdx === current 
                        ? 'bg-white w-4 h-1.5 scale-110' // Point actif étiré et plus grand
                        : 'bg-white/40 w-1.5 h-1.5 scale-100' // Points inactifs normaux
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Modal Get Started */}
      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialEmail={email}
      />
    </section>
  );
};

export default DesignHero;
