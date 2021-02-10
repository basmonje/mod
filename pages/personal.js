import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Personal from "section/Personal";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Home({ base }) {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Personal Pedro Venegas" />
      <Navbar />
      <Head title="Pedro Venegas" />
      <Personal />
      <Footer base={base} />
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
