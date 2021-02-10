import React from "react";
import styled from "styled-components";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import {
  Container,
  Title,
  Paragraph,
  Flex,
  Box,
  Col,
  Card,
  BoxTitle,
} from "../../component";

export default function BlogHome({ data }) {
  return (
    <Wrapper>
      <Container>
        <Flex paTop="100px" paBot="100px">
          <Title size="medium" level="1">
            Noticias y Acciones
          </Title>
          <Paragraph>Nuestra Región en crecimiento</Paragraph>
        </Flex>
        <BoxTitle title="Últimas Noticias" href="/noticias" />
        <Box>
          {!data && <Loader>Cargando Noticias</Loader>}
          {data && size(data) === 0 && (
            <div>
              <h3>No hay noticias</h3>
            </div>
          )}
          {size(data) > 0 &&
            data.map(({ title, slug, description, date, read, img }) => (
              <Col key={slug} type="col">
                <Card
                  type="blog"
                  title={title}
                  read={read}
                  date={date}
                  description={description}
                  src={img}
                  slug={slug}
                />
              </Col>
            ))}
        </Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 100px;
`;
