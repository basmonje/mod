import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Contact from "section/Contact";
import Head from "../src/component/Head";

export default function Home() {
  return (
    <>
      <SEO title="Contacto" />
      <Navbar />
      <Head title="Contacto" />
      <Contact />
      <Footer contact={false} />
    </>
  );
}
