import Document, { Html, Head, Main, NextScript } from "next/document"
import { getSiteMetaData } from "utils/helpers"
import { ServerStyleSheet } from "styled-components"
import { GA_TRACKING_ID } from "utils/gtag"
import { MagicScriptTag } from "../src/utils/magicScript"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const siteMetadata = getSiteMetaData()

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <MagicScriptTag />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {this.props.styleTags}
          <link rel="stylesheet" href="/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
