import { Col, Row } from "react-bootstrap"
import { SEO, AuthLayout } from "@components"
import SignInForm from "./_form"
import { useState } from "react"
import { useRouter } from "next/router"
import useUser from "@src/lib/useUser"
import { SelfApiDTO } from "@utils/types"
import { SelfApi } from "@src/services/Api"

export default function SignIn() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()
  const { mutateUser } = useUser({
    redirectTo: "/category",
    redirectIfFound: true,
  })

  async function handleLoginSubmit(): Promise<void> {
    const { status, data } = await SelfApi.post<SelfApiDTO.FlashMessage>(
      "/api/login",
      {
        email,
        password,
      }
    )
    if (status === 200) mutateUser(await SelfApi.get("/api/user"))
    window.flash(data.message, data.type)
  }

  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <AuthLayout>
      <SEO title="Login" />

      <Row className="d-flex align-items-center h-100">
        <Col
          xs="8"
          className="d-flex flex-column align-items-center justify-content-arround mt-3 "
        >
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/authentication.svg"
          ></object>
        </Col>
        <Col xs="4" className="d-flex flex-column align-items-center">
          <h1
            className="py-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/")
            }}
          >
            Plantasia
          </h1>
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
    </AuthLayout>
  )
}
