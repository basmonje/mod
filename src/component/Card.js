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

function CardSimple({ title, date, description, src, count }) {
  return (
    <Card as="article" background="#f6f6f6">
      <BoxNotice>
        <div>
          <img src={src} alt={title} />
        </div>
        <Box>
          <Date>
            {date} minutos de lectura {count}
          </Date>
          <Heading level={5}>{title}</Heading>
          <Description>{description}</Description>
        </Box>
      </BoxNotice>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  background: ${(props) => props.background || "#d44"};
  border: none;
  border-radius: 8px !important;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  h5,
  p,
  span {
    color: #333;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    padding: 2rem 2rem;
  }
`;

const BoxNotice = styled.div`
  display: flex;
  flex-direction: column;

  > div img {
    width: 100%;
  }
`;

const BoxResponsiveBlog = styled.div`
  display: flex;
  flex-direction: column;
  h2,
  p,
  span {
    color: #333 !important;
  }

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

const Box = styled.div`
  padding: 1rem;
`;
