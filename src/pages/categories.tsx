import CategoriesBar from "../components/CategoriesBar"
import {
  Alert,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"

import { StyledButtonTheme } from "../styles/styledComponents/general/StyledButtonTheme"
import CategoryListingOneItem from "../components/CategoryListingItem"
import { CustomTextInfoItems } from "../styles/styledComponents/categories/CustomTextInfoItems"
import { CategoriesItemsStyle } from "../styles/styledComponents/categories/CategoriesItemsStyles"
import { BsCircleFill } from "react-icons/bs"

import { AiOutlinePlus } from "react-icons/ai"
import Image from "next/image"
import { MainTitleStyle } from "../styles/styledComponents/categories/MainTitleStyle"
import React from "react"

export default function ListCategories() {
  const border = {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: "2px",
    borderLeft: "2px",
  }

  const borderBlack = {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "2px",
    borderLeft: "2px",
  }

  return (
    <>
      <Container>
        <CategoriesBar />
      </Container>

      <MainTitleStyle>
        <Container>
          <Row>
            <Col xs="10" className="d-flex align-items-center">
              Categorias
            </Col>

            <Col xs="2" className="d-flex justify-content-center ">
              <StyledButtonTheme className="btn">
                Novo tópico
                <AiOutlinePlus />
              </StyledButtonTheme>
            </Col>
          </Row>
        </Container>
      </MainTitleStyle>

      <CategoryListingOneItem />
    </>
  )
}
