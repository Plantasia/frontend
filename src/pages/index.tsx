import {
  Row,
  Col,
  Button,
  Accordion,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap"
import { HeaderLanding, SEO, FooterLanding } from "@components"
import React, { useState } from "react"
import { Layout } from "@src/components/Layout"
import styled from "styled-components"
import { QuestionsFAQ } from "@src/utils/constants"
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"

const LandingContainer = styled(Container)`
  background-image: linear-gradient(225deg, #89a986, #b6d0b4);
`
const SectionOne = styled(Row)`
  color: white;
`
const SectionTwo = styled(Row)`
  background-color: white;
`
const SectionThree = styled(Row)`
  color: white;
`
const Footer = styled(Row)`
  color: white;
  border-top: 1px solid white;
  height: 100px;
`

const NavLink = styled(Nav.Link)`
  color: white !important;
  font-size: 1.4em;
  font-weight: 300;
  :hover {
    font-weight: 500;
    ::after {
      content: "";
      width: 100%;
    }
    transition: 300ms;
  }
  ::after {
    content: "";
    border-bottom: 1px solid white;
    display: block;
    width: 10px;
    left: 5px;
    position: relative;
    transition: 300ms;
  }
`
const Brand = styled.h1`
  font-size: 6em;
`

const FAQTitle = styled(Button)`
  :focus {
    box-shadow: none;
  }
`

export default function HomePage(props) {
  return (
    <LandingContainer fluid>
      <Navbar expand="md" className="w-100 right" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#faq">F.A.Q</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SectionOne className="mt-4 d-flex align-items-center">
        <Col xs="6" className="d-flex justify-content-center w-100">
          <div className="ml-5 d-flex flex-column">
            <Brand className="">Plantasia</Brand>
            <h2 style={{ fontWeight: 300 }}>
              Regue informações <br />
              cultive conhecimento
            </h2>
            <Button size="lg" className="mt-3" style={{ fontWeight: 500 }}>
              Visitar fórum
            </Button>
          </div>
        </Col>
        <Col xs="6" className="mb-0">
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/landing-01.svg"
          ></object>
        </Col>

        <object
          className="w-100"
          type="image/svg+xml"
          data="/assets/img/wave.svg"
        ></object>
      </SectionOne>
      <SectionTwo className="d-flex align-items-center">
        <Col xs="6" className="mb-0 p-0">
          <object
            className="w-100 ml-5"
            type="image/svg+xml"
            data="/assets/img/landing-02.svg"
          ></object>
        </Col>
        <Col xs={{ offset: 1, span: 5 }}>
          <div className=" d-flex flex-column">
            <h1>Cuide de suas plantas e compartilhe o seu conhecimento</h1>
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
          <h1 className="my-5">Perguntas frequentes</h1>
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
                >
                  <h5>{title}</h5>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={index.toString()}>
                  <p>{description}</p>
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
          <h1>PLANTASIA</h1>
          <h2>2021</h2>
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
