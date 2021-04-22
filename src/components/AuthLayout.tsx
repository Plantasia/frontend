import React from "react"
import { Container } from "react-bootstrap"
import { Header } from "@components"
import { useRouter } from "next/router"

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
