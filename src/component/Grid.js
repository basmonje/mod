import React from "react";
import styled from "styled-components";

export default function Grid({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => props.row || "auto"};
  grid-gap: ${(props) => props.gap || "1rem"};

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    grid-template-columns: repeat(${(props) => props.mobile || "2"}, 1fr);
    grid-template-rows: ${(props) => props.row || "auto"};
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    grid-template-columns: repeat(${(props) => props.tablet || "3"}, 1fr);
    grid-template-rows: ${(props) => props.row || "auto"};
  }
`;
