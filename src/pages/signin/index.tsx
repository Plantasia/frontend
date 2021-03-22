import { Col, Row } from "react-bootstrap"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState, useEffect, useContext } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"
import { UserContext } from "@contexts/User"
import useUser from "@src/lib/useUser"
import fetchJson from "@src/lib/fetchJson"
import { SelfApi } from "@src/services/Api"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { signIn, userToken } = useContext(UserContext)
  const router = useRouter()
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  })

  async function handleLoginSubmit(): Promise<void> {
    try {
      await mutateUser(
        fetchJson(
          "/api/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          },
          true
        )
      )
    } catch (error) {
      console.error("An unexpected error happened:", error)
    }
  }

  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />

      <Header
        callToAction={{
          label: "Cadastar",
          onClick: () => {
            router.push("/signup")
          },
          variant: "outline-primary",
        }}
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
