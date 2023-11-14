"use client";

import GlobalStyle from "@/styles/globalstyles";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { Open_Sans, Oswald } from "next/font/google";

const open = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <style jsx global>
        {`
          :root {
            --open: ${open.style.fontFamily};
            --oswald: ${oswald.style.fontFamily};
          }
        `}
      </style>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
