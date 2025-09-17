import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function hasPinContent2(
  element: Element | string,
  area: Element | string,
  start?: string,
  dWidth: number = 991
) {
  const device_width = window.innerWidth;
  const startFrom = start || "top top";

  if (element && device_width > dWidth) {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: area,
        pin: element,
        start: startFrom,
        end: "bottom bottom",
        pinSpacing: false,
      },
    });
  }
}
