import React, { useContext } from "react"
import { Dropdown } from "react-bootstrap"
import propTypes from "prop-types"
import styled from "styled-components"
import {
  FaRegCaretSquareDown,
  FaSignOutAlt,
  FaCog,
  FaUser,
} from "react-icons/fa"
import { InlineGap } from "@styled/Shared"
import { useRouter } from "next/router"
import axios from "axios"
import { useUser } from "@src/lib"
interface ToggleProps {
  onClick?(event): void
  avatar: string
}
const Avatar = styled.img`
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
`
const DropdownMenuWrapper = styled(InlineGap)`
  cursor: pointer;
`
const CustomDropdownItem = styled(Dropdown.Item)`
  display: inline-flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`

// eslint-disable-next-line no-undef
const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  ({ onClick, avatar }, ref) => (
    <DropdownMenuWrapper
      ref={ref}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
    >
      <Avatar src={avatar} />
      <FaRegCaretSquareDown />
    </DropdownMenuWrapper>
  )
)
Toggle.displayName = "ToggleMenu"
Toggle.propTypes = {
  onClick: propTypes.func,
}

type Props = {
  logout(): void
  userAvatar: string
}
export function MenuDropdown() {
  const router = useRouter()
  const { user, mutateUser } = useUser()
  // console.log({ user })
  const logout = async () => {
    // eslint-disable-next-line no-undef
    router.push("/")
    mutateUser(await (await axios.post("/api/logout")).data, false)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Toggle}
        id="dropdown-custom-components"
        avatar={user.avatarUrl}
      ></Dropdown.Toggle>
      <Dropdown.Menu align={{ sm: "right" }}>
        <CustomDropdownItem
          onClick={() => {
            router.push("/settings")
          }}
        >
          Configurações <FaCog />
        </CustomDropdownItem>
        <CustomDropdownItem
          onClick={() => {
            logout()
          }}
        >
          Sair <FaSignOutAlt />
        </CustomDropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}
