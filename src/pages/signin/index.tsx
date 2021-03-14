import { Button, Col, Row } from "react-bootstrap"
import api from "../../services/api"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState, useEffect, useContext } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"
import { UserContext } from "@contexts/User"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { store } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (!store) {
      router.push("dashboard")
    }
  }, [])

  async function handleLoginSubmit(): Promise<void> {}
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />
      <Header
        callToAction={{
          label: "Entrar",
          onClick: () => {
            router.push("/signup")
          },
        }}
        actionText="Entrar"
      />
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
