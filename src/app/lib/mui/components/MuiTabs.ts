import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";

export const MuiTabs: {
  defaultProps?: ComponentsProps["MuiTabs"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTabs"];
  variants?: ComponentsVariants<Theme>["MuiTabs"];
} = {
  styleOverrides: {
    root: {
      backgroundColor: Colors.SECTION_BACKGROUND,
      borderRadius: "13px",
      padding: "2px",
      transition: `all ${Transitions.MEDIUM}`,
    },
    scroller: {
      transition: `all ${Transitions.MEDIUM}`,
    },
    flexContainer: {
      transition: `all ${Transitions.MEDIUM}`,
    },
    indicator: {
      display: "none",
    },
  },
};
