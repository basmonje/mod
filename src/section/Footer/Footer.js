import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { animateScroll } from "react-scroll";
import {
  Container,
  Col,
  Box,
  Form,
  Flex,
  LinkText,
  Title,
  LinkButton,
} from "../../component";

export default function FooterComponent({ contact = true, base }) {
  const handleScrollTop = () => animateScroll.scrollToTop();
  return (
    <Footer>
      <Container>
        {contact && <Contact base={base} />}
        <Flex paTop="100px" justify="space-between" direction="row">
          <span style={{ color: "var(--color-text)" }}>
            Copyright © {new Date().getFullYear()} | Pedro Venegas Todos los
            derechos reservados
          </span>
          <LinkButton onClick={handleScrollTop}>
            <Icon name="arrow up" style={{ color: "var(--color-text)" }} />
          </LinkButton>
        </Flex>
      </Container>
    </Footer>
  );
}

function Contact({ base }) {
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
          href="mailto:pedrovenegas.core@gmail.com"
          description="pedrovenegas.core@gmail.com"
        />
        <Text
          title="Telefono"
          href="tel:56918945678"
          description="+(56) 9 1894897"
        />
      </Col>
      <Col type="col-2">
        <Title size="small">Contáctame</Title>
        <Form base={base} />
      </Col>
    </Box>
  );
}

function Text({ title, description, href }) {
  return (
    <Card>
      <h3>{title}</h3>
      <LinkText href={href}>{description}</LinkText>
    </Card>
  );
}

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding-top: 100px;
  padding-bottom: 20px;

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
  margin-bottom: 1rem;
  a {
    line-height: 30px;
    color: var(--color-text);
  }

  a:hover {
    color: ${(props) => props.theme.color.primary};
  }
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
