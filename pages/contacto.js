import SEO from "section/SEO";
import Footer from "section/Footer";
import Contact from "section/Contact";
import Head from "../src/component/Head";
import Layout from "../src/section/Layout";

export default function Contacto({ base }) {
  return (
    <Layout>
      <SEO title="Contacto" />
      <Head title="Contacto" />
      <Contact base={base} />
      <Footer contact={false} />
    </Layout>
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
