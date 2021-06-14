import React from "react"
import { Container } from "react-bootstrap"

type Props = {
  route?: string
}

export const AuthLayout: React.FC<Props> = ({ children, route }) => {
  return (
    <Container fluid className="vh-100">
      {children}
    </Container>
  )
}
