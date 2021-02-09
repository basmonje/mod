import React from "react";
import styled from "styled-components";

export default function Heading({ children, level = 2 }) {
  const tag = `h${level}`;

  return <Wrapper as={tag}>{children}</Wrapper>;
}

const Wrapper = styled.h2`
  font-weight: 600;
  color: var(--color-text);
  font-size: 2.5rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 2.9rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 3.2rem;
  }
`;
