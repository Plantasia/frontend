import { useState } from "react"
import { Row } from "reactstrap"
import styled from "styled-components"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Teste = styled.div`
  width: 100%;
  background-color: #f00;
`

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {/* 
        COMPONENTS
        [] BODY, acredito que o body deve ficar aqui. Varia a cada pagina
                caso fique mt complicado, refatora o componente em outro arquivo
        [] FOOTER
       */}
      <Row className="mt-5"></Row>

      <Footer />
    </>
  )
}
