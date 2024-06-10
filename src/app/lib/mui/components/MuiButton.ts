import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";

export const MuiButton: {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants<Theme>["MuiButton"];
} = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      height: "64px",
      borderRadius: "16px",
      fontSize: "1.125rem",
      fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
      textTransform: "initial",
      ...(ownerState.variant === "contained" && {
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
        "&.Mui-focusVisible": {
          boxShadow: "none",
        },
      }),
      ...(ownerState.variant === "outlined" && {
        borderWidth: "2px",
        ...(ownerState.color === "error" && {
          borderColor: Colors.ERROR,
          color: Colors.ERROR,

          "&:hover": {
            borderColor: Colors.ERROR,
          },
        }),

        ":hover": {
          borderWidth: "2px",
        },
        "&.Mui-focusVisible": {
          borderWidth: "none",
        },
      }),
      ...(ownerState.size === "medium" && {
        height: 56,
      }),
      ...(ownerState.size === "small" && {
        height: 44,
        borderRadius: 10,
        whiteSpace: "nowrap",
        "> span": {
          transform: "translateY(1px)",
        },

        ".MuiButton-startIcon svg": {
          width: 24,
          height: 24,
        },
      }),
      "&.Mui-disabled": {
        backgroundColor: Colors.DISABLED,
        color: Colors.TEXT_DISABLED,
      },
      "& > .MuiButton-endIcon, & > .MuiButton-startIcon": {
        ":first-of-type": {
          fontSize: "2rem",
        },
      },
    }),
  },
};
