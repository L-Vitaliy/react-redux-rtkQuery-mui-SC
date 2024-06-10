import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";

export const MuiTooltip: {
  defaultProps?: ComponentsProps["MuiTooltip"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTooltip"];
  variants?: ComponentsVariants<Theme>["MuiTooltip"];
} = {
  styleOverrides: {
    tooltip: {
      backgroundColor: Colors.WHITE,
      color: Colors.BLACK_MAIN,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      border: `1px solid ${Colors.DIVIDER}`,
      padding: "10px",
      borderRadius: "10px",
      fontFamily: Fonts.GEOLOGICA_REGULAR,
    },
  },
};
