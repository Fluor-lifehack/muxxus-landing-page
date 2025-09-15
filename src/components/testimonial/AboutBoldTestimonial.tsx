"use client";

import AboutBoldTestimonialCard from "@/components/testimonial/AboutBoldTestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type Props = {
  testimonials: {
    quote: string;
    icon: string;
    author: string;
    designation: string;
    avatar: string;
  }[];
};

const AboutBoldTestimonial = ({ testimonials }: Props) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Debug: Log des données reçues
  console.log('AboutBoldTestimonial testimonials:', testimonials);
  console.log('Testimonials length:', testimonials?.length);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div>
      <div className="inner-container">
        <div className="section-spacing-top">
          <div>
            <div className="max-w-[730px] mx-auto 2xl:max-w-[910px]">
              {testimonials && testimonials.length > 0 ? (
                <>
                  <Carousel
                    setApi={setApi}
                    opts={{
                      align: "center",
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                        <CarouselItem
                          key={index}
                          className="flex flex-col items-center text-center"
                        >
                          <AboutBoldTestimonialCard {...testimonial} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          current === index
                            ? "w-[30px] bg-background-2"
                            : "bg-[#e7e7e7]"
                        }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-text mb-2">Aucun témoignage disponible</h3>
                  <p className="text-text-3">Les témoignages clients seront affichés ici</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoldTestimonial;
