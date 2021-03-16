import { Col, Row } from "react-bootstrap"
import { Header, SEO, LoadingIndicator } from "@components"
import SignInForm from "./_form"
import { useState, useEffect, useContext } from "react"
import AuthImage from "@src/assets/AuthImage"
import { useRouter } from "next/router"
import { UserContext } from "@contexts/User"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const {
    dispatch,
    state: { isLoading, user },
  } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [])

  async function handleLoginSubmit(): Promise<void> {
    dispatch({ type: "request", payload: {} })
    setTimeout(() => {
      dispatch({ type: "success" })
    }, 2000)
  }
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <>
      <SEO title="Login" />
      {isLoading ? (
        <>
          <LoadingIndicator
            autoplay={true}
            loop={true}
            controls={true}
            src="https://assets3.lottiefiles.com/packages/lf20_dW4EWA.json"
            style={{ height: "400px", width: "400px" }}
          />
        </>
      ) : (
        <>
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
      )}
    </>
  )
}
