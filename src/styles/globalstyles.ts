import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
