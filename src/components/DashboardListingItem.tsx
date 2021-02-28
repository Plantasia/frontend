import { Col, Row, Image, ListGroup } from "react-bootstrap"
import { BsCircleFill } from "react-icons/bs"
import { CustomTextInfoItems, CategoriesItemsStyle } from "@styled/Categories"
import styled from "styled-components"

export default function DashboardListingItem() {
  const ColItem = styled(Col)`
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 3px 5px 0px #a1a1a1;
    font-family: Roboto, sans-serif;
    font-weight: normal;
  `

  return (
    <ColItem xs="12" className="mt-2 pr-4 pt-4 pl-1 pb-3">
      <Row>
        <Col xs="12" className="d-flex">
          <Col xs="2">
            <Image
              src="/assets/hortalicas.jpg"
              width={60}
              height={60}
              roundedCircle
            />
          </Col>

          <Col className="">
            <Row className="d-flex justify-content-start ">
              <h4>Melhor forma de manter hortaliças hidratadas </h4>
            </Row>
            <Row className="d-flex ">
              <p
                className="text-justify pr-3 mt-1"
                style={{ fontFamily: "sans-serif" }}
              >
                Recentemente comecei a realizar o cultivo de hortalicas. Já
                tenho experiência cultivando outros tipos de plantas, porém
                estou tendo dificuldade quando se trata da hidratação delas. A
                plantação fica localizada...
              </p>
            </Row>
            <Row className="d-flex justify-content-start ">
              <ListGroup horizontal style={{ fontSize: "10px" }}>
                <ListGroup.Item
                  style={{
                    border: "unset",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0rem",
                  }}
                >
                  Autor
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "unset",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                  }}
                >
                  10/10/1000 10:10
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "unset",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                  }}
                >
                  Categoria
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "unset",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                  }}
                >
                  Respostas: 10
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Col>
      </Row>
    </ColItem>
  )
}
