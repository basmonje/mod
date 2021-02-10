import React from "react";
import styled from "styled-components";

export default function Heading({ children, level = 2 }) {
  const tag = `h${level}`;
  return <Wrapper as={tag}>{children}</Wrapper>;
}

const Wrapper = styled.h2`
  font-weight: 600;
  color: #333 !important;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-justify: inter-word;
  line-height: 29px;
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  a {
    color: #333 !important;
  }

  a:hover {
    color: ${(props) => props.theme.color.primary} !important;
  }

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 2.4rem;
  }
`;
