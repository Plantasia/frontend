import React from "react"
import { Container } from "react-bootstrap"

export const Layout: React.FC = ({ children }) => {
  return <Container fluid>{children}</Container>
}
