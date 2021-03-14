import { ReactNode, useContext } from "react"

import {
  Col,
  Row,
  Button,
  InputGroup,
  FormControl,
  RowProps,
  ButtonProps,
} from "react-bootstrap"
import { useRouter } from "next/router"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { UserContext, UserConsumer } from "@contexts/User"
import { MenuDropdown } from "@components"
// Jogar para pasta de styles dps
const HeaderWrapper = styled(Row).attrs(
  (): RowProps => ({
    className: "d-flex align-content-center align-items-center pb-3 mb-4",
  })
)`
  margin-top: 1.5em;
  border-bottom: 1px black solid;
`
interface User {
  id: string
  name: string
}
type CallToAction = {
  label: string
  onClick(): void
  variant?: string
}
interface Props {
  callToAction: CallToAction
  currentUser?: User
  actionText?: string
}

export default function Header({ currentUser, callToAction }: Props) {
  const { state } = useContext(UserContext)

  const router = useRouter()
  return (
    <HeaderWrapper>
      <Col
        xs="3"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        <h3>Plantasia</h3>
      </Col>

      <Col xs="6">
        <InputGroup>
          <FormControl
            placeholder="Procure pelo nome de uma planta"
            aria-label="Procure pelo nome de uma planta"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append
            onClick={() => {}}
            className="d-flex justify-content-center align-items-center ml-3"
          >
            <FaSearch size="1.5em" />
          </InputGroup.Append>
        </InputGroup>
      </Col>

      <Col xs="3" className="d-flex justify-content-end">
        {!state.user ? (
          <Button
            variant={callToAction.variant ? null : "outline-primary"}
            onClick={() => {
              callToAction.onClick()
            }}
          >
            {callToAction.label}
          </Button>
        ) : (
          <MenuDropdown />
        )}
      </Col>
    </HeaderWrapper>
  )
}
