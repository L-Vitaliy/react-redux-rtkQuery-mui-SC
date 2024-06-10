import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiFormControl: {
  defaultProps?: ComponentsProps["MuiFormControl"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormControl"];
  variants?: ComponentsVariants<Theme>["MuiFormControl"];
} = {
  styleOverrides: {
    root: {
      position: "relative",
    },
  },
};
