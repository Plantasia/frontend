import React from "react"
import { Row, Col, Button, Accordion, Navbar, Nav } from "react-bootstrap"
import { QuestionsFAQ } from "@src/utils/constants"
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { useRouter } from "next/router"
import {
  Brand,
  FAQDescription,
  FAQTitle,
  Footer,
  LandingContainer,
  NavLink,
  NavButton,
  SectionOne,
  SectionThree,
  SectionTwo,
  Slogan,
} from "@styled/LandingPage"

const HomePage: React.FC = ({ children }) => {
  const router = useRouter()
  const handleCallToAction = () => {
    router.push("/category")
  }
  return (
    <LandingContainer fluid>
      <Navbar expand="md" className="w-100 right" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end align-items-center">
            <Nav.Item>
              <NavLink href="#home">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink href="#about">Sobre</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink href="#faq">F.A.Q</NavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signin">
                <Button>Entrar</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <SectionOne className="mt-4 d-flex align-items-center">
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="d-flex justify-content-center w-100"
        >
          <div className="ml-md-5 d-flex flex-column">
            <Brand>plantasia</Brand>
            <Slogan>
              Regue informações, <br />
              cultive conhecimento
            </Slogan>
            <Button
              size="lg"
              className="my-3"
              style={{ fontWeight: 500, fontSize: "1.5vw" }}
              onClick={handleCallToAction}
            >
              Visitar fórum
            </Button>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className="mb-0"
        >
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/landing-01.svg"
          ></object>
        </Col>
      </SectionOne>

      <Row id="about">
        <object
          className="w-100"
          type="image/svg+xml"
          data="/assets/img/wave.svg"
        ></object>
      </Row>

      <SectionTwo className="d-flex align-items-center">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-0 p-0">
          <object
            className="w-100 ml-md-5"
            type="image/svg+xml"
            data="/assets/img/landing-02.svg"
          ></object>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 5, offset: 1 }}>
          <div className=" d-flex flex-column">
            <h1 className="mb-3">
              Cuide de suas plantas e compartilhe o seu conhecimento
            </h1>
            <h2 style={{ fontWeight: 300 }}>
              <ul className="list-unstyled">
                <li>Aprenda sobre plantas</li>
                <li>Ensine o que você já sabe</li>
                <li>Fortacela nossa comunidade</li>
              </ul>
            </h2>
          </div>
        </Col>
      </SectionTwo>

      <Row>
        <object
          className="w-100"
          type="image/svg+xml"
          data="/assets/img/wave-02.svg"
        ></object>
      </Row>

      <SectionThree className="d-flex align-items-start justify-content-center my-5">
        <Col xs="6" className="">
          <h2 className="my-lg-5 h1">Perguntas frequentes</h2>
          <Accordion
            style={{
              width: "500px",
            }}
          >
            {QuestionsFAQ.map(({ description, title }, index) => (
              <>
                <Accordion.Toggle
                  as={FAQTitle}
                  variant="link"
                  eventKey={index.toString()}
                  key={index}
                >
                  <h5 key={index}>{title}</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={index.toString()}>
                  <FAQDescription key={index}>{description}</FAQDescription>
                </Accordion.Collapse>
              </>
            ))}
          </Accordion>
        </Col>
        <Col xs={{ span: 4 }}>
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/landing-03.svg"
          ></object>
        </Col>
      </SectionThree>
      <Footer>
        <Col
          xs="12"
          className="d-flex justify-content-between align-items-center"
        >
          <h1>Plantasia</h1>
          <h2>2021 ©</h2>
          <div
            style={{ width: 250 }}
            className="d-flex justify-content-between"
          >
            <FaGithub size={50} style={{ cursor: "pointer" }} />
            <FaWhatsapp size={50} style={{ cursor: "pointer" }} />
            <FaInstagram size={50} style={{ cursor: "pointer" }} />
            <FaFacebook size={50} style={{ cursor: "pointer" }} />
          </div>
        </Col>
      </Footer>
    </LandingContainer>
  )
}
export default HomePage
