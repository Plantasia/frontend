import { Dispatch, SetStateAction } from "react"
import { Button } from "react-bootstrap"

import { Title, Form, FormWrapper } from "@src/styles/components/Auth"

interface IsPassWordResetForm {
  password: string
  passwordConfirmation: string
  setToken: string,
  setPassword: Dispatch<SetStateAction<string>>
  setPasswordConfirmation: Dispatch<SetStateAction<string>>
  handlePasswordReset(): void
}

export default function NewPasswordForm({
  password,
  passwordConfirmation,
  setPassword,
  setPasswordConfirmation,
  setToken,
  handlePasswordReset,
}: IsPassWordResetForm) {
  return (
    <FormWrapper>
      <Title>
        <span style={{ fontSize: "25px" }}>Renovação de Senha</span>
      </Title>
      <Form>
        <Form.Group className="mt-4 mb-1">
          <Form.Control
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Digite sua nova senha"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mt-1 mb-5">
          <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={({ target: { value } }) => setPasswordConfirmation(value)}
            placeholder="Confirme sua senha"
          ></Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          onClick={handlePasswordReset}
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </FormWrapper>
  )
}
