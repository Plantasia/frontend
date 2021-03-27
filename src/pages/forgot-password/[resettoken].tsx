import { Button, Col, Row } from "react-bootstrap"

import { Header, SEO } from "@components"
import NewPasswordForm from "./_form-new-password"
import { useState } from "react"
import { useRouter } from "next/router"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setpasswordConfirmation] = useState("")
  const router = useRouter()
  async function handlePasswordReset(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />
      <Header callToAction={{ label: "teste", onClick: () => {} }} />
      <Row>
        <Col xs="4" />
        <Col xs="4">
          <NewPasswordForm
            handlePasswordReset={handlePasswordReset}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setpasswordConfirmation}
          />
        </Col>
        <Col xs="4" />
      </Row>
    </>
  )
}
