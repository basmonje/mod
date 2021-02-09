import React from "react";
import styled from "styled-components";

import { Heading, Paragraph, Date, Flex, Description } from "component";

export default function CardComponent({ type, ...props }) {
  if (!props.title) return null;
  if (type === "simple") return <CardSimple {...props} />;
  if (type === "blog") return <CardBlog {...props} />;
  return null;
}

function CardBlog({ read, title, date, description, src }) {
  return (
    <Card as="article" background="#f6f6f6">
      <BoxResponsiveBlog>
        <div className="context">
          <Heading>{title}</Heading>
          <Date>
            {date} {read}
          </Date>
          <Description>{description}</Description>
        </div>
        <div className="img">
          <img width="100%" src={src} alt={title} />
        </div>
      </BoxResponsiveBlog>
    </Card>
  );
}

function CardSimple({ title, date, description }) {
  return (
    <Card as="article">
      <Heading>{title}</Heading>
      <Date>{date}</Date>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}

const Card = styled.div`
  padding: 1rem;
  background: ${(props) => props.background || ""};
`;

const BoxResponsiveBlog = styled.div`
  display: flex;
  flex-direction: column;

  .context {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .img {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex-direction: row;

    .context {
      width: 60%;
      margin-bottom: 0;
    }

    .img {
      width: 40%;
    }
  }
`;
