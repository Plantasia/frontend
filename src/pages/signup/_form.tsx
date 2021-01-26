import { Dispatch, SetStateAction } from "react"
import { Button } from "react-bootstrap"
import {
  Title,
  Form,
  Label,
  FormWrapper,
  AuxLink,
  SocialAuths,
  SocialAuthsIcons,
  TermsCheck,
  GoogleIcon,
  FacebookIcon,
} from "@/src/styles/components/Auth"

interface ILoginForm {
  handleSubmitLogin(): void
  handleFacebookAuth(): void
  handleGoogleAuth(): void
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setName: Dispatch<SetStateAction<string>>
  password: string
  email: string
  name: string
}

export default function LoginForm({
  handleSubmitLogin,
  handleFacebookAuth,
  handleGoogleAuth,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
}: ILoginForm) {
  return (
    <FormWrapper>
      <Title>
        Bem-vindo, <br />
        <span>cadastre-se já!</span>
      </Title>
      <Form>
        <Form.Group>
          <Label>Nome</Label>
          <Form.Control
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="digite o seu nome"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Email</Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="digite o seu email"
            onChange={({ target: { value } }) => setEmail(value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Senha</Label>
          <Form.Control
            placeholder="digite uma senha"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <TermsCheck>
            <TermsCheck.Input type="checkbox" name="termsCheck" />
            <TermsCheck.Label>
              Declaro que li e concordo com os{" "}
              <a href="/terms">termos de uso</a>
            </TermsCheck.Label>
          </TermsCheck>
        </Form.Group>

        <Button variant="primary" size="lg" onClick={handleSubmitLogin}>
          Logar
        </Button>

        <Form.Group>
          <AuxLink href="/signin">Já possui conta?</AuxLink>
        </Form.Group>
      </Form>
      <SocialAuths>
        <h5>Cadastre-se com</h5>
        <SocialAuthsIcons>
          <GoogleIcon onClick={handleGoogleAuth} />
          <FacebookIcon onClick={handleFacebookAuth} />
        </SocialAuthsIcons>
      </SocialAuths>
    </FormWrapper>
  )
}
