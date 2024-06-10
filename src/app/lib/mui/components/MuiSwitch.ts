import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import Colors from "@/app/styles/colors";
import Transitions from "@/app/styles/transitions";

export const MuiSwitch: {
  defaultProps?: ComponentsProps["MuiSwitch"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiSwitch"];
  variants?: ComponentsVariants<Theme>["MuiSwitch"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: 50,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 1,
        transitionDuration: Transitions.MEDIUM,
        "&.Mui-checked": {
          transform: "translateX(24px)",
          color: Colors.WHITE,
          "& + .MuiSwitch-track": {
            backgroundColor: Colors.BLACK_MAIN,
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          border: `6px solid ${Colors.WHITE}`,
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: Colors.GREY_PALE,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.7,
        },
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "none",
        boxSizing: "border-box",
        width: 24,
        height: 24,
      },
      "& .MuiSwitch-track": {
        borderRadius: 13,
        backgroundColor: Colors.DIVIDER,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], { duration: Transitions.MEDIUM }),
      },
    }),
  },
};
