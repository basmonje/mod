import { useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { DarkModeProvider } from "../src/context/ThemeMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/globalStyle";
import theme from "../src/styles/theme";
import * as gtag from "utils/gtag";

// import "styles/global.css"
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          className="toast-my"
          position="top-right"
          hideProgressBar={false}
          autoClose={3000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </ThemeProvider>
    </DarkModeProvider>
  );
};

export default App;
