/* eslint-disable no-undef */
import { Button, Col, Row } from "react-bootstrap"
import api from "../../services/api"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState } from "react"
import AuthImage from "@/src/assets/AuthImage"
import { useRouter } from "next/router"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()
  const token = ""
  async function handleLoginSubmit(): Promise<void> {
    const response = await api
      .post("/signin", { email, password })
      .catch(error => {
        console.log(error)
      })

    if (response) {
      router.push("/category")
      token = response.data.access_token

      window.alert("User logged successfully")
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token)
      }
    }

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
