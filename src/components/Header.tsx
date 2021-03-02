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
import { UserContext } from "@contexts/User"
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
type NamedChildrenSlots = {
  left?: ReactNode
  middle?: ReactNode
  right?: ReactNode
}
interface Props {
  children?: NamedChildrenSlots
  currentUser?: User
  actionText?: string
}

export default function Header({ currentUser, children }: Props) {
  const { left, middle, right } = children
  const { user, storeUser } = useContext(UserContext)

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
        {!middle ? (
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
        ) : (
          middle
        )}
      </Col>

      <Col xs="3" className="d-flex justify-content-end">
        {!right ? (
          Object.keys(user).length === 0 ? (
            <Button
              variant="outline-primary"
              onClick={() => {
                storeUser({ id: "teste", name: "teste" })
              }}
            >
              registre-se
            </Button>
          ) : (
            <MenuDropdown />
          )
        ) : (
          right
        )}
      </Col>
    </HeaderWrapper>
  )
}
