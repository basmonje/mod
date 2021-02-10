import React from "react";
import SEO from "section/SEO";
import Hero from "section/Hero";
import Navbar from "section/Navbar";
import { BlogHome } from "section/Blog";
import Footer from "section/Footer";
import ThemeSwitch from "../src/component/ThemeSwitch";
import { getLastNoticesApi } from "../src/api/notice";

export default function Home({ response, base }) {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Inicio" />
      <Navbar />
      <Hero />
      <BlogHome data={response} />
      <Footer base={base} />
    </>
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
