import {
  Alert,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"
import styled from "styled-components"

export default function SearchComponent() {
  const SearchComponentStyle = styled.div`
    border-radius: 8px;
    max-width: 1200px;
    height: 120px;
  `

  const border = {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: "2px",
  }
  return (
    <SearchComponentStyle className="row align-content-center">
      <Col xs="2" className="align-self-center justify-content-center ">
        <h3 className="align-self-center justify-self-center">Plantasia</h3>
      </Col>

      <Col xs="8">
        <Input type="text" placeholder=" Digite um nome de planta"></Input>
      </Col>

      <Col xs="2">
        <div className="d-flex justify-content-center ">
          <h6 className="align-self-center">Registre-se</h6>
        </div>
      </Col>

      <Col>
        <hr style={{ borderColor: "black" }}></hr>
      </Col>
    </SearchComponentStyle>
  )
}
