import { Col, Row, Button } from "react-bootstrap"
import { Header, SEO } from "@components"
import SignUpForm from "./_form"
import { useState } from "react"
import AuthImage from "@/src/assets/AuthImage"
import { useRouter } from "next/router"
import api from "../../services/api"

export default function SignUp() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()

  async function handleSubmitLogin(): Promise<void> {
    const data = {
      email,
      name,
      password,
    }
    const response = await api
      .post("/users", data)
      .then(() => {
        console.log("success")
        window.alert("Usuário criado com sucesso")
        router.push("/signin")
      })
      .catch(error => {
        console.log(error)
        window.alert(
          `Não foi possível criar usuário:${error}\n\n\nTente novamente`
        )
      })
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
                router.push("/signin")
              }}
            >
              Entrar
            </Button>
          ),
        }}
      </Header>
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
