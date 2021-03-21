import { Button, Col, Row } from "react-bootstrap"

import { Header, SEO } from "@components"
import SendNewPassordLinkForm from "./_form"
import { useState } from "react"
import { useRouter } from "next/router"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  async function handleNewPasswordLinkRequest(): Promise<void> {}
  
  return (
    <>
      <SEO title="Login" />
      <Header callToAction={{label:"entrar", onClick:()=>{}}}/>
        
     
      <Row>
        <Col xs="4" />
        <Col xs="4">
          <SendNewPassordLinkForm
            handleNewPasswordLinkRequest={handleNewPasswordLinkRequest}
            email={email}
            setEmail={setEmail}
          />
        </Col>
        <Col xs="4" />
      </Row>
    </>
  )
}
