import SEO from "section/SEO";
import Layout from "../src/section/Layout";

const styles = {
  maxWidth: "500px",
  margin: "9rem auto",
  textAlign: "center",
};

function Error() {
  return (
    <Layout>
      <SEO title="Página no encontrada." />
      <div style={styles}>
        <h2>
          Error 404 <br /> 😱 Page not found
        </h2>
      </div>
    </Layout>
  );
}

export default Error;
