import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fdf2f8;
  }

  body, input, button, a {
    border: 0;
    outline: 0;
    text-decoration: none;
  }
`