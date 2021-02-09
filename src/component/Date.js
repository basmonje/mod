import React from "react";
import styled from "styled-components";

export default function DateComponent({ children }) {
  return <Date>{children}</Date>;
}

const Date = styled.span`
  color: var(--color-text);
  font-weight: 300;
  margin: 6px 0;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
