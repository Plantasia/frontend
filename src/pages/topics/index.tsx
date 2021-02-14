import { Container, Col, Row, Button } from "react-bootstrap"
import CategoryBeforeItems from "../../components/CategoryBeforeItems"
import { Header } from "@components"

const border = {
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: "2px",
}

export default function listTopics() {
  return (
    <>
      <Header>
        {{
          right: <Button>Registre-se aqui </Button>,
        }}
      </Header>
      <Container>
        <CategoryBeforeItems />

        <Row className="justify-content-around mt-4 mb-2">
          <Col xs="6" style={border}>
            Tópico
          </Col>
          <Col style={border} xs="2">
            Status
          </Col>
          <Col style={border} xs="1">
            Views
          </Col>
          <Col style={border} xs="1">
            Replies
          </Col>
          <Col style={border} xs="1">
            Reaction
          </Col>
        </Row>
        <hr style={{ borderColor: " #666666", borderWidth: ".5px" }}></hr>
      </Container>

      <Container>
        <Row className="justify-content-around mt-4 mb-2">
          <Col xs="6" style={border}>
            Cactáceas e o que não fazer!
          </Col>
          <Col style={border} xs="2">
            Aberto
          </Col>
          <Col style={border} xs="1">
            600
          </Col>
          <Col style={border} xs="1">
            2
          </Col>
          <Col style={border} xs="1">
            25
          </Col>
        </Row>
      </Container>
    </>
  )
}
