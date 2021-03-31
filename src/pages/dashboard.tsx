import { Header } from "@components"
import DashboardListingItem from "../components/DashboardListingItem"
// import CategoryBeforeItems from "@components/CategoryBeforeItems"
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap"

export default function ListCategories() {
  return (
    <>
      <Header callToAction={{ label: "teste", onClick: () => {} }} />

      <Row className="container">
        <Col xs="8">
          <Row>
            <Col className="d-flex align-items-center">
              <h3>Em alta</h3>
            </Col>
          </Row>
          <DashboardListingItem />
          <DashboardListingItem />
          <DashboardListingItem />
        </Col>
        <Col xs="4">
          <Row>
            <Col className="d-flex align-items-center">
              <h3>Categorias</h3>
            </Col>
          </Row>
          <ListGroup
            className="mt-2"
            style={{ boxShadow: "0 0 12px #693c8880;" }}
          >
            <ListGroup.Item
              style={{
                backgroundColor: "#693c88",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Hortaliças
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: "#693c88",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Orquídeas
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: "#693c88",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Flores
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: "#693c88",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Coníferas
            </ListGroup.Item>
          </ListGroup>
          <Row>
            <Col className=" mt-3 d-flex align-items-center">
              <h3>Tags em Alta</h3>
            </Col>
          </Row>
          <ListGroup>
            <ListGroup.Item
              style={{
                paddingLeft: "unset",
                backgroundColor: "unset",
                border: "unset",
              }}
            >
              <span
                style={{
                  backgroundColor: "#693c885c",
                  color: "#693c88",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                Temperatura
              </span>{" "}
              x 109
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                paddingLeft: "unset",
                backgroundColor: "unset",
                border: "unset",
              }}
            >
              <span
                style={{
                  backgroundColor: "#693c885c",
                  color: "#693c88",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                Terra
              </span>{" "}
              x 57
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                paddingLeft: "unset",
                backgroundColor: "unset",
                border: "unset",
              }}
            >
              <span
                style={{
                  backgroundColor: "#693c885c",
                  color: "#693c88",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                Hidratação
              </span>{" "}
              x 32
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                paddingLeft: "unset",
                backgroundColor: "unset",
                border: "unset",
              }}
            >
              <span
                style={{
                  backgroundColor: "#693c885c",
                  color: "#693c88",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                Nutrientes
              </span>{" "}
              x 17
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="d-flex align-items-center mt-5">
            <h3>Mais Recentes</h3>
          </Col>
        </Row>
      </Container>
      <Row className="container">
        <Col xs="8">
          <DashboardListingItem />
          <DashboardListingItem />
          <DashboardListingItem />
        </Col>
      </Row>
    </>
  )
}
