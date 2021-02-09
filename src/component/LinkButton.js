import styled from "styled-components"

export default function LinkButton({ href, children, ...delegated }) {
  const tag = typeof href === "string" ? "a" : "button"
  return (
    <Wrapper as={tag} href={href} {...delegated}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  padding: 1rem 2rem;
`
