import React from "react"
import { Container } from "react-bootstrap"

type Props = {
  route?: string
  buttonLabel?: string
  className?: string
}
const Layout: React.FC<Props> = ({
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
export default Layout
