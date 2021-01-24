import { Container, Col, Row } from "reactstrap"

import Image from "next/image"
import { Header } from "@components"
import LoginForm from "./_form"
import { useState } from "react"

export default function Login() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function handleLoginSubmit(): Promise<void> {}

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
            <LoginForm
              handleSubmitLogin={handleLoginSubmit}
              password={password}
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
