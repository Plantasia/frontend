import React from "react"
import { Container } from "react-bootstrap"
import { Header } from "@components"
import { useRouter } from "next/router"

type Props = {
  route?: string
  buttonLabel?: string
}
const Layout: React.FC<Props> = ({ children, route, buttonLabel }) => {
  const router = useRouter()
  return <Container fluid>{children}</Container>
}
export default Layout
