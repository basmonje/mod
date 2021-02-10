import React from "react";
import styled from "styled-components";
import SEO from "section/SEO";
import Navbar from "section/Navbar";
import Footer from "section/Footer";
import Notice from "section/Notice";
import Head from "component/Head";
import ThemeSwitch from "component/ThemeSwitch";
import { getNoticeBySlug } from "../../src/api/notice";

export default function NoticeWrapper({ notice }) {
  const { title, description, date, count, content, media } = notice.notice[0];
  return (
    <>
      <ThemeSwitch />
      <SEO title="Nueva noticias" />
      <Navbar />
      <Notice
        title={title}
        description={description}
        date={date}
        read={count}
        content={content}
        nav={notice.nav}
        img={media[0]}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const post = await getNoticeBySlug(context.query.slug);

  const { nav } = post;

  if (!nav.nextPost) {
    nav.nextPost = null;
  }

  if (!nav.prevPost) {
    nav.prevPost = null;
  }

  return {
    props: {
      notice: post,
    },
  };
}
