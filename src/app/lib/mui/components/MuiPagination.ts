import type { ComponentsOverrides, Theme } from "@mui/material";

export const MuiPagination: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiPagination"];
} = {
  styleOverrides: {
    ul: {
      li: {
        "&:first-of-type": {
          svg: {
            transform: "rotate(180deg)",
          },
        },
      },
    },
  },
};
