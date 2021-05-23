import React from "react"
import { Container as BootstrapContainer } from "react-bootstrap"
import { Header } from "@components"
import { useRouter } from "next/router"
import styled from "styled-components"

const Container = styled(BootstrapContainer)`
  scroll-behavior: smooth;
  overflow-y: scroll;
  display: block;
  height: 100vh;
`
type Props = {
  route?: string
  buttonLabel?: string
}
export const AppLayout: React.FC<Props> = ({
  children,
  route,
  buttonLabel,
}) => {
  const router = useRouter()

  const handleCallToAction = () => {
    router.push(route || "/signup")
  }
  return (
    <Container className="vh-100">
      <Header />
      {children}
    </Container>
  )
}
