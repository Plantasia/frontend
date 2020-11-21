import { useState } from "react"
import LoginSVG from "@/assets/svg/Login"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { DesktopGrid } from "@/components/Grid"
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
import { gridAreasAuth, GridTypes } from "@/components/types/GridTypes"
import { Form, FormCard, FormWrapper } from "@/components/layouts/AuthLayout"

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  const [keepLogged, setKeepLogged] = useState(false)
  return (
    <DesktopGrid gridType={GridTypes.AuthArea}>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <Box gridArea={gridAreasAuth.Banner}>
        <LoginSVG />
      </Box>

      <Box gridArea={gridAreasAuth.Main}>
        <FormCard>
          <Form>
            <FormWrapper>
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
                label="manter logado"
              />

              <Button primary label="cadastrar" type="submit" size="large" />
              <Anchor href="/forgot-password" color="neutral-1">
                Esqueceu sua senha?
              </Anchor>
            </FormWrapper>
          </Form>
          <Paragraph alignSelf="center">Logar com</Paragraph>
          <Box direction="row" justify="center">
            <Button icon={<Facebook />} />
            <Button icon={<Google />} />
          </Box>
        </FormCard>
      </Box>

      <Footer />
    </DesktopGrid>
  )
}
