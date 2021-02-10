import React from "react";
import styled from "styled-components";

export default function AvatarComponent({ src, alt, props }) {
  if (!src) return null;
  return (
    <Avatar {...props}>
      <img src={src} alt={alt} />
    </Avatar>
  );
}

const Avatar = styled.div`
  img {
    width: ${(props) => props.width || "28px"};
    border: none;
    border-radius: 50%;
    background-position: cover;
  }
`;
