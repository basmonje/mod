import React from "react";
import styled from "styled-components";
import { Container, Box, Col, Card, BoxTitle } from "../../component";

export default function BlogHome() {
  return (
    <Wrapper>
      <Container>
        <BoxTitle title="Todas las entradas" count="3 Noticias" />
        <Box>
          <Col type="col-2">
            <Card
              type="simple"
              title="Primer title"
              date="2020 / 05 / 04"
              read="Tiempo de lectura 2 min"
              description="Mi primer description"
              src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
          <Col type="col-2">
            <Card
              type="simple"
              title="Primer title"
              date="2020 / 05 / 04"
              read="Tiempo de lectura 2 min"
              description="Mi primer description"
              src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
          <Col type="col-2">
            <Card
              type="simple"
              title="Primer title"
              date="2020 / 05 / 04"
              read="Tiempo de lectura 2 min"
              description="Mi primer description esto no puede ser cierto cuanta mantequilla estas hechando dios mio"
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
  padding-top: 100px;
  padding-bottom: 100px;
`;
