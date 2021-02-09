import SEO from "section/SEO";
import Hero from "section/Hero";
import Navbar from "section/Navbar";
import { BlogHome } from "section/Blog";
import Footer from "section/Footer";

export default function Home() {
  return (
    <>
      <SEO title="Inicio" />
      <Navbar />
      <Hero />
      <BlogHome />
      <Footer />
    </>
  );
}
