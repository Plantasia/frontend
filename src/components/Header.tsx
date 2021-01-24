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

// Jogar para pasta de styles dps
const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center py-3 mb-5",
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

interface User {
  id: string
  name: string
}
interface HeaderProps {
  currentUser?: User
  actionText: string
}

export default function Header({ currentUser, actionText }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Col xs="3">
        <h3>Plantasia</h3>
      </Col>

      <Col xs="6">
        <InputGroup>
          <FormControl
            placeholder="Procure pelo nome de uma planta"
            aria-label="Procure pelo nome de uma planta"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </Col>

      <Col xs="3" className="d-flex justify-content-end">
        <CallToAction>{actionText}</CallToAction>
      </Col>
    </HeaderWrapper>
  )
}
