import { css } from "@emotion/react";

export const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border;
        font-size: 16px;
        font-family: "myfont";
        /* color: #fff; */
    }

    body {
        /* min-height: 100vh; */
        background: linear-gradient(to bottom, #6400ff, #d8bfd8) fixed;
        background-repeat: no-repeat;

        /* background-color: #191970; */
        /* background-color: #483d8b; */
        /* background-color: #8a39e1; */
    }

    @font-face {
        font-family: "myfont";
        src: url("/font/Noto_Sans_KR") format("ttf");
    }
`;
