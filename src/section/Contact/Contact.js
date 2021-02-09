import React from "react";
import styled from "styled-components";
import { Container, Flex, Box, Col, Form } from "../../component";

export default function Contact() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Col type="col-2">
            <Text />
          </Col>
          <Col type="col-2">
            <Form />
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
`;

function Text() {
  return (
    <Context>
      <h1>¿Tienes alguna duda y necesitas contactarme?</h1>
    </Context>
  );
}

const Context = styled.div`
  h1 {
    font-size: 3rem;
    color: var(--color-text);
  }
`;
