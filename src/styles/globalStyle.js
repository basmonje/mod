import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
}

a {
  text-decoration: none;
}


ul,
li {
  list-style: none;
}

/* body {
  background: var(--color-background) !important;
  transition: all 0.50s linear;
} */
`;
