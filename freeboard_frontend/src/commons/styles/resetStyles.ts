import { css } from "@emotion/react";

export const resetStyles = css`
  * {
    margin: 0;
    box-sizing: border;
    font-size: 15px;
    font-family: "myfont";
    color: #c0c0c0;
  }

  body {
    background-color: #87cefa;
  }

  @font-face {
    font-family: "myfont";
    src: url("/font/scifibit.ttf");
  }
`;
