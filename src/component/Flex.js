import React from "react";
import styled from "styled-components";

export default function FlexComponent({ children, as, ...props }) {
  const tag = as || "div";
  return (
    <Row as={tag} {...props}>
      {children}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"}};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  height: auto;
  padding-top: ${(props) => props.paTop || "0"};
  padding-bottom: ${(props) => props.paBot || "0"};
  width: ${(props) => props.width || "100%"};

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex-direction: ${(props) => props.mobile || "row"}};
  }
`;
