import SEO from "section/SEO";
import Navbar from "section/Navbar";
import { BlogNotice } from "section/Blog";
import Footer from "section/Footer";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Noticias" />
      <Navbar />
      <Head title="Noticias" />
      <BlogNotice />
      <Footer />
    </>
  );
}
