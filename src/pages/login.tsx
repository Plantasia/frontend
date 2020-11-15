import { useState } from "react"
import LoginSVG from "@/assets/svg/Login"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { DesktopGrid } from "@/components/Grid"
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
    <DesktopGrid>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {/* 
        COMPONENTS
        [] BODY, acredito que o body deve ficar aqui. Varia a cada pagina
        [] FOOTER
       */}

      <Box gridArea="sidebar">
        <LoginSVG />
      </Box>
      <Box gridArea="main">
        <Card fill="vertical" justify="center" pad="medium" elevation="xsmall">
          <Form
            style={{
              borderBottom: "1px solid black",
              paddingBottom: "10px",
            }}
          >
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
          <Paragraph alignSelf="center">Logar com</Paragraph>
          <Box direction="row" justify="center">
            <Button icon={<Facebook />} />
            <Button icon={<Google />} />
          </Box>
        </Card>
      </Box>

      <Footer></Footer>
    </DesktopGrid>
  )
}
