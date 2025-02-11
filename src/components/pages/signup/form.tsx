import { Dispatch, SetStateAction } from "react"
import { Button, Alert } from "react-bootstrap"
import {
  Title,
  Form,
  Label,
  FormWrapper,
  SocialAuths,
  SocialAuthsIcons,
  TermsCheck,
  GoogleIcon,
  FacebookIcon,
} from "@src/styles/components/Auth"

interface ISignUpForm {
  handleSubmitSignUp(): void
  handleFacebookAuth(): void
  handleGoogleAuth(): void
  showModal(): void
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setName: Dispatch<SetStateAction<string>>
  setAcceptedTerms: Dispatch<SetStateAction<boolean>>
  password: string
  email: string
  name: string
  acceptedTerms: boolean
}

export default function SignUpForm({
  handleSubmitSignUp,
  handleFacebookAuth,
  handleGoogleAuth,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  showModal,
  setAcceptedTerms,
  acceptedTerms,
}: ISignUpForm) {
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
            key="name"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="digite o seu nome"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Email</Label>
          <Form.Control
            key="email"
            type="email"
            value={email}
            placeholder="digite o seu email"
            onChange={({ target: { value } }) => setEmail(value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Label>Senha</Label>
          <Form.Control
            key="password"
            placeholder="digite uma senha"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <TermsCheck>
            <TermsCheck.Input
              type="checkbox"
              name="termsCheck"
              checked={acceptedTerms}
              onClick={() => {
                showModal()
              }}
            />
            <TermsCheck.Label>
              Declaro que li e concordo com os{" "}
              <a
                href="#"
                onClick={() => {
                  showModal()
                }}
              >
                termos de uso
              </a>
            </TermsCheck.Label>
          </TermsCheck>
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Button variant="outline-primary" as="a" href="/signin">
            Já possuo conta
          </Button>
          <Button
            variant="primary"
            onClick={e => {
              e.preventDefault()
              handleSubmitSignUp()
            }}
          >
            Registrar-se
          </Button>
        </Form.Group>
      </Form>
    </FormWrapper>
  )
}
