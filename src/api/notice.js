// import { BASE_PATH } from "utils/constants"
import { CountWords, Fechas } from "utils/countWords";
const BASE_PATH = process.env.BASE_PATH;

export async function getAllNotices() {
  try {
    const url = `${BASE_PATH}/noticias`;
    const response = await fetch(url);
    const result = await response.json();
    const resultFilter = result.map(
      ({ media, id, slug, title, date, description, content }) => {
        const count = CountWords(content);
        const dates = Fechas(date);
        return {
          media,
          id,
          slug,
          title,
          dates,
          description,
          count,
        };
      }
    );
    return resultFilter;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLastNoticesApi(limit) {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItem = "_sort=createdAt:desc";
    const url = `${BASE_PATH}/noticias?${limitItems}&${sortItem}`;
    const response = await fetch(url);
    const result = await response.json();
    const contenido = result.map(
      ({ id, title, slug, content, media, createdAt, description }) => {
        const count = CountWords(content);
        const date = Fechas(createdAt);
        const thumbnail = media[0].formats;
        return { id, title, slug, count, thumbnail, date, description };
      }
    );
    return contenido;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getOnlyNoticeSlug() {
  try {
    const url = `${BASE_PATH}/noticias`;
    const response = await fetch(url);
    const result = await response.json();
    const resultFilter = result.map(({ slug, title }) => {
      return {
        slug,
        title,
      };
    });
    return resultFilter;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getNoticeBySlug(slug) {
  try {
    const allNoticesBySlug = await getOnlyNoticeSlug();

    const url = `${BASE_PATH}/noticias?slug=${slug}`;
    const response = await fetch(url);
    const result = await response.json();

    const contenido = result.map(
      ({ id, title, slug, content, media, createdAt, description }) => {
        const count = CountWords(content);
        const date = Fechas(createdAt);
        return { id, title, slug, count, media, date, description, content };
      }
    );

    const postIndex = allNoticesBySlug.findIndex(
      ({ slug: noticeSlug }) => noticeSlug === slug
    );

    const prevPost = allNoticesBySlug[postIndex - 1];
    const nextPost = allNoticesBySlug[postIndex + 1];

    return {
      notice: contenido,
      nav: {
        prevPost,
        nextPost,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
