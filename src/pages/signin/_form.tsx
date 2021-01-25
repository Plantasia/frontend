import { Dispatch, SetStateAction } from "react"
import { Button } from "react-bootstrap"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import {
  Title,
  Form,
  Label,
  FormWrapper,
  AuxLink,
  SocialAuths,
  SocialAuthsIcons,
} from "@/src/styles/components/Auth"

interface ILoginForm {
  handleSubmitLogin(): void
  handleFacebookAuth(): void
  handleGoogleAuth(): void
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  email: string
}

export default function LoginForm({
  email,
  password,
  handleSubmitLogin,
  setEmail,
  setPassword,
  handleFacebookAuth,
  handleGoogleAuth,
}: ILoginForm) {
  return (
    <FormWrapper>
      <Title>
        Bem-vindo! <br />
        <span>Entre na comunidade.</span>
      </Title>
      <Form>
        <Form.Group>
          <Label>Email</Label>
          <Form.Control
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Senha</Label>
          <Form.Control
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></Form.Control>
          <Form.Check type="checkbox" label="Manter logado" />
        </Form.Group>

        <Button variant="primary" size="lg" onClick={handleSubmitLogin}>
          Logar
        </Button>

        <Form.Group>
          <AuxLink href="/forgot-password">Esqueceu sua senha?</AuxLink>
        </Form.Group>
      </Form>

      <SocialAuths>
        <h5>Entre com</h5>
        <SocialAuthsIcons>
          <FaGoogle
            size="3em"
            onClick={handleGoogleAuth}
            style={{ cursor: "pointer" }}
          />
          <FaFacebook
            size="3em"
            onClick={handleFacebookAuth}
            style={{ cursor: "pointer" }}
          />
        </SocialAuthsIcons>
      </SocialAuths>
    </FormWrapper>
  )
}
