import { ReactNode } from "react"

import { Col, Row, Button, RowProps } from "react-bootstrap"
import { useRouter } from "next/router"
import styled from "styled-components"
import useUser from "@src/lib/useUser"
import axios from "axios"
import { MenuDropdown } from "@components"
import { InlineGap } from "@src/styles/components/Shared"
// Jogar para pasta de styles dps
const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "py-3 mb-3 d-flex align-items-center",
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

export function Header({ callToAction: { onClick, label, variant } }: Props) {
  const router = useRouter()
  const { user, mutateUser } = useUser()
  // console.log({ user })
  const logout = async () => {
    // eslint-disable-next-line no-undef
    mutateUser(await (await axios.post("/api/logout")).data, false)
  }

  return (
    <HeaderWrapper>
      <Col onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
        <h1>plantasia</h1>
      </Col>
      {user?.isLoggedIn && (
        <MenuDropdown logout={logout} userAvatar={user.avatar} />
      )}
      {!user?.isLoggedIn && (
        <Col xs="3" className="d-flex justify-content-end">
          <InlineGap>
            <Button
              className="mr-2"
              variant={variant || "outline-primary"}
              onClick={() => {
                onClick()
              }}
            >
              {label}
            </Button>
            <Button
              onClick={() => {
                router.push("/signin")
              }}
            >
              entrar
            </Button>
          </InlineGap>
        </Col>
      )}
    </HeaderWrapper>
  )
}
