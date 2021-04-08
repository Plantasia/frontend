import { Row, Button, Container, Nav } from "react-bootstrap"
import styled from "styled-components"

export const LandingContainer = styled(Container)`
  background-image: linear-gradient(225deg, #89a986, #b6d0b4);
  scroll-behavior: smooth;
  overflow-y: scroll;
  display: block;
  height: 100vh;
`
export const SectionOne = styled(Row).attrs({ id: "home" })`
  color: white;
`
export const SectionTwo = styled(Row)`
  background-color: white;
  color: #624378;
`
export const SectionThree = styled(Row).attrs({ id: "faq" })`
  color: white;
`
export const Footer = styled(Row)`
  color: white;
  border-top: 1px solid white;
  height: 100px;
`

export const NavLink = styled(Nav.Link)`
  color: white !important;
  font-size: 1.3vw;
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
export const Brand = styled.h1`
  font-size: 5vw;
`
export const Slogan = styled.h2`
  font-size: 2vw;
  font-weight: 300;
`

export const FAQTitle = styled(Button)`
  :focus {
    box-shadow: none;
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`

export const FAQDescription = styled.p`
  padding-left: 12px;
`
