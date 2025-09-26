"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import EmailInput from "@/components/elements/input/EmailInput";

const MuxxusNewsletter = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  // Fonction pour gérer la soumission de la newsletter
  const handleNewsletterSubmit = async (email: string) => {
    try {
      // Ici vous pouvez ajouter votre logique d'API réelle
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Simulation d'une API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription successful for:', email);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      throw error;
    }
  };

  return (
    <section className="bg-white" ref={containerRef}>
      <div className="container2">
        <div className="py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-gray-900 text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 has_text_mov_anim">
              Stay updated with Muxxus
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl mb-12 max-w-2xl mx-auto has_fade_anim">
              Get the latest financial insights, product updates, and industry news delivered to your inbox. 
              Join thousands of businesses using Muxxus for their global financial needs.
            </p>
            
            <div className="max-w-md mx-auto has_fade_anim">
              <EmailInput 
                className="bg-white border border-gray-300 hover:border-gray-400 focus-within:border-blue-500 shadow-sm"
                iconClassName="text-gray-600"
                onSubmit={handleNewsletterSubmit}
              />
            </div>
            
            <p className="text-gray-500 text-sm mt-6 has_fade_anim">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuxxusNewsletter;
