import React from "react"
import { Container } from "react-bootstrap"

type Props = {
  route?: string
  buttonLabel?: string
  className?: string
}
export const AuthLayout: React.FC<Props> = ({
  children,
  route,
  buttonLabel,
  className,
}) => {
  return (
    <Container fluid className={className}>
      {children}
    </Container>
  )
}
