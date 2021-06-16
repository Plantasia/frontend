import React from "react"
import { Container as BootstrapContainer } from "react-bootstrap"
import { Header } from "@components"
import styled from "styled-components"

const Container = styled(BootstrapContainer)`
  scroll-behavior: smooth;
  overflow-y: scroll;
  display: block;
  height: 100%;
`
interface Props {}
export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
