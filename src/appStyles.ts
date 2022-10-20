import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { styled, css, config } = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      small: "8px",
      medium: "16px",
      large: "32px",
      xLarge: "64px",
      xxLarge: "96px",
    },
    fontSizes: {
      small: "12px",
      medium: "14px",
      large: "16px",
    },
    fontWeights: {
      normal: "400",
      bold: "700",
    },
    borderWidths: {
      small: "1px",
    },
    sizes: {
      small: "24px",
      medium: "32px",
      large: "48px",
    },
    borderStyles: {
      normal: "solid",
    },
    radii: {
      normal: "8px",
      circle: "50%",
    },
    transitions: {
      normal: "0.25s ease-in",
    },
    zIndices: {
      slideNav: 10,
    },
  },
  utils: {},
});

export type CSS = Stitches.CSS<typeof config>;
