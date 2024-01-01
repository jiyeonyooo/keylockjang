import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  :root {
    --main-blue: #5800FF;
    --main-yellow: #FFC600;
    --main-orange: #FD9F28;
  } 
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: "Pretendard";
    font-weight: 500;
  }
`;

export default GlobalStyles;