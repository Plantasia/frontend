import { ReactNode } from "react"

import { Col, Button, Nav, Navbar, NavbarProps } from "react-bootstrap"
import { useRouter } from "next/router"
import styled from "styled-components"
import { useUser } from "@src/lib"
import { MenuDropdown } from "@components"
import { InlineGap } from "@src/styles/components/Shared"
import { FaDivide, FaPage4, FaPlus } from "react-icons/fa"
// Jogar para pasta de styles dps
const HeaderWrapper = styled(Navbar).attrs(
  (): NavbarProps => ({
    collapseOnSelect: true,
    expand: "lg",
    className: "px-0 mb-5",
  })
)`
  border-bottom: 1px black solid;
`

interface Props {
  title?: ReactNode
}

export function Header(props) {
  const router = useRouter()
  const { user } = useUser()

  return (
    <HeaderWrapper>
      <Navbar.Brand href="/">
        <h1>plantasia</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" defaultActiveKey={router.route}>
          <Nav.Link href="/category">categorias</Nav.Link>
          <Nav.Link href="/topics">tópicos</Nav.Link>
          {router.route !== "/topics/new" && user?.isLoggedIn && (
            <Nav.Link href="/topics/new">novo tópico</Nav.Link>
          )}
        </Nav>
        {user?.isLoggedIn && <MenuDropdown />}
        {!user?.isLoggedIn && (
          <Col md="4" className="d-flex justify-content-end">
            <InlineGap>
              <Button
                className="mr-2"
                variant={"outline-primary"}
                onClick={() => {
                  router.push("/signup")
                }}
              >
                cadastrar-se
              </Button>
              <Button
                onClick={() => {
                  router.push("/signin")
                }}
              >
                entrar
              </Button>
            </InlineGap>
          </Col>
        )}
      </Navbar.Collapse>
    </HeaderWrapper>
  )
}
