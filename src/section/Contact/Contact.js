import React from "react";
import styled from "styled-components";
import { Container, Flex, Box, Col, Form, Context } from "../../component";

export default function Contact({ base }) {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Col type="col">
            <h1>¿Tienes alguna duda y necesitas contactarme?</h1>
            <Form base={base} />
          </Col>
          <Col type="col">
            <Text />
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

  display: flex;
  align-items: center;

  label {
    color: var(--color-text) !important;
  }

  .error {
    label {
      color: #ec4646 !important;
    }
  }

  h1 {
    font-size: 3rem;
    color: var(--color-text);
  }
`;

function Text() {
  return (
    <ContextComponent>
      <Context
        title="Correo Electrónico"
        href="mailto:pedrovenegas.core@gmail.com"
        description="pedrovenegas.core@gmail.com"
      />
      <Context
        title="Telefono"
        href="tel:56918945678"
        description="+(56) 9 1894897"
      />
    </ContextComponent>
  );
}

const ContextComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 100px;
  transition: all 300ms ease;
  p {
    color: var(--color-text);
  }

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
