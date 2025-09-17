import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hasImageReveal = () => {
  const imageRevealArray = gsap.utils.toArray<Element>(".has_image_reveal");
  imageRevealArray.forEach((item) => {
    try {
      if (item) {
        const startValue = item.getAttribute("data-start") ?? "80%";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: `center ${startValue}`,
          },
        });

        tl.set(item, { autoAlpha: 1 });
        tl.from(item, {
          duration: 1.5,
          xPercent: -100,
          ease: "power2.out",
        });
      }
    } catch (error) {
      console.error("Error in hasImageReveal:", error);
    }
  });
};

export default hasImageReveal;
