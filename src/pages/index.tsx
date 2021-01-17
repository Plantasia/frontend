import { useState } from "react"
import { Col, Container, Row, Jumbotron, Button} from "reactstrap"
import styled from "styled-components";
import GlobalStyle from '../styles/GlobalStyle'


export default function HomePage(props) {
  const [inputSearch, setInputSearch] = useState("")
  return( 
    <>
      <Jumbotron >
        <h1 className="display-3">Bem vindo ao Plantasia!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Quero saber mais!</Button>
        </p>
      </Jumbotron>
     <GlobalStyle/>
    </>

  )
}
