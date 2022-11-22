import { CSSEffect } from "@donkeyclip/motorcortex";
export const leftMove = (left,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
