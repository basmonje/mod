import SEO from "section/SEO";
import Navbar from "section/Navbar";
import { BlogNotice } from "section/Blog";
import Footer from "section/Footer";
import Head from "../src/component/Head";
import ThemeSwitch from "../src/component/ThemeSwitch";
import { getAllNotices } from "../src/api/notice";

export default function Noticias({ noticias, base }) {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Noticias" />
      <Navbar />
      <Head title="Noticias" />
      <BlogNotice data={noticias} />
      <Footer base={base} />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await getAllNotices();
  const base = process.env.BASE_PATH;

  return {
    props: {
      noticias: response,
      base,
    },
  };
}
