import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Flex,
  Title,
  Description,
  Date,
  NavPost,
} from "../../component";
import BoxAvatar from "../../component/BoxAvatar";

export default function Notice(props) {
  const { title, img, date, read, content, nav } = props;
  return (
    <Wrapper>
      <Container>
        <Flex direction="column" mobile="column">
          <Flex
            direction="column"
            align="center"
            justify="center"
            mobile="column"
          >
            <Title size="small">{title}</Title>
            <Flex
              direction="column"
              mobile="row"
              justify="flex-start"
              align="center"
            >
              <BoxAvatar src="/assets/img/perfil.jpg" name="Pedro venegas" />
              <span>
                {date} ~ {read} de lectura.
              </span>
            </Flex>
          </Flex>

          {img.url ? (
            <ContentImage>
              <img src={img.url} alt={title} />
            </ContentImage>
          ) : (
            <div />
          )}

          <Markdown>
            <ReactMarkdown children={content} />
            <NavPost data={nav} />
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
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  li,
  p {
    color: var(--color-text);
    text-align: justify;
    text-justify: inter-word;
  }

  h2 {
    margin-bottom: 2.8rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem !important;
  }
`;

const Markdown = styled.div`
  width: 100%;

  ul {
    padding-left: 1rem;
    margin-bottom: 1rem;

    @media (min-width: ${(props) => props.theme.dimension.tablet}) {
      padding-left: 2.6rem;
    }
  }

  li {
    list-style: disc;
    font-size: 1.1rem;
    line-height: 25px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 2.6rem;
    margin-top: 0.5rem;
  }
`;

const ContentImage = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  img {
    width: 100%;
    border: none;
    border-radius: 8px !important;
    background-size: cover;
  }
`;
