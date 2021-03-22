import { Col, Row } from "react-bootstrap"
import { Header, SEO } from "@components"
import SignInForm from "./_form"
import { useState, useEffect, useContext } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"
import { UserContext } from "@contexts/User"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { signIn, userToken } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (userToken) router.push("/topics")
  }, [])

  async function handleLoginSubmit(): Promise<void> {
    await signIn(email, password)
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
