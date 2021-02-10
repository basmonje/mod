import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Link from "next/link";
import { Icon } from "semantic-ui-react";

export default function ModalMenu({ setShow }) {
  const onClose = () => setShow(false);
  return (
    <Menu>
      <Content>
        <Flex align="flex-end" paBot="100px">
          <Icon name="close" onClick={onClose} size="big" />
        </Flex>
        <Flex as="ul">
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/noticias">
              <a>Noticias</a>
            </Link>
          </li>
          <li>
            <Link href="/personal">
              <a>Personal</a>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <a>Contacto</a>
            </Link>
          </li>
        </Flex>
        <Flex align="flex-start" direction="row" paTop="50px">
          <a href="#">
            <Icon name="facebook" onClick={onClose} size="huge" />
          </a>
          <a href="#">
            <Icon name="linkedin" onClick={onClose} size="huge" />
          </a>
          <a href="#">
            <Icon name="twitter" onClick={onClose} size="huge" />
          </a>
        </Flex>
      </Content>
    </Menu>
  );
}

const Menu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;

  display: flex;
  align-items: flex-start;
  background: var(--color-background);

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem;

  i {
    color: var(--color-text);
  }
  i:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
  }

  ul li {
    margin-bottom: 1rem;
    width: 100%;
  }

  ul {
    a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 64px;
      align-items: center;
      font-size: 2rem;
      text-align: center;
      font-weight: 600;
      color: var(--color-text);
    }

    a:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }
`;
