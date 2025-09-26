import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "@/lib/plugins";

gsap.registerPlugin(ScrollTrigger);

const hasTextMovAnim = () => {
  const textMoveArray = gsap.utils.toArray<Element>(".has_text_mov_anim");
  textMoveArray.forEach((item) => {
    try {
      if (item && SplitText) {
        const delayValue = item.getAttribute("data-delay") ?? 0.1;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(item, { type: "lines" });

        gsap.set(item, { perspective: 400 });

        tl.from(itemSplitted.words, {
          duration: 1,
          delay: delayValue,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      } else if (item && !SplitText) {
        // Fallback animation si SplitText n'est pas disponible
        gsap.from(item, {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      }
    } catch (error) {
      console.error("Error in hasTextMovAnim:", error);
      // Fallback animation en cas d'erreur
      if (item) {
        gsap.from(item, {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      }
    }
  });
};

export default hasTextMovAnim;
