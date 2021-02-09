import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Contact from "section/Contact";

export default function Home() {
  return (
    <>
      <SEO title="Contacto" />
      <Navbar />
      <Contact />
      <Footer contact={false} />
    </>
  );
}
