import { useState } from "react"
import { Col, Row } from "reactstrap"
import LoginSVG from "@/assets/svg/Login"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Form,
  TextInput,
  Box,
  FormField,
  Button,
  Heading,
  CheckBox,
  Anchor,
  Card,
} from "grommet"

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  const [keepLogged, setKeepLogged] = useState(false)
  return (
    <>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {/* 
        COMPONENTS
        [] BODY, acredito que o body deve ficar aqui. Varia a cada pagina
        [] FOOTER
       */}
      <Row className="my-5">
        <Col xs="12" md="7">
          <LoginSVG />
        </Col>
        <Col xs="12" md="5">
          <Card
            fill="vertical"
            justify="center"
            pad="medium"
            elevation="xsmall"
          >
            <Form>
              <Box gap="small">
                <Heading size="small">Login</Heading>
                <FormField label="Email">
                  <TextInput placeholder="exemplo@gmail.com" />
                </FormField>

                <FormField label="Senha">
                  <TextInput placeholder="*******" type="password" />
                </FormField>

                <CheckBox
                  checked={keepLogged}
                  onChange={event => setKeepLogged(event.target.checked)}
                  label="manter-se logado?"
                ></CheckBox>

                <Button primary label="cadastrar" type="submit" size="large" />
                <Anchor href="/forgot-password" color="neutral-1">
                  Esqueceu sua senha?
                </Anchor>
              </Box>
            </Form>
          </Card>
        </Col>
      </Row>

      <Footer></Footer>
    </>
  )
}
