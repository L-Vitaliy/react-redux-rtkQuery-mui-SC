import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

import components from "./components";
import themeConfig from "./theme";

export const AppThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  // const mode = useAppSelector((state) => state.user.mode);
  const theme = createTheme({
    palette: themeConfig.palette,
    typography: themeConfig.typography,
    breakpoints: themeConfig.breakpoints,
    components: {
      MuiLink: components.MuiLink,
      MuiInputLabel: components.MuiInputLabel,
      MuiInput: components.MuiInput,
      MuiTextField: components.MuiTextField,
      MuiButton: components.MuiButton,
      MuiFormHelperText: components.MuiFormHelperText,
      MuiSwitch: components.MuiSwitch,
      MuiTabs: components.MuiTabs,
      MuiTab: components.MuiTab,
      MuiOutlinedInput: components.MuiOutlinedInput,
      MuiSelect: components.MuiSelect,
      MuiMenu: components.MuiMenu,
      MuiMenuItem: components.MuiMenuItem,
      MuiPagination: components.MuiPagination,
      MuiPaginationItem: components.MuiPaginationItem,
      MuiTooltip: components.MuiTooltip,
      MuiFormControl: components.MuiFormControl,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
