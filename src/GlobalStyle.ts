import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 10px;
        color: #555;
        font-family: 'Noto Sans KR', sans-serif;
        overflow-x: hidden;
    }
    a {
        color: #6485cc;
        text-decoration: underline;
    }

`;

export default GlobalStyle;
