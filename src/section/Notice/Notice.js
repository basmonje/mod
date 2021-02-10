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

export default function Notice(props) {
  const { title, description, date, read, content, nav } = props;
  return (
    <Wrapper>
      <Container>
        <Flex direction="column">
          <Flex direction="column" align="flex-start" justify="flex-start">
            <Title size="small">{title}</Title>
            <Date>
              {date} ~ {read} de lectura.
            </Date>
            <Description>{description}</Description>
          </Flex>
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
  p {
    color: var(--color-text);
  }

  p {
    margin-bottom: 0.9rem !important;
  }
`;

const Markdown = styled.div`
  width: 100%;
`;
