import { useState } from "react"
import { Col, Row } from "reactstrap"
import LoginSVG from "@/assets/svg/Login"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  TextInput,
  Box,
  FormField,
  Button,
  Heading,
  CheckBox,
  Anchor,
  Paragraph,
} from "grommet"
import { Facebook, Google } from "grommet-icons"
import { DesktopGrid } from "@/components/Grid"
import { gridAreasAuth, GridTypes } from "@/components/types/GridTypes"
import { FormCard, Form, FormWrapper } from "@/components/layouts/AuthLayout"

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  const [keepLogged, setKeepLogged] = useState(false)
  return (
    <DesktopGrid gridType={GridTypes.AuthArea}>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <Box justify="center" fill="vertical" gridArea={gridAreasAuth.Banner}>
        <LoginSVG />
      </Box>
      <Box gridArea={gridAreasAuth.Main}>
        <FormCard>
          <Form>
            <FormWrapper>
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
            </FormWrapper>
          </Form>
          <Paragraph alignSelf="center">Registra-se com</Paragraph>
          <Box direction="row" justify="center">
            <Button icon={<Facebook />} hoverIndicator={{ color: "red" }} />
            <Button icon={<Google />} />
          </Box>
        </FormCard>
      </Box>

      <Footer />
    </DesktopGrid>
  )
}
