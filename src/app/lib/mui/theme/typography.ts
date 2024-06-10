import type { Palette } from "@mui/material";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

import Fonts from "@/app/styles/fonts";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: Fonts.GEOLOGICA_REGULAR,

  h1: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "2rem",
  },
  h2: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.75rem",
  },
  h3: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.5rem",
  },
  h4: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.25rem",
  },
  h5: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.125rem",
  },

  h6: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1rem",
  },

  body1: {
    fontSize: "1.25rem",
  },
  body2: {
    fontSize: "1.125rem",
  },

  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: 1.4,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.4,
  },
};
