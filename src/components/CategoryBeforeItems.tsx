import { Container, Col, Row } from "react-bootstrap"

import { StyledButtonTheme } from "@/src/styles/components/Shared"
import { MainTitleStyle } from "@styled/Categories"
import { AiOutlinePlus } from "react-icons/ai"

export default function CategoryBeforeItems() {
  return (
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
  )
}
