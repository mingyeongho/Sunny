import { css } from "@emotion/react";
import { reset } from "./reset";

export const GlobalStyle = css`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
