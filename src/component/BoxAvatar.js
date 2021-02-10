import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import Flex from "./Flex";

export default function BoxAvatar({ name, ...props }) {
  return (
    <Wrapper>
      <Flex direction="row">
        <Avatar {...props} /> <span>{name}</span>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
  span {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 1rem;
  }
`;
