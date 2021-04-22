import { Dispatch, SetStateAction, useState } from "react"
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
import ModalForgotPassword from "./_modal-forgot-password"
import { ErrorAlert } from "@components"

interface ISignInForm {
  handleSubmitLogin(): void
  handleFacebookAuth(): void
  handleGoogleAuth(): void
  setPassword: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  email: string
}

export default function SignInForm({
  email,
  password,
  handleSubmitLogin,
  setEmail,
  setPassword,
  handleFacebookAuth,
  handleGoogleAuth,
}: ISignInForm) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <FormWrapper>
      <ModalForgotPassword
        show={modalVisible}
        onHide={() => {
          setModalVisible(false)
        }}
      />
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
            placeholder="digite o seu email"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Label>Senha</Label>
          <Form.Control
            className="mb-2"
            placeholder="digite a sua senha"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          ></Form.Control>
          <AuxLink
            onClick={() => {
              setModalVisible(true)
            }}
          >
            Esqueceu sua senha?
          </AuxLink>
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Button variant="outline-primary" size="lg" as="a" href="/signup">
            Cadastrar-se
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={e => {
              e.preventDefault()
              handleSubmitLogin()
            }}
            type="submit"
          >
            Entrar
          </Button>
        </Form.Group>
      </Form>
      <SocialAuths>
        <h5 className="mb-3">Entre com</h5>
        <SocialAuthsIcons>
          <GoogleIcon onClick={handleGoogleAuth} />
          <FacebookIcon onClick={handleFacebookAuth} />
        </SocialAuthsIcons>
      </SocialAuths>
    </FormWrapper>
  )
}
