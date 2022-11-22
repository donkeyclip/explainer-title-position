import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (opacity,selector, duration, delay=0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
