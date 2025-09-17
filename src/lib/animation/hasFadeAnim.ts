import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationSetting = {
  opacity: string | number;
  ease: string;
  duration: string | number;
  delay: string | number;
  y?: string | number;
  x?: string | number;
  scrollTrigger?: {
    trigger: Element | string;
    start: string;
  };
};

export default function hasFadeAnim() {
  const fadeArray = gsap.utils.toArray<Element>(".has_fade_anim");
  fadeArray.forEach((item) => {
    let fade_direction = "bottom";
    let onscroll_value = 1;
    let duration_value = 1.15;
    let fade_offset = 40;
    let delay_value = 0.15;
    let ease_value = "power2.out";

    if (item.getAttribute("data-fade-offset")) {
      fade_offset = parseFloat(item.getAttribute("data-fade-offset") ?? "40");
    }
    if (item.getAttribute("data-duration")) {
      duration_value = parseFloat(item.getAttribute("data-duration") ?? "1.15");
    }

    if (item.getAttribute("data-fade-from")) {
      fade_direction = item.getAttribute("data-fade-from") ?? "bottom";
    }
    if (item.getAttribute("data-on-scroll")) {
      onscroll_value = parseFloat(item.getAttribute("data-on-scroll") ?? "1");
    }
    if (item.getAttribute("data-delay")) {
      delay_value = parseFloat(item.getAttribute("data-delay") ?? "0.15");
    }
    if (item.getAttribute("data-ease")) {
      ease_value = item.getAttribute("data-ease") ?? "power2.out";
    }

    const animation_settings: AnimationSetting = {
      opacity: 0,
      ease: ease_value,
      duration: duration_value,
      delay: delay_value,
    };

    if (fade_direction == "top") {
      animation_settings["y"] = -fade_offset;
    }
    if (fade_direction == "left") {
      animation_settings["x"] = -fade_offset;
    }

    if (fade_direction == "bottom") {
      animation_settings["y"] = fade_offset;
    }

    if (fade_direction == "right") {
      animation_settings["x"] = fade_offset;
    }

    if (onscroll_value == 1) {
      animation_settings["scrollTrigger"] = {
        trigger: item,
        start: "top 85%",
      };
    }
    return gsap.from(item, animation_settings);
  });
}
