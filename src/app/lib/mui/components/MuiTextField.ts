import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions, Mixins } from "@/app/styles";

export const MuiTextField: {
  defaultProps?: ComponentsProps["MuiTextField"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
  variants?: ComponentsVariants<Theme>["MuiTextField"];
} = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: Colors.WHITE,
      border: `1px solid ${Colors.DIVIDER}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      minHeight: "64px",
      padding: "0 18px",
      ":hover": {
        borderColor: Colors.GREY_MAIN,
      },
      ":focus-within": {
        borderColor: Colors.BLACK_MAIN,
      },
      "&.Mui-disabled": {
        borderColor: Colors.DIVIDER,
        pointerEvents: "none",
      },
      ...(ownerState.error && {
        borderColor: Colors.RED_MAIN,
        color: Colors.RED_MAIN,
        ".Mui-error": {
          color: Colors.RED_MAIN,
        },
      }),
      fieldset: {
        border: "none",
      },
      label: {
        fontSize: "0.875rem",
      },
      input: {
        paddingLeft: 0,
        paddingRight: 0,
        "&:-webkit-autofill": {
          WebkitBackgroundClip: "text",
          ...(ownerState.error && {
            WebkitTextFillColor: Colors.RED_MAIN,
          }),
        },
        "::-ms-reveal": {
          display: "none",
        },
      },
      ".MuiInputBase-multiline": {
        padding: "15px 0 10px !important",
        height: "initial !important",
        ".MuiInputBase-inputMultiline": {
          ...Mixins.scrollbarObject(),
        },
      },
      ".MuiOutlinedInput-root": {
        border: "none",
        padding: 0,
      },
    }),
  },
};
