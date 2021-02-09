import React from "react"
import styled from "styled-components"

export default function BoxComponent({ children, ...props }) {
  return <Box {...props}>{children}</Box>
}

const Box = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "wrap"};
`
