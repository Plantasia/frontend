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

export const FirstWave = styled.path.attrs(() => ({
  d:
    "M0.28,97.20 C236.17,154.44 238.99,-15.28 504.79,118.91 L500.00,150.00 L0.00,150.00 Z",
}))`
  stroke: none;
  fill: white;
`

export const SecondWave = styled.path.attrs(() => ({
  d:
    "M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z",
}))`
  stroke: none;
  fill: white;
`

export const NavButton = styled(Nav.Item)``

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
