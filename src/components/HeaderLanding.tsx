import { Col, Row, RowProps, Nav } from "react-bootstrap"
import styled from "styled-components"

const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center mb-5",
  })
)`
  background-color: #668764;
  color: #fff;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
`

const NavLinkWhite = styled(Nav.Link)`
  color: #fff;
`

export default function HeaderLanding() {
  return (
    <HeaderWrapper>
      <Col xs="6">
        <h4>Plantasia</h4>
      </Col>

      <Col xs="6">
        <Nav className="justify-content-end" activeKey="/#">
          <Nav.Item>
            <NavLinkWhite href="/#">Desenvolvedores</NavLinkWhite>
          </Nav.Item>
          <Nav.Item>
            <NavLinkWhite eventKey="link-1">Sobre</NavLinkWhite>
          </Nav.Item>
          <Nav.Item>
            <NavLinkWhite eventKey="link-2">FAQ</NavLinkWhite>
          </Nav.Item>
          <Nav.Item>
            <NavLinkWhite eventKey="link-2">Contato</NavLinkWhite>
          </Nav.Item>
        </Nav>
      </Col>
    </HeaderWrapper>
  )
}
