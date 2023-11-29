"use client";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/globalstyles";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const Providers = (props: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />

      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
export default Providers;
