import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavPost({ data }) {
  const router = useRouter();
  return (
    <Wrapper>
      {data.prevPost ? (
        <NavItem
          slug={data.prevPost.slug}
          title={data.prevPost.title}
          direction="left"
          message="Noticia anterior"
          push={router.push}
        />
      ) : (
        <div />
      )}
      {data.nextPost ? (
        <NavItem
          slug={data.nextPost.slug}
          title={data.nextPost.title}
          direction="right"
          message="Siguiente Noticia"
          push={router.push}
        />
      ) : (
        <div />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  grid-gap: 1rem;
  padding-top: 100px;

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

const NavItem = ({ slug, title, message, direction, push }) => {
  const handleLink = () => push(`/noticia/${slug}`);
  return (
    <WrapperLink
      direction={direction === "right" ? "flex-end" : "flex-start"}
      onClick={handleLink}
    >
      <ArrowRow direction={direction === "right" ? "row-reverse" : "row"}>
        <Icon
          size="large"
          name={`arrow ${direction === "right" ? "right" : "left"}`}
        />
        <span>{message}</span>{" "}
      </ArrowRow>
      <Link href={"/noticia/[slug]"} as={`/noticia/${slug}`}>
        <a>{title}</a>
      </Link>
    </WrapperLink>
  );
};

const WrapperLink = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.direction || "flex-start"};
  background: #f6f6f6;
  border: none;
  border-radius: 8px;
  a {
    color: #333;
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ArrowRow = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};

  span {
    font-size: 1.32rem;
    font-weight: 600;
    margin: 0 1rem;
  }
`;
