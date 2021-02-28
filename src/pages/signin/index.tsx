import { Button, Col, Row } from "react-bootstrap"
import api from "../../services/api"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()
  async function handleLoginSubmit(): Promise<void> {
    const response = await api
      .post("/signin", { email, password })
      .then(() => {
        window.alert("User logged successfully")

        router.push("/topics")
      })

      .catch(error => {
        console.log(error)
      })
    console.log(response)
  }
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
