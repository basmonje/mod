import React from "react";
import styled from "styled-components";
import { Container, Flex, Title, Description, Date } from "../../component";

export default function Notice() {
  return (
    <Wrapper>
      <Container>
        <Flex direction="column">
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Title size="small">Primer contenido</Title>
            <Date>2020 / 15 /15 ~ 5 min de lectura.</Date>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium tempore dolor a veritatis corrupti.
              Molestias!
            </Description>
          </Flex>
          <Markdown>
            <h1>Primer contenido</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, molestias.
            </p>
          </Markdown>
        </Flex>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;

  h1,
  p {
    color: var(--color-text);
  }

  p {
    margin-bottom: 0.9rem !important;
  }
`;

const Markdown = styled.div`
  width: 100%;
`;
