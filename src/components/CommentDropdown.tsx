import React from "react"
import { Dropdown } from "react-bootstrap"
import propTypes from "prop-types"
import { FaEllipsisV } from "react-icons/fa"

type ToggleProps = {
  onClick?(event): void
}

// eslint-disable-next-line no-undef
const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  ({ onClick }, ref) => (
    <div
      ref={ref}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
      style={{ cursor: "pointer" }}
    >
      <FaEllipsisV />
    </div>
  )
)
Toggle.displayName = "ToggleMenu"
Toggle.propTypes = {
  onClick: propTypes.func,
}

type CommentDropdownProps = {
  handleEdit?(): void
  handleDelete?(): void
  handleReport?(): void
}
const CommentDropdown: React.FC<CommentDropdownProps> = ({
  handleDelete,
  handleEdit,
  handleReport,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Toggle}
        id="dropdown-custom-components"
      ></Dropdown.Toggle>
      <Dropdown.Menu align={{ sm: "right" }} style={{ textAlign: "right" }}>
        <Dropdown.Item onClick={handleEdit}>editar</Dropdown.Item>
        <Dropdown.Item onClick={handleDelete}>excluir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export { CommentDropdown }
