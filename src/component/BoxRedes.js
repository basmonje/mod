import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { getSiteMetaData } from "utils/helpers";
import Flex from "./Flex";

export default function BoxRedesComponent({ size = "big", menu, ...props }) {
  const siteMetadata = getSiteMetaData();
  if (menu) return <RedesMenu social={siteMetadata.social} {...props} />;
  return (
    <BoxRedes>
      <a href={`${siteMetadata.social.facebook}`} target="__blank">
        <Icon name="facebook" size={size} />
      </a>
      <a href={`${siteMetadata.social.linkedin}`} target="__blank">
        <Icon name="linkedin" size={size} />
      </a>
      <a href={`${siteMetadata.social.twitter}`} target="__blank">
        <Icon name="twitter" size={size} />
      </a>
    </BoxRedes>
  );
}

const BoxRedes = styled.nav`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  a {
    color: var(--color-text);
  }

  a:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

function RedesMenu({ onClose, social }) {
  return (
    <Flex align="flex-start" direction="row" paTop="50px">
      <a href={`${social.facebook}`} target="__blank">
        <Icon name="facebook" onClick={onClose} size="huge" />
      </a>
      <a href={`${social.linkedin}`} target="__blank">
        <Icon name="linkedin" onClick={onClose} size="huge" />
      </a>
      <a href={`${social.twitter}`} target="__blank">
        <Icon name="twitter" onClick={onClose} size="huge" />
      </a>
    </Flex>
  );
}
