import { Component, ReactChild, ReactElement, ReactNode } from "react"
import {
  Col,
  Row,
  Button,
  InputGroup,
  FormControl,
  RowProps,
  ButtonProps,
} from "react-bootstrap"
import styled from "styled-components"

// Jogar para pasta de styles dps
const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center pb-3 mb-5",
  })
)`
  margin-top: 1.5em;
  border-bottom: 1px black solid;
`

interface User {
  id: string
  name: string
}
type NamedChildrenSlots = {
  left?: ReactNode
  middle?: ReactNode
  right: ReactNode
}
interface Props {
  children: NamedChildrenSlots
  currentUser?: User
  actionText?: string
}

export default function HeaderNameLogin() {
  return (
    <HeaderWrapper>
      <Col xs="3">
        <h3>Plantasia</h3>
      </Col>

      <Col xs="3" className="d-flex justify-content-end"></Col>
    </HeaderWrapper>
  )
}