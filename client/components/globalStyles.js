import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *, *:before, *:after {
  box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Press Start 2P", cursive;
    transition: all 0.50s linear;
  }

  .nav {
  background: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  text: "black"
}
`;
