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
import { AiOutlinePlus } from "react-icons/ai"
import { MainTitleStyle } from "../styles/styledComponents/categories/MainTitleStyle"

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
