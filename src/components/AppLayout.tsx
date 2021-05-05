import React from "react"
import { Container } from "react-bootstrap"
import { Header } from "@components"
import { useRouter } from "next/router"

type Props = {
  route?: string
  buttonLabel?: string
}
export const AppLayout: React.FC<Props> = ({
  children,
  route,
  buttonLabel,
}) => {
  const router = useRouter()

  const handleCallToAction = () => {
    router.push(route || "/signup")
  }
  return (
    <Container>
      <Header
        callToAction={{
          onClick: handleCallToAction,
          label: buttonLabel || "cadastre-se",
        }}
      />
      {children}
    </Container>
  )
}
