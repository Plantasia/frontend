import { Col, Row } from "react-bootstrap"
import { SEO, AuthLayout } from "@components"
import SignUpForm from "../components/pages/signup/form"
import { useState } from "react"
import { useRouter } from "next/router"
import { SelfApi } from "@src/services/Api"
import { SelfApiDTO } from "@utils/types"
import { TermsOfUseModal } from "@src/components/TermsOfUseModal"

export default function SignUp() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [termsOfUse, setTermsOfUse] = useState<boolean>(false)

  const router = useRouter()

  async function handleSubmitSignUp(): Promise<void> {
    if (!termsOfUse)
      return window.flash("É preciso aceitar os termos de uso", "danger")
    try {
      const { data } = await SelfApi.post<SelfApiDTO.FlashMessage>(
        "/api/signup",
        {
          name,
          email,
          password,
        }
      )
      window.flash(data.message, data.type)
      router.push(`/signin?email=${email}`)
    } catch (error) {
      window.flash(error.response.data.message, "danger")
    }
  }
  async function handleFacebookAuth(): Promise<void> {}
  async function handleGoogleAuth(): Promise<void> {}

  return (
    <AuthLayout>
      <TermsOfUseModal
        visible={modalVisibility}
        onHide={() => {
          setTermsOfUse(false)
          setModalVisibility(false)
        }}
        acceptTerms={() => {
          setTermsOfUse(true)
          setModalVisibility(false)
        }}
      />
      <SEO title="Login" />
      <Row className="d-flex align-items-center vh-100 justify-content-between">
        <Col className="d-none d-md-block" md="8">
          <object
            className="w-100"
            type="image/svg+xml"
            data="/assets/img/authentication.svg"
          ></object>
        </Col>

        <Col
          xs={{ span: 12, order: 2 }}
          md="4"
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
          <SignUpForm
            showModal={() => {
              setModalVisibility(true)
            }}
            handleSubmitSignUp={handleSubmitSignUp}
            handleFacebookAuth={handleFacebookAuth}
            handleGoogleAuth={handleGoogleAuth}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
            setAcceptedTerms={setTermsOfUse}
            acceptedTerms={termsOfUse}
          />
        </Col>
      </Row>
    </AuthLayout>
  )
}
