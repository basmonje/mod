import React from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  Paragraph,
  Flex,
  Box,
  Col,
  Card,
} from "../../component";

export default function BlogHome() {
  return (
    <Wrapper>
      <Container>
        <Flex paTop="100px" paBot="100px">
          <Title size="medium" level="1">
            Noticias y Acciones
          </Title>
          <Paragraph>Nuestra Región en crecimiento</Paragraph>
        </Flex>
        <Box>
          <Col type="col">
            <Card
              type="blog"
              title="Primer title"
              date="2020 / 05 / 04"
              read="Tiempo de lectura 2 min"
              description="Mi primer description"
              src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
          <Col type="col">
            <Card
              type="blog"
              title="Primer title"
              date="2020 / 05 / 04"
              read="Tiempo de lectura 2 min"
              description="Mi primer description"
              src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
        </Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 100px;
`;
