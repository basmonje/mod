import React from "react";
import SEO from "section/SEO";
import Hero from "section/Hero";
import { BlogHome } from "section/Blog";
import Footer from "section/Footer";
import { getLastNoticesApi } from "../src/api/notice";
import Layout from "../src/section/Layout";

export default function Home({ response, base }) {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Hero />
      <BlogHome data={response} />
      <Footer base={base} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await getLastNoticesApi(5);
  const base = process.env.BASE_PATH;

  return {
    props: {
      response,
      base,
    },
  };
}
