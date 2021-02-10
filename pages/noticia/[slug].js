import React from "react";
import SEO from "section/SEO";
import Footer from "section/Footer";
import Notice from "section/Notice";

import { getNoticeBySlug } from "../../src/api/notice";
import Layout from "../src/section/Layout";

export default function NoticeWrapper({ notice, base }) {
  const { title, description, date, count, content, media } = notice.notice[0];
  return (
    <Layout>
      <SEO title="Nueva noticias" />
      <Notice
        title={title}
        description={description}
        date={date}
        read={count}
        content={content}
        nav={notice.nav}
        img={media[0]}
      />
      <Footer base={base} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const post = await getNoticeBySlug(context.query.slug);
  const base = process.env.BASE_PATH;

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
      base,
    },
  };
}
