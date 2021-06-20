import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { SEO, AuthLayout } from "@components"
import SignInForm from "../components/pages/signin/form"
import { useRouter } from "next/router"
import { useUser } from "@src/lib"
import { SelfApiDTO } from "@utils/types"
import { SelfApi, ServerSideApi } from "@src/services/Api"
import { withIronSession } from "next-iron-session"
import { sessionOptions } from "../lib/iron-session/helpers"

const SignIn: React.FC<{ backRoute: string }> = props => {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState(router.query.email as string)
  const { mutateUser } = useUser({
    redirectTo: props.backRoute,
    redirectIfFound: true,
  })

  async function handleLoginSubmit(): Promise<void> {
    try {
      const { status, data } = await SelfApi.post<SelfApiDTO.FlashMessage>(
        "/api/login",
        {
          email,
          password,
        }
      )
      mutateUser(await SelfApi.get("/api/user"))
      window.flash(data.message, data.type)
    } catch ({ response: data }) {
      window.flash(data.message, data.type)
    }
  }

  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <AuthLayout>
      <SEO title="Login" />

      <Row className="d-flex align-items-center h-100">
        <Col md="8" xs="12" className="d-none d-md-block">
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/authentication.svg"
          ></object>
        </Col>
        <Col
          md="4"
          xs="12"
          className="d-flex flex-column align-items-center mb-5"
        >
          <h1
            className="py-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/")
            }}
          >
            plantasia
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
export default SignIn

export const getServerSideProps = withIronSession(async ({ req, res }) => {
  const jwt: string = req.session.get("jwt")
  const headers = jwt ? { authorization: `Bearer ${jwt}` } : null
  console.log(headers)
  console.log(req.headers)
  try {
    await ServerSideApi.get(`/users/findme`, {
      headers,
    })
    return {
      redirect: { destination: "/category" },
    }
  } catch (error) {
    return {
      props: {
        backRoute: req.headers.referer || "/category",
      },
    }
  }
}, sessionOptions)
