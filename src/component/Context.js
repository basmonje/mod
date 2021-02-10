import React from "react";
import styled from "styled-components";
import LinkText from "./LinkText";

export default function Context({ title, description, href }) {
  return (
    <Card>
      <h3>{title}</h3>
      <LinkText href={href}>{description}</LinkText>
    </Card>
  );
}

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
