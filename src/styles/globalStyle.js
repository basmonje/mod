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

body {
  background: var(--color-background) !important;
  color: var(--color-text);
  transition: all 180ms linear;
}
`;
