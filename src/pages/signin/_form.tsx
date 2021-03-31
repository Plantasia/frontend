import { Dispatch, SetStateAction } from "react"
import { Alert, Button } from "react-bootstrap"

import {
  Title,
  Form,
  Label,
  FormWrapper,
  AuxLink,
  SocialAuths,
  SocialAuthsIcons,
  GoogleIcon,
  FacebookIcon,
} from "@src/styles/components/Auth"

interface ISignInForm {
  handleSubmitLogin(): void
  handleFacebookAuth(): void
  handleGoogleAuth(): void
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  email: string
  alert: {
    message: string
    variant: string
  }
}

export default function SignInForm({
  email,
  password,
  handleSubmitLogin,
  setEmail,
  setPassword,
  handleFacebookAuth,
  handleGoogleAuth,
  alert,
}: ISignInForm) {
  return (
    <FormWrapper>
      <Title>
        Bem-vindo! <br />
        <span>Entre na comunidade.</span>
      </Title>
      <Form>
        {alert && <Alert variant={alert.variant}>{alert.message}</Alert>}
        <Form.Group>
          <Label>Email</Label>
          <Form.Control
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="digite o seu email"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Senha</Label>
          <Form.Control
            placeholder="digite a sua senha"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></Form.Control>
          <Form.Check type="checkbox" label="Manter logado" />
        </Form.Group>

        <Button
          variant="primary"
          size="lg"
          onClick={e => {
            e.preventDefault()
            handleSubmitLogin()
          }}
          type="submit"
        >
          Logar
        </Button>

        <Form.Group>
          <AuxLink href="/forgot-password">Esqueceu sua senha?</AuxLink>
        </Form.Group>
      </Form>

      <SocialAuths>
        <h5>Entre com</h5>

        <SocialAuthsIcons>
          <GoogleIcon onClick={handleGoogleAuth} />
          <FacebookIcon onClick={handleFacebookAuth} />
        </SocialAuthsIcons>
      </SocialAuths>
    </FormWrapper>
  )
}
