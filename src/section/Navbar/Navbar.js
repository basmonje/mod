import Link from "next/link";
import styled from "styled-components";
import { Container, Flex } from "component";

export default function NavbarComponent() {
  return (
    <Navbar>
      <Container>
        <Nav>
          <Logo>
            <span>Pedro Venegas 🇨🇱</span>
            <p>Consejero Regional del Bíobío</p>
          </Logo>

          <Menu>
            <Flex as="ul" direction="row">
              <Li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </Li>
              <Li>
                <Link href="/noticias">
                  <a>Noticias</a>
                </Link>
              </Li>
              <Li>
                <Link href="/personal">
                  <a>Personal</a>
                </Link>
              </Li>
              <Li>
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
              </Li>
            </Flex>
          </Menu>
        </Nav>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: all 100ms ease-in-out 0s;
  z-index: 20;
  background: #f4f9f9;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0.6rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 200ms ease 0s;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    padding: 0.6rem 0;
  }
`;

const Li = styled.li`
  margin-left: 1rem;

  a {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Menu = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    display: block;
  }
`;
