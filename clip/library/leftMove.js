import { CSSEffect } from "@donkeyclip/motorcortex";
export const leftMove = (
  left,
  selector,
  duration,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
      ...(initialValues && { initialValues: { left: initialValues } }),
    },
    {
      selector,
      duration,
      easing,
    }
  );
