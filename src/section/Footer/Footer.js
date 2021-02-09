import styled from "styled-components";
import { Container, Col, Box, Form, Flex } from "../../component";

export default function FooterComponent({ contact = true }) {
  return (
    <Footer>
      <Container>
        {contact && <Contact />}
        <Flex paTop="100px">
          <span style={{ color: "var(--color-text)" }}>
            Copyright © {new Date().getFullYear()} | Pedro Venegas Todos los
            derechos reservados
          </span>
        </Flex>
      </Container>
    </Footer>
  );
}

function Contact() {
  return (
    <Box>
      <Col type="col-2">
        <Text
          title="Pedro Venegas"
          description="Actual Consejero Regional del Bíobío (Índependiente), Profesional
              en Seguridad Pública, Diplomado en Seguridad Privada y Ciudadana,
              Ex Concejal y Dirigente Vecinal de San Pedro de la Paz."
        />
        <Text
          title="Correo Electrónico"
          description="pedrovenegas.core@gmail.com"
        />
      </Col>
      <Col type="col-2">
        <Form />
      </Col>
    </Box>
  );
}

function Text({ title, description }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
}

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding-top: 100px;
  padding-bottom: 100px;

  label {
    color: var(--color-text) !important;
  }

  .error {
    label {
      color: #ec4646 !important;
    }
  }
`;

const Card = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  p {
    line-height: 30px;
    text-align: justify;
    text-justify: inter-word;
    padding-right: 2rem;
    margin-bottom: 30px !important;
    color: var(--color-text);
  }
`;
