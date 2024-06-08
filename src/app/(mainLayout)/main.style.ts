"use client";

import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 40px 20px;
`;

export const Main = styled.main`
  width: 100%;
  ${theme.maxWidth};
`;
