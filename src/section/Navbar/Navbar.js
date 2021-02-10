import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Flex } from "component";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";

export default function NavbarComponent() {
  const { asPath } = useRouter();

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
              <Li active={asPath === "/" ? true : false}>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </Li>
              <Li active={asPath === "/noticias" ? true : false}>
                <Link href="/noticias">
                  <a>Noticias</a>
                </Link>
              </Li>
              <Li active={asPath === "/personal" ? true : false}>
                <Link href="/personal">
                  <a>Personal</a>
                </Link>
              </Li>
              <Li active={asPath === "/contacto" ? true : false}>
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
              </Li>
            </Flex>
          </Menu>
          <Btn>
            <Icon name="bars" />
          </Btn>
        </Nav>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.header`
  width: 100%;
  height: 54px;
  position: sticky;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: all 100ms ease-in-out 0s;
  z-index: 20;
  background: #f4f9f9;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.12);
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0.6rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 200ms ease 0s;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    padding: 0;
  }
`;

const Li = styled.li`
  margin-left: 1rem;

  a {
    color: #333;
    transition: ${(props) => (props.active ? "all 0.2s ease-out" : "")};
    border-bottom: ${(props) => (props.active ? "4px solid #333" : "")};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.1rem 1.4rem;
    height: 100%;
    font-size: 1.2rem;

    &:hover {
      border-bottom: 4px solid #333;
      transition: all 0.2s ease-out;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  span {
    font-weight: 600 !important;
    font-size: 1.2rem;
  }
`;

const Menu = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    display: flex;
    align-items: center;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    display: none;
  }
`;
