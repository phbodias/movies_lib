import { createGlobalStyle } from "styled-components";

import background from "../src/images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        max-width: 100vw;
    }

    body{
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        color: #fff;
        cursor: zoom-in;
    }
`;
