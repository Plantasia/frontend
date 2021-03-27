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
interface ToggleProps {
  onClick?(event): void
}
const Avatar = styled.img`
  border-radius: 50%;
  cursor: pointer;
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
  ({ onClick }, ref) => (
    <DropdownMenuWrapper
      ref={ref}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
    >
      <Avatar src="https://picsum.photos/50" />
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
}
export default function MenuDropdown({ logout }: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Toggle}
        id="dropdown-custom-components"
      ></Dropdown.Toggle>
      <Dropdown.Menu align={{ sm: "right" }}>
        <CustomDropdownItem>
          Meu perfil <FaUser />
        </CustomDropdownItem>
        <CustomDropdownItem>
          Configurações <FaCog />
        </CustomDropdownItem>
        <Dropdown.Divider />
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
