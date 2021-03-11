/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import "@src/styles/customTheme.sass"
import Head from "next/head"
import { UserContextProvider } from "@contexts/User"

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  )
}

export default MyApp
