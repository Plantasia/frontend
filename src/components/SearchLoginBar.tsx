import {
  Alert,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  RowProps,
  ColProps,
  ButtonProps,
} from "react-bootstrap"
import styled from "styled-components"

const SearchComponentStyle = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center pb-2 pt-2 mb-5",
  })
)`
  margin-top: 1.5em;
  border-bottom: 1px black solid;
`
const CallToAction = styled(Button).attrs(
  (): ButtonProps => ({
    size: "lg",
  })
)`
  background-color: transparent;
  color: black;
  border: 2px black solid;
  border-radius: 10px;
`
export default function SearchComponent() {
  return (
    <SearchComponentStyle>
      <Col xs="3">
        <h3>Plantasia</h3>
      </Col>

      <Col xs="6">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Procure pelo nome de uma planta"
            aria-label="Procure pelo nome de uma planta"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </Col>

      <Col xs="3" className="d-flex justify-content-end">
        <CallToAction>Registre-se</CallToAction>
      </Col>
    </SearchComponentStyle>
  )
}
