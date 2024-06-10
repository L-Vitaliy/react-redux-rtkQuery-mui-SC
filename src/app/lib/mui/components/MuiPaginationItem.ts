import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";

export const MuiPaginationItem: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiPaginationItem"];
} = {
  styleOverrides: {
    root: {
      fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
      fontSize: 24,
      lineHeight: "60px",
      width: 60,
      height: 60,
      gap: 10,
      borderRadius: 10,

      margin: "0 10px",

      "&.Mui-selected": {
        backgroundColor: Colors.BLACK_MAIN,
        color: Colors.WHITE,
      },

      "&:hover": {
        backgroundColor: Colors.DISABLED,
      },
    },
    page: {
      backgroundColor: Colors.SECTION_BACKGROUND,
    },
    ellipsis: {
      pointerEvents: "none",
      position: "relative",
      backgroundColor: Colors.SECTION_BACKGROUND,
    },
  },
};
