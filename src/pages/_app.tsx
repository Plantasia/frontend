/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle"
import { Grommet } from "grommet"
import { deepTheme } from "@/components/GrommetTheme"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container className="pl-1 pr-1">
        <Grommet className="App" theme={deepTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Grommet>
      </Container>
    </>
  )
}

export default MyApp
