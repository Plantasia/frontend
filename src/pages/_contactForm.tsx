import { Dispatch, SetStateAction } from "react"
import { Button, Row, Col } from "react-bootstrap"

import { Title, Form, Label, FormWrapper } from "@src/styles/components/Auth"

interface ContactForm {
  handleSubmitLogin(): void
  setEmail: Dispatch<SetStateAction<string>>
  setName: Dispatch<SetStateAction<string>>
  setSubject: Dispatch<SetStateAction<string>>
  setMessage: Dispatch<SetStateAction<string>>
  email: string
  name: string
  subject: string
  message: string
}

export default function SignInForm({
  email,
  name,
  subject,
  message,
  handleSubmitLogin,
  setEmail,
  setName,
  setSubject,
  setMessage,
}: ContactForm) {
  return (
    <FormWrapper style={{ background: "unset", boxShadow: "unset" }}>
      <Title style={{ color: "#56537F", fontSize: "25px" }}>
        <span>Fale conosco</span>
      </Title>
      <Form style={{ border: "unset", color: "#56537F" }}>
        <Form.Group>
          <Label style={{ fontSize: "15px" }}>Email</Label>
          <Form.Control
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Label style={{ fontSize: "15px" }}>Nome</Label>
          <Form.Control
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Label style={{ fontSize: "15px" }}>Assunto</Label>
          <Form.Control
            type="textarea"
            value={subject}
            onChange={({ target: { value } }) => setSubject(value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Label style={{ fontSize: "15px" }}>Mensagem</Label>
          <Form.Control
            type="text"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          ></Form.Control>
        </Form.Group>
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmitLogin}
              type="submit"
              style={{
                backgroundColor: "#5B9657",
                borderColor: "unset",
                width: "100%",
              }}
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </FormWrapper>
  )
}
