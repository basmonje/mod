import React from "react";
import styled from "styled-components";
import ModalMenu from "../../component/ModalMenu";
import ThemeSwitch from "../../component/ThemeSwitch";
import Navbar from "../../section/Navbar";

export default function MainLayout({ children }) {
  const [active, setActive] = React.useState(false);
  return (
    <Layout>
      {active && <ModalMenu setShow={setActive} />}
      <Navbar setActiveMenu={setActive} />
      {children}
      <ThemeSwitch />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
`;
