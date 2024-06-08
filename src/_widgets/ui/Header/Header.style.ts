"use client";

import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.ivory100};

  display: flex;
  justify-content: center;

  padding: 0 20px;
`;

export const Container = styled.div`
  width: 100%;
  ${theme.maxWidth};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
