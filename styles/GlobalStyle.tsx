import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
    color: ${palette.black};
  }

  body {
    font-family: Airbnb Cereal, sans-serif;
    line-height: 1.2;
  }  
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;