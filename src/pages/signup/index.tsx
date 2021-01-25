import { Container, Col, Row } from "react-bootstrap"

import Image from "next/image"

import { Header, SEO } from "@components"
import Form from "./_form"

export default function Login() {
  return (
    <Container>
      <SEO title="login" />
      <Header />

      <Container className=" mb-5">
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
            <Form />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
