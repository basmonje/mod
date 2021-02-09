import styled from "styled-components";

export default function LinkButton({ href, children, ...delegated }) {
  const tag = typeof href === "string" ? "a" : "p";
  return (
    <Wrapper as={tag} href={href} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  width: 100%;
`;
