import { Col, Row } from "react-bootstrap"
import { Header, SEO } from "@components"
import SignUpForm from "./_form"
import { useState, useContext } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"
import { UserContext } from "@contexts/User"

export default function SignUp() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()
  const { store } = useContext(UserContext)

  async function handleSubmitLogin(): Promise<void> {}
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />
      <Header
        callToAction={{
          label: "Entrar",
          onClick: () => {
            router.push("/signin")
          },
        }}
      />

      <Row className="">
        <Col xs="7">
          <AuthImage />
        </Col>

        <Col xs="5">
          <SignUpForm
            handleSubmitLogin={handleSubmitLogin}
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
