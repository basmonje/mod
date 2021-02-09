import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Contact from "section/Contact";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Contacto" />
      <Navbar />
      <Head title="Contacto" />
      <Contact />
      <Footer contact={false} />
    </>
  );
}
