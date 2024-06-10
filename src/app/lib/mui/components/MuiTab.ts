import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions, Fonts } from "@/app/styles";

export const MuiTab: {
  defaultProps?: ComponentsProps["MuiTab"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTab"];
  variants?: ComponentsVariants<Theme>["MuiTab"];
} = {
  styleOverrides: {
    root: {
      fontFamily: Fonts.GEOLOGICA_MEDIUM,
      fontSize: "1.125rem",
      textTransform: "initial",
      lineHeight: 1.25,
      color: Colors.BLACK_MAIN,
      borderRadius: "13px",
      position: "relative",
      zIndex: 2,
      minHeight: 60,
      transition: `all ${Transitions.MEDIUM}`,
      "&:hover": {
        backgroundColor: Colors.GREY_PALE2,
      },
      "&:not(:first-of-type)": {
        "&::before": {
          content: "\x22\x22",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          height: "50%",
          width: "1px",
          borderRadius: "1px",
          backgroundColor: Colors.GREY_PALE2,
          transition: `all ${Transitions.MEDIUM}`,
        },
        "&.Mui-selected::before": {
          backgroundColor: Colors.BLACK_MAIN,
        },
      },
      "&.Mui-selected": {
        color: Colors.WHITE,
        borderBottom: "none",
        height: "calc(100% - 4px)",
        backgroundColor: Colors.BLACK_MAIN,
        borderRadius: "13px",
        transition: `all ${Transitions.MEDIUM}`,

        "&:hover": {
          backgroundColor: `${Colors.BLACK_MAIN}100`,
        },
      },
      "> span": {
        transition: `all ${Transitions.MEDIUM}`,
      },
    },
  },
};
