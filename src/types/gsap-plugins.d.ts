declare module "@/lib/gsap-plugins/SplitText.min.js" {
  const SplitText: {
    new (element: Element, options?: { type?: string }): {
      chars: Element[];
      words: Element[];
    };
  };
  export default SplitText;
}
declare module "@/lib/gsap-plugins/ScrollSmoother.min.js" {
  const ScrollSmoother: {
    create(options: { smooth?: number; effects?: boolean }): void;
  };
  export default ScrollSmoother;
}

