import styled, { createGlobalStyle } from "styled-components"
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Accordion,
  Card,
} from "react-bootstrap"

export const LadingGlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
  }
`

export const ColColeredText = styled(Col)`
  color: #56537f;
`

export const RowPeople = styled(Row)`
  background-color: #668764;
`

export const ListGroupPeople = styled(ListGroup)`
  padding: 5% 0%;
  background-color: #668764;
`

export const ListGroupPeopleItem = styled(ListGroupItem)`
  text-align: center;
  background-color: #668764;
  border: none;
  color: #fff;
`

export const Pcontent = styled.p`
  font-size: 20px;
  font-family: "Roboto";
  margin: unset;
`

export const CardQuestion = styled(Card)`
  border: unset;
  background-color: unset;
`
export const CardHeaderQuestion = styled(Card.Header)`
  padding: unset;
  color: #56537f;
  background-color: unset;
`

export const AccordionCollapseQuestion = styled(Accordion.Collapse)`
  box-shadow: none;
  background-color: #fff;
`

export const CardBodyQuestion = styled(Card.Body)`
  margin-left: 15px;
  padding-top: unset;
  padding-bottom: unset;
  background-color: #fff;
`
