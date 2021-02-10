import React from "react";
import styled from "styled-components";

export default function TitleComponent({ children, level = 2, size }) {
  const tag = `h${level}`;

  if (size === "big") return <Title as={tag}>{children}</Title>;
  if (size === "medium") return <TitleMedium as={tag}>{children}</TitleMedium>;
  if (size === "small") return <TitleSmall as={tag}>{children}</TitleSmall>;
  return null;
}

const Title = styled.h2`
  font-weight: 600;
  color: var(--color-text);
  font-size: 3.4rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 3.6rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 4.6rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    font-size: 5.6rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.desktop}) {
    font-size: 6.4rem;
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

const TitleSmall = styled.h2`
  font-weight: 600;
  color: var(--color-text);
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 2.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 3.4rem;
  }
`;
