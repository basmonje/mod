import React from "react";
import styled from "styled-components";
import { Container, Flex, Paragraph, Title } from "../../component";

export default function HeroComponent(props) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Flex>
            <Title size="big" level="1">
              Pedro Venegas
            </Title>
            <Paragraph>Consejero Regional del Biobio</Paragraph>
          </Flex>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  background: #a4ebf3;
`;

const Content = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;
