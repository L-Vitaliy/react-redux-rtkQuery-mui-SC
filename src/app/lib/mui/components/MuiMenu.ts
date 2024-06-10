import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Mixins } from "@/app/styles";

export const MuiMenu: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenu"];
} = {
  styleOverrides: {
    paper: {
      border: `1px solid ${Colors.DIVIDER}`,
      borderRadius: 15,
      boxShadow: `0px 0px 10px 0px ${Colors.GREY_MIDDLE}40`,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundColor: Colors.WHITE,
      transform: "translateY(10px) !important",
      maxHeight: "320px !important",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100% !important",
      overflowY: "scroll",
      overflowX: "hidden",

      ...Mixins.scrollbarObject(),
    },
  },
};
