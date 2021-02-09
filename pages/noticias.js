import SEO from "section/SEO";
import Navbar from "section/Navbar";
import { BlogNotice } from "section/Blog";
import Footer from "section/Footer";
import Head from "../src/component/Head";

export default function Home() {
  return (
    <>
      <SEO title="Noticias" />
      <Navbar />
      <Head title="Noticias" />
      <BlogNotice />
      <Footer />
    </>
  );
}
