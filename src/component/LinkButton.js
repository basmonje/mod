import styled from "styled-components";

export default function LinkButton({ href, children, ...delegated }) {
  const tag = typeof href === "string" ? "a" : "button";
  return (
    <Wrapper as={tag} href={href} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  padding: 1rem 1rem;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 8px;

  &:hover {
    background: #ddd8;
    outline: none;
    cursor: pointer;
  }

  &:active {
    outline: none;
    background: #ddd5;
  }
`;
