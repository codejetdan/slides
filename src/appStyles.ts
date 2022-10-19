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
      small: "4px",
      medium: "8px",
      large: "16px",
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
      1: "1px",
    },
  },
  utils: {},
});

export type CSS = Stitches.CSS<typeof config>;
