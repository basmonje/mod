import React from "react";
import styled from "styled-components";

export default function ColComponent({ children, type, ...props }) {
  if (type === "col") return <Col {...props}>{children}</Col>;
  if (type === "col-2") return <Col2 {...props}>{children}</Col2>;
  if (type === "col-3") return <Col3 {...props}>{children}</Col3>;
  return null;
}

const Col = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
`;

const Col2 = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Col3 = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 1.2rem;

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
