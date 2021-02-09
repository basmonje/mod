import SEO from "section/SEO";
import Hero from "section/Hero";
import Navbar from "section/Navbar";
import { BlogHome } from "section/Blog";
import Footer from "section/Footer";
import ThemeSwitch from "../src/component/ThemeSwitch";

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <SEO title="Inicio" />
      <Navbar />
      <Hero />
      <BlogHome />
      <Footer />
    </>
  );
}
