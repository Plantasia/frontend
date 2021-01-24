/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/assets/fonts/RobotoSlab-ExtraBold.ttf"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </>
  )
}

export default MyApp
