/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import "@src/styles/customTheme.sass"
import { SWRConfig } from "swr"
import { axiosFetcher } from "@src/lib/fetchJson"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  console.log(Component)
  console.log(pageProps)
  return (
    <SWRConfig
      value={{
        fetcher: axiosFetcher,
        onError: err => {
          console.log(err)
        },
      }}
    >
      <Head>
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/assets/fonts/RobotoSlab-Light.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/assets/fonts/RobotoSlab-Regular.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/assets/fonts/RobotoSlab-Medium.ttf"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin=""
          href="/assets/fonts/RobotoSlab-ExtraBold.ttf"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
