import { Col, Row } from "react-bootstrap"

import { Header, SEO } from "@components"
import SignUpForm from "./_form"
import { useState } from "react"
import AuthImage from "@/src/assets/AuthImage"

export default function SignUp() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function handleLoginSubmit(): Promise<void> {}
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />
      <Header actionText="Login" />
      <Row>
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
          />
        </Col>
      </Row>
    </>
  )
}
