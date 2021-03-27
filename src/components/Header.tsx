import { ReactNode } from "react"

import { Col, Row, Button, RowProps } from "react-bootstrap"
import { useRouter } from "next/router"
import styled from "styled-components"
// Jogar para pasta de styles dps
const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "py-3 mb-4",
  })
)`
  border-bottom: 1px black solid;
`

type CallToAction = {
  label: string
  onClick(): void
  variant?: "primary" | "outline-primary" | "secondary" | "outline-secondary"
}
interface Props {
  callToAction: CallToAction
  title?: ReactNode
}

export default function Header({
  callToAction: { onClick, label, variant },
  title,
}: Props) {
  const router = useRouter()
  return (
    <HeaderWrapper>
      <Col onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
        {/* Inserir logo aqui */}
        {!title ? <h3>Plantasia</h3> : { title }}
      </Col>

      <Col className="d-flex justify-content-end">
        <Button
          variant={variant || "outline-primary"}
          onClick={() => {
            onClick()
          }}
        >
          {label}
        </Button>
      </Col>
    </HeaderWrapper>
  )
}
