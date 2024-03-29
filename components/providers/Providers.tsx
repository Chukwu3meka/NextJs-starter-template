"use client";

import muiTheme from "utils/MuiTheme";
import HeaderContainer from "../layouts/header";
import stylesVariables from "styles/variables.module.scss";

import { ThemeProvider } from "@mui/system";
import { LinearProgress, Stack } from "@mui/material";
import { ProvidersProps } from "interfaces/components/providers.interface";

const Providers = ({ children, displayHeader, theme, initialized }: ProvidersProps) => (
  <ThemeProvider theme={muiTheme(theme)}>
    {initialized ? (
      <>
        {displayHeader ? <HeaderContainer position="sticky" /> : null}
        {children}
      </>
    ) : (
      <Stack sx={{ width: "100%", color: stylesVariables.primaryColor }}>
        <LinearProgress color="inherit" />
      </Stack>
    )}
  </ThemeProvider>
);

export default Providers;
