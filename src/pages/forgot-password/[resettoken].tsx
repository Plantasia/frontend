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
      <Header>
        {{
          right: (
            <Button
              onClick={() => {
                router.push("/signup")
              }}
            >
              Criar conta
            </Button>
          ),
        }}
      </Header>
      <Row>
        <Col xs="4" />
        <Col xs="4">
          <NewPasswordForm
            handlePasswordReset={handlePasswordReset}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setpasswordConfirmation={setpasswordConfirmation}
          />
        </Col>
        <Col xs="4" />
      </Row>
    </>
  )
}
