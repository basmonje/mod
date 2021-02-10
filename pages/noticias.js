import SEO from "section/SEO";
import { BlogNotice } from "section/Blog";
import Footer from "section/Footer";
import Head from "../src/component/Head";
import { getAllNotices } from "../src/api/notice";
import Layout from "../src/section/Layout";

export default function Noticias({ noticias, base }) {
  return (
    <Layout>
      <SEO title="Noticias" />
      <Head title="Noticias" />
      <BlogNotice data={noticias} />
      <Footer base={base} />
    </Layout>
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
