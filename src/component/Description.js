import React from "react";
import styled from "styled-components";

export default function DescriptionComponent({ children, ...props }) {
  return <Description {...props}>{children}</Description>;
}

const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    font-size: 1.6rem;
  }
`;