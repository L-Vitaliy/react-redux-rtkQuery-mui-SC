import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Mixins } from "@/app/styles";

export const MuiFormHelperText: {
  defaultProps?: ComponentsProps["MuiFormHelperText"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormHelperText"];
  variants?: ComponentsVariants<Theme>["MuiFormHelperText"];
} = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",

      "&.Mui-error": {
        position: "absolute",
        bottom: "-22px",
        ...Mixins.textRowsEllipsisObject(1, "22px"),
      },
    },
  },
};
