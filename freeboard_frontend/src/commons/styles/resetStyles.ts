import { css } from "@emotion/react";

export const resetStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border;
    font-size: 15px;
    font-family: "myfont";
    /* color: #fff; */
  }

  body {
    background-color: #1c093b;
    /* background-color: #191970; */
    /* background-color: #483d8b; */
    /* background-color: #8a39e1; */
  }

  @font-face {
    font-family: "myfont";
    src: url("/font/Noto_Sans_KR") format("ttf");
  }
`;
