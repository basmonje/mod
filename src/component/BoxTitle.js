import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function BoxTitle({ title, count, href }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {count && <p>{count}</p>}
      {href && (
        <Link href={href}>
          <a>Todas las entradas</a>
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    color: var(--color-text);
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    padding-right: 0;
    font-size: 1rem;
    color: var(--color-text);
  }

  a {
    color: var(--color-text);
    padding-right: 0;
    font-size: 1rem;
  }

  a:hover {
    color: ${(props) => props.theme.color.primary};
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    padding: 1rem 3rem;

    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      padding-right: 32px;
    }

    a {
      padding-right: 32px;
    }
  }
`;
