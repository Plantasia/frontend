import { Anchor, Box, Header, Heading, Nav, TextInput, Keyboard } from "grommet"
import { Search } from "grommet-icons"
import { useState } from "react"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"

const Teste = styled.div`
  width: 100%;
  background-color: #f00;
`

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <Container>
      <Teste>Teste</Teste>
      <Header background="white" gap="xlarge" border={{ side: "bottom" }}>
        <Heading>Plantasia</Heading>
        <Box width="medium" align="center" gap="small">
          <Keyboard onEnter={() => console.log(inputSearch)}>
            <TextInput
              type="search"
              icon={<Search />}
              value={inputSearch}
              onChange={({ target: { value } }) => setInputSearch(value)}
            />
          </Keyboard>
        </Box>
        <Nav direction="row" pad="medium" align="center">
          <Anchor label="Entrar" />
          <Anchor
            label={
              <Box border={{ side: "all" }} pad="xsmall">
                <span>Registrar-se</span>
              </Box>
            }
          />
        </Nav>
      </Header>
      <Row>
        <Col>Olá</Col>
        <Col>Olá</Col>
        <Col>Olá</Col>
      </Row>
    </Container>
  )
}
