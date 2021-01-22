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
import { CategoriesItemsStyle } from "../styles/styledComponents/categories/CategoriesItemsStyles"
import { BsCircleFill } from "react-icons/bs"
import { CustomTextInfoItems } from "../styles/styledComponents/categories/CustomTextInfoItems"
import Image from "next/image"
import React from "react"

export default function CategoryListingOneItem() {
  return (
    <CategoriesItemsStyle className="container mt-5 mb-5 pr-4 pt-4 pl-1 pb-3">
      <Row>
        <Col xs="8" className="d-flex">
          <Col xs="3">
            <Image src="/assets/hortalicas.jpg" width={200} height={200} />
          </Col>

          <Col className="">
            <Row className="d-flex justify-content-start ">
              <h4>Hortaliças</h4>
            </Row>

            <Row className="d-flex ">
              <p className="text-justify p-1 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                turpis elit, porttitor sit amet tellus nec, blandit aliquam
                sapien.
              </p>
            </Row>
          </Col>

          <div
            style={{
              borderColor: " #666666",
              borderStyle: "solid",
              borderWidth: "2px",
              borderLeft: "2px",
            }}
          ></div>
        </Col>

        <Col xs="4">
          {/* Begin Detailed Info Component */}
          <Row>
            <Col>
              <Row className="justify-content-center ">
                <CustomTextInfoItems>Topics</CustomTextInfoItems>
              </Row>

              <Row className="justify-content-center ">162</Row>
            </Col>

            <Col>
              <Row className="justify-content-center ">
                <CustomTextInfoItems> Atividades</CustomTextInfoItems>
              </Row>

              <Row className="justify-content-center ">150</Row>
            </Col>

            <Col>
              <Row className="justify-content-center ">
                <CustomTextInfoItems className="d-flex">
                  {" "}
                  Usuários{" "}
                </CustomTextInfoItems>
              </Row>

              <Row className="justify-content-center ">156</Row>
            </Col>
          </Row>
          {/* Begin Detailed Info Component */}

          <hr style={{ borderColor: " #666666", borderWidth: "2px" }}></hr>

          {/* Bottom info */}
          <Row className="justify-content-start pl-4">
            <CustomTextInfoItems> Ultimo tópico </CustomTextInfoItems>
          </Row>

          <Row className="justify-content-start pl-4">
            <BsCircleFill className="mr-2" color="#c4c4c4" size={20} /> Lorem
            ipsum dolor sit amet
          </Row>
          {/* Bottom info */}
        </Col>
      </Row>
    </CategoriesItemsStyle>
  )
}
