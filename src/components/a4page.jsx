import React from "react";
import styled from "styled-components";

const StyledA4Page = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  padding: 1cm;

  width: 21cm;
  height: 29.7cm;
`;

export const A4Page = ({ children }) => <StyledA4Page>{children}</StyledA4Page>;
