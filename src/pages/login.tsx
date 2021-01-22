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

import { FaFacebook } from "react-icons/fa"
import { AiFillGoogleCircle } from "react-icons/ai"
import { BiSearchAlt } from "react-icons/bi"
import Image from "next/image"
import SearchLoginBar from "../components/SearchLoginBar"
import BoxLogin from "../components/BoxLogin"

export default function Login() {
  const border = {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: "2px",
  }

  return (
    <Container>
      <SearchLoginBar />

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
            <BoxLogin />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
