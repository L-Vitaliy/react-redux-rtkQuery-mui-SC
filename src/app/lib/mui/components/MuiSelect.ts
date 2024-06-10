import type { ComponentsOverrides, Theme } from "@mui/material";

import { Transitions } from "@/app/styles";

export const MuiSelect: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiSelect"];
} = {
  styleOverrides: {
    icon: {
      right: 10,
      transition: `all ${Transitions.MEDIUM}`,
    },
    select: { padding: 0 },
  },
};
