import { Col, Row, Button } from "react-bootstrap"

import { Header, SEO } from "@components"
import SignUpForm from "./_form"
import { useState } from "react"
import AuthImage from "@/src/assets/AuthImage"
import { useRouter } from "next/router"

export default function SignUp() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
                router.push("/signin")
              }}
            >
              Entrar
            </Button>
          ),
        }}
      </Header>
      <Row className="">
        <Col xs="7">
          <AuthImage />
        </Col>

        <Col xs="5">
          <SignUpForm
            handleSubmitLogin={handleLoginSubmit}
            handleFacebookAuth={handleFacebookAuth}
            handleGoogleAuth={handleGoogleAuth}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
          />
        </Col>
      </Row>
    </>
  )
}
