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
  Paragraph,
} from "grommet"
import { Facebook, Google } from "grommet-icons"

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
      <Row className="my-5 ">
        <Col xs="12" md="7" className="">
          <Box justify="center" fill="vertical">
            <LoginSVG />
          </Box>
        </Col>
        <Col xs="12" md="5">
          <Card
            fill="vertical"
            justify="center"
            pad="medium"
            elevation="xsmall"
          >
            <Form
              style={{
                borderBottom: "1px solid black",
                paddingBottom: "10px",
              }}
            >
              <Box gap="small">
                <Heading size="small">Registrar</Heading>
                <FormField label="Email" type="email">
                  <TextInput placeholder="exemplo@gmail.com" />
                </FormField>

                <FormField label="Senha">
                  <TextInput placeholder="*******" type="password" />
                </FormField>

                <FormField label="Confirmação de senha">
                  <TextInput placeholder="*******" type="password" />
                </FormField>

                <CheckBox
                  name="cboxTerms"
                  checked={keepLogged}
                  onChange={event => setKeepLogged(event.target.checked)}
                  label={
                    <Box
                      style={{ fontSize: "0.9em" }}
                      fill="horizontal"
                      flex
                      direction="row"
                    >
                      Concordo com os&nbsp;
                      <Anchor href="/terms">termos de usos</Anchor>
                    </Box>
                  }
                />

                <Button primary label="cadastrar" type="submit" size="large" />
                <Anchor href="/forgot-password" color="neutral-1">
                  Esqueceu sua senha?
                </Anchor>
              </Box>
            </Form>
            <Paragraph alignSelf="center">Registra-se com</Paragraph>
            <Box direction="row" justify="center">
              <Button icon={<Facebook />} hoverIndicator={{ color: "red" }} />
              <Button icon={<Google />} />
            </Box>
          </Card>
        </Col>
      </Row>

      <Footer></Footer>
    </>
  )
}
