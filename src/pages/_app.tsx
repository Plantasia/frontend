/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import "@src/styles/customTheme.sass"
import { SWRConfig } from "swr"
import { axiosFetcher } from "@src/lib/fetchJson"
import Head from "next/head"
import Bus from "@utils/Bus"
import { useEffect } from "react"
import { FlashAlert } from "@src/components"
declare global {
  interface Window {
    flash(message: string, type?: string): void
  }
}
function MyApp({ Component, pageProps }) {
  // console.log(Component)
  // console.log(pageProps)
  useEffect(() => {
    window.flash = (message, type = "success") =>
      Bus.emit("flash", { message, type })
  })
  return (
    <SWRConfig
      value={{
        fetcher: axiosFetcher,
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
      <FlashAlert />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
