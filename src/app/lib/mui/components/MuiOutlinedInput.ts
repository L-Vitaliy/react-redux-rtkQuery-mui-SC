import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";

export const MuiOutlinedInput: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiOutlinedInput"];
} = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: Colors.WHITE,
      border: `1px solid ${Colors.DIVIDER}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      height: "64px",
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

        "&.MuiSelect-select": { padding: 0 },
        ".MuiSelect-select": { padding: 0 },
      },
      select: {
        padding: 0,
      },
    }),
  },
};
