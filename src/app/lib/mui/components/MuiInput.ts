import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";

export const MuiInput: {
  defaultProps?: ComponentsProps["MuiInput"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInput"];
  variants?: ComponentsVariants<Theme>["MuiInput"];
} = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      border: `1px solid ${Colors.DIVIDER}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      padding: "0 18px",
      fontSize: "1.125rem",
      height: "64px",
      color: Colors.BLACK_MAIN,

      ":hover": {
        borderColor: Colors.GREY_MAIN,
      },
      "&.Mui-focused": {
        borderColor: Colors.BLACK_MAIN,
      },
      "&.Mui-disabled": {
        borderColor: Colors.DIVIDER,
        pointerEvents: "none",
      },
      "::placeholder": {
        color: Colors.GREY_MAIN,
        opacity: 1,
      },
      "&.MuiInputBase-root": {
        marginTop: 0,
      },
      ".MuiSelect-select": { padding: 0 },
      ...(ownerState.error && {
        borderColor: Colors.RED_MAIN,
        color: Colors.RED_MAIN,
      }),
      "&:-webkit-autofill": {
        WebkitBackgroundClip: "text",
        ...(ownerState.error && {
          WebkitTextFillColor: Colors.DIVIDER,
        }),
      },
      "::-ms-reveal": {
        display: "none",
      },
    }),
  },
};
