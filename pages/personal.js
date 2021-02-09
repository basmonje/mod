import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Personal from "section/Personal";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Personal Pedro Venegas" />
      <Navbar />
      <Head title="Pedro Venegas" />
      <Personal />
      <Footer />
    </>
  );
}
