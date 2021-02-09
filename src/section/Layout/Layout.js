import styled from "styled-components";

export default function MainLayout({ children }) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  width: 100%;
`;
