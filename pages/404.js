import SEO from "section/SEO";
import Navbar from "section/Navbar";

const styles = {
  maxWidth: "500px",
  margin: "9rem auto",
  textAlign: "center",
};

function Error() {
  return (
    <>
      <SEO title="Página no encontrada." />
      <Navbar />
      <div style={styles}>
        <h2>
          Error 404 <br /> 😱 Page not found
        </h2>
      </div>
    </>
  );
}

export default Error;
