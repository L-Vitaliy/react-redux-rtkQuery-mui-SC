import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiInputLabel: {
  defaultProps?: ComponentsProps["MuiInputLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInputLabel"];
  variants?: ComponentsVariants<Theme>["MuiInputLabel"];
} = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: {
      top: "-24px",
      cursor: "pointer",
      transform: "none",
    },
  },
};
