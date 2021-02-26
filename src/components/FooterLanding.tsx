import { Col, Row, RowProps, Nav } from "react-bootstrap"
import styled from "styled-components"
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  GithubIcon,
} from "@/src/styles/components/Auth"

const FooterWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center",
  })
)`
  background-color: #6d6a95;
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
`

const WppIcon = styled(WhatsappIcon)`
  font-size: 7px;
  margin-left: 5px;
`

const FbIcon = styled(FacebookIcon)`
  font-size: 7px;
  margin-left: 5px;
`
const InstaIcon = styled(InstagramIcon)`
  font-size: 7px;
  margin-left: 5px;
`

const GitIcon = styled(GithubIcon)`
  font-size: 7px;
  margin-left: 5px;
`

export default function FooterLanding() {
  return (
    <FooterWrapper>
      <Col xs="5">
        <h4>Plantasia</h4>
      </Col>

      <Col xs="6">
        <Nav activeKey="/#">
          <Nav.Item>
            <WppIcon />
          </Nav.Item>
          <Nav.Item>
            <FbIcon />
          </Nav.Item>
          <Nav.Item>
            <InstaIcon />
          </Nav.Item>
          <Nav.Item>
            <GitIcon />
          </Nav.Item>
        </Nav>
      </Col>
      <Col md={{ span: 4, offset: 4 }}>
        <span>© 2021 Plantasia . Todos os direitos reservados.</span>
      </Col>
    </FooterWrapper>
  )
}
