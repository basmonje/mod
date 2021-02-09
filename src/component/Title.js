import React from "react";
import styled from "styled-components";

export default function TitleComponent({ children, level = 2, size }) {
  const tag = `h${level}`;

  if (size === "big") return <Title as={tag}>{children}</Title>;
  if (size === "medium") return <TitleMedium as={tag}>{children}</TitleMedium>;
  return null;
}

const Title = styled.h2`
  font-weight: 600;
  color: var(--color-text);
  font-size: 2.3rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 3.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 4.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    font-size: 5.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.desktop}) {
    font-size: 6.2rem;
  }
`;

const TitleMedium = styled.h2`
  font-weight: 600;
  color: var(--color-text);
  font-size: 2.5rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 3.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 4.4rem;
  }
`;
