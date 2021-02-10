import React from "react";
import styled from "styled-components";
import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Notice from "section/Notice";
import Head from "component/Head";
import ThemeSwitch from "component/ThemeSwitch";

export default function NoticeWrapper() {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Nueva noticias" />
      <Navbar />
      <Notice />
      <Footer />
    </>
  );
}
