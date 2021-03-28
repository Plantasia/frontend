import { Col, Row } from "react-bootstrap"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"

import useUser from "@src/lib/useUser"

import axios from "axios"
import { BackendDTO } from "@src/services/protocols"
import { stringify } from "querystring"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState<{ message: string; variant: string }>(null)
  const router = useRouter()
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  })

  async function handleLoginSubmit(): Promise<void> {
    try {
      const { data: user, status } = await axios.post<BackendDTO.UserDTO>(
        "/api/login",
        {
          email,
          password,
        }
      )

      if (status === 200) await mutateUser({ ...user, isLoggedIn: true }, true)
    } catch (error) {
      setAlert({ message: error.message, variant: "danger" })
      setInterval(() => {
        setAlert(null)
      }, 3000)
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
            alert={alert}
          />
        </Col>
      </Row>
    </>
  )
}
