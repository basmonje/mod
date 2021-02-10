import SEO from "section/SEO";
import Footer from "section/Footer";
import Personal from "section/Personal";
import Head from "../src/component/Head";
import Layout from "../src/section/Layout";

export default function Home({ base }) {
  return (
    <Layout>
      <SEO title="Personal Pedro Venegas" />
      <Head title="Pedro Venegas" />
      <Personal />
      <Footer base={base} />
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
