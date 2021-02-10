import React from "react";
import SEO from "section/SEO";
import Hero from "section/Hero";
import Navbar from "section/Navbar";
import { BlogHome } from "section/Blog";
import Footer from "section/Footer";
import ThemeSwitch from "../src/component/ThemeSwitch";
import Modal from "../src/component/Modal";
import useScroll from "../src/hooks/useScroll";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  // const onShowModal = () => setShowModal(true);

  // const scroll = useScroll();

  // React.useEffect(() => {
  //   if (scroll.scrollY >= 500) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // }, [scroll]);
  return (
    <>
      <ThemeSwitch />
      <SEO title="Inicio" />
      <Navbar />
      <Hero />
      <BlogHome />
      <Footer />
      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Nuevo titulo"
        size="small"
      >
        <h1>Primer contenido</h1>
      </Modal>
    </>
  );
}
