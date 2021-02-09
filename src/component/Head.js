import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Container from "./Container";
import Flex from "./Flex";

export default function Head({ title }) {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Title size="big">{title}</Title>
        </Flex>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;
