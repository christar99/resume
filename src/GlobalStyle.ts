import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html, body {
        padding: 0;
        margin: 0;
        font-size: 10px;
        overflow: hidden;
    }
    a {
        color: #6485cc;
        text-decoration: underline;
    }

`;

export default GlobalStyle;
