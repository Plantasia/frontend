import { Alert, Button, Col, Row } from "react-bootstrap"

import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState } from "react"
import AuthImage from "@/src/assets/AuthImage"
import { useRouter } from "next/router"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()
  async function handleLoginSubmit(): Promise<void> {}
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

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
        <Col xs="7">
          <AuthImage />
        </Col>

        <Col xs="5">
          <SignInForm
            handleSubmitLogin={handleLoginSubmit}
            handleFacebookAuth={handleFacebookAuth}
            handleGoogleAuth={handleGoogleAuth}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
          />
        </Col>
      </Row>
    </>
  )
}
