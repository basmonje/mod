import React from "react";
import styled from "styled-components";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import { Container, Box, Col, Card, BoxTitle, Grid } from "../../component";

export default function BlogHome({ data }) {
  let countData;
  if (data.length > 1) {
    countData = `${size(data)} Noticias`;
  } else {
    countData = `${size(data)} Noticia`;
  }

  return (
    <Wrapper>
      <Container>
        <BoxTitle title="Todas las entradas" count={countData} />
        {!data && <Loader>Cargando Noticias</Loader>}
        {data && size(data) === 0 && (
          <div>
            <h3>No hay noticias</h3>
          </div>
        )}
        <Grid mobile="2" tablet="2" gap="2rem">
          {size(data) > 0 &&
            data.map(({ title, description, dates, count, media, slug }) => (
              <Col type="col" key={slug}>
                <Card
                  type="simple"
                  title={title}
                  date={dates}
                  read={count}
                  description={description}
                  src={media[0]}
                  slug={slug}
                />
              </Col>
            ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`;
