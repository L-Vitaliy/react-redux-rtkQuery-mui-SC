import { createGlobalStyle } from "styled-components";

import Fonts, { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  html,
  body {
    height: 100%;
    margin-right: calc(-1 * (100vw - 100%));
  }

  body {
    overflow-x: hidden !important;
    padding: 0 !important;
  }

  input, button {
    font-family: ${Fonts.GEOLOGICA_REGULAR};
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
  }
  #root {
    flex: 1 1 auto;
  }



  /* clears the ‘X’ input search */
  input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  /* end clears the ‘X’ */

`;
