/* eslint-disable react/prop-types */
import GlobalStyle from "../src/styles/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
