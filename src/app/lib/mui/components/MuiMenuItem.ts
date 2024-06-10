import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";

export const MuiMenuItem: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenuItem"];
} = {
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${Colors.DIVIDER}`,
      transition: `all ${Transitions.MEDIUM}`,
      padding: "9.5px 0 9.5px 18px",

      "&:last-of-type": {
        borderBottom: "none",
      },

      "&:hover": {
        background: Colors.SECTION_BACKGROUND,
      },

      ".MuiTypography-root": {
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
    },
  },
};
