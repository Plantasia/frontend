import { Dispatch, SetStateAction } from "react"
import { Button } from "react-bootstrap"

import { Title, Form, FormWrapper } from "@src/styles/components/Auth"

interface IsNewPasswordLinkForm {
  handleNewPasswordLinkRequest(): void
  setEmail: Dispatch<SetStateAction<string>>
  email: string
}

export default function SendNewPassordLinkForm({
  email,
  handleNewPasswordLinkRequest,
  setEmail,
}: IsNewPasswordLinkForm) {
  return (
    <FormWrapper>
      <Title>
        <span>Digite seu e-mail</span>
      </Title>
      <Form>
        <Form.Group className="mt-4 mb-5">
          <Form.Control
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="Seu e-mail usado na conta"
          ></Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          onClick={handleNewPasswordLinkRequest}
          type="submit"
        >
          Enviar link de recuperação
        </Button>
      </Form>
    </FormWrapper>
  )
}
