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

import Image from "next/image"
import SearchLoginBar from "@/components/Header"
import { Header, BoxLogin } from "@components"
import LoginForm from "./_form"

export default function Login() {
  const border = {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: "2px",
  }

  return (
    <Container>
      <Header actionText="Registre-se" />

      <Container style={{ marginTop: "0.1em" }}>
        <Row>
          <Col style={{ borderColor: "red" }}>
            <Image
              className="mt-2"
              src="/assets/img_provisoria.png"
              width={750}
              height={600}
            />
          </Col>

          <Col xs="5">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
