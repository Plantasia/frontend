/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import { Grommet } from "grommet"
import { deepTheme } from "@/components/GrommetTheme"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Grommet className="App" theme={deepTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Grommet>
    </>
  )
}

export default MyApp
