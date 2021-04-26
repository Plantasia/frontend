import { Button, Col, Row, Form, FormProps } from "react-bootstrap"
import styled from "styled-components"
import { SEO } from "@components"
import { useState } from "react"
import { useRouter } from "next/router"
import { ClientSideApi } from "@src/services/Api"
import Layout from "@src/components/AuthLayout"

export const FormWrapper = styled(Form).attrs(
  (): FormProps => ({
    className: "py-5 px-4",
  })
)`
  background-color: white;
  box-shadow: 0 0 15px #c4c4c4;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")
  const router = useRouter()
  const { token } = router.query
  async function handleResetPassword(): Promise<void> {
    try {
      const { data } = await ClientSideApi.patch<{ message: string }>(
        `/reset-password/${token}`,
        { password, passwordConfirmation: confirmationPassword }
      )
      window.flash(data.message, "success")
    } catch (error) {
      window.flash(error.message, "danger")
    }
  }
  console.log(router.query.token)
  return (
    <Layout>
      <SEO title="Login" />
      <Row className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1
          className="py-3"
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/")
          }}
        >
          Plantasia
        </h1>
        <Col xs="5">
          <FormWrapper className="d-flex flex-column justify-content-between h-75">
            <Form.Label className="d-flex mb-3">
              <h2>Redefinição de senha</h2>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Digite sua nova senha"
                value={password}
                type="password"
                onChange={({ target: { value } }) => setPassword(value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Confirme sua nova senha"
                value={confirmationPassword}
                type="password"
                onChange={({ target: { value } }) =>
                  setConfirmationPassword(value)
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={handleResetPassword}>
                Trocar senha
              </Button>
            </Form.Group>
          </FormWrapper>
        </Col>
      </Row>
    </Layout>
  )
}
