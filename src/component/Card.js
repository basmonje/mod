import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Heading, Date, Description } from "component";

export default function CardComponent({ type, ...props }) {
  if (!props.title) return null;
  if (type === "simple") return <CardSimple {...props} />;
  if (type === "blog") return <CardBlog {...props} />;
  return null;
}

function CardBlog({ read, title, date, description, media, slug }) {
  return (
    <Card as="article" background="#f6f6f6">
      <BoxResponsiveBlog>
        <div className="context">
          <Heading>
            <Link href={"/noticia/[slug]"} as={`/noticia/${slug}`}>
              <a>{title}</a>
            </Link>
          </Heading>
          <Date>
            <b>{date}</b> ~ <b>{read}</b> de lectura.
          </Date>
          <Description>{description}</Description>
        </div>
        {media.url ? <img src={media.url} alt={title} /> : <div />}
      </BoxResponsiveBlog>
    </Card>
  );
}

function CardSimple({ title, date, description, src, read, slug }) {
  return (
    <Card as="article" background="#f6f6f6">
      <BoxNotice>
        <div>{src ? <img src={src.url} alt={title} /> : <div />}</div>
        <Box>
          <Date>
            <b>{date}</b> ~ <b>{read}</b> de lectura.
          </Date>
          <Heading level={5}>
            <Link href={"/noticia/[slug]"} as={`/noticia/${slug}`}>
              <a>{title}</a>
            </Link>
          </Heading>
          <Description>{description}</Description>
        </Box>
      </BoxNotice>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.background || "#d44"};
  border: none;
  border-radius: 8px !important;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  h5,
  p,
  span {
    color: #333;
  }
`;

const BoxNotice = styled.div`
  display: flex;
  flex-direction: column;

  > div img {
    width: 100%;
    height: 100%;
    min-height: 350px;
    background-size: cover;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`;

const BoxResponsiveBlog = styled.div`
  display: flex;
  flex-direction: column-reverse;
  h2,
  p,
  span {
    color: #333 !important;
  }

  .context {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex-direction: row;

    .context {
      width: 100%;
      height: 100%;
      margin-bottom: 0;
    }

    img {
      object-fit: cover;
      max-width: 320px;
      max-height: 350px;
      border-radius: 0 8px 8px 0;
    }
  }
`;

const Box = styled.div`
  padding: 2rem;
`;
