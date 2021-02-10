import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Contact from "section/Contact";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Contacto({ base }) {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Contacto" />
      <Navbar />
      <Head title="Contacto" />
      <Contact base={base} />
      <Footer contact={false} />
    </>
  );
}

export async function getServerSideProps() {
  const base = process.env.BASE_PATH;

  return {
    props: {
      base,
    },
  };
}
