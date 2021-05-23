import { ReactNode } from "react"

import {
  Col,
  Row,
  Button,
  RowProps,
  Nav,
  Navbar,
  NavbarProps,
  NavDropdown,
} from "react-bootstrap"
import { useRouter } from "next/router"
import styled from "styled-components"
import useUser from "@src/lib/useUser"
import axios from "axios"
import { MenuDropdown } from "@components"
import { InlineGap } from "@src/styles/components/Shared"
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

export function Header(Props) {
  const router = useRouter()
  const { user, mutateUser } = useUser()
  // console.log({ user })
  const logout = async () => {
    // eslint-disable-next-line no-undef
    mutateUser(await (await axios.post("/api/logout")).data, false)
  }

  return (
    <HeaderWrapper>
      <Navbar.Brand href="/">
        <h1>plantasia</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0">
          <Nav.Link href="/category">Categorias</Nav.Link>
          <Nav.Link href="/topics">Tópicos</Nav.Link>
        </Nav>
        {user?.isLoggedIn && (
          <MenuDropdown logout={logout} userAvatar={user.avatar} />
        )}
        {!user?.isLoggedIn && (
          <Col xs="4" className="d-flex justify-content-end">
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
