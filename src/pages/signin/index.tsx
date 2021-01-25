import { Container, Col, Row } from "react-bootstrap"

import Image from "next/image"
import { Header } from "@components"
import LoginForm from "./_form"
import { useState } from "react"

export default function Login() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function handleLoginSubmit(): Promise<void> {}

  return (
    <>
      <Header actionText="Registre-se" />
      <Row>
        <Col xs="6">
          <Image
            className="mt-2"
            src="/assets/img_provisoria.png"
            width={750}
            height={600}
          />
          aaaa
        </Col>

        <Col xs="6">
          <LoginForm
            handleSubmitLogin={handleLoginSubmit}
            password={password}
            email={email}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </Col>
      </Row>
    </>
  )
}
