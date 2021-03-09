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
  owner: boolean
  handleEdit?(): void
  handleDelete?(): void
  handleReport?(): void
  handleQuote?(): void
}
const CommentDropdown: React.FC<CommentDropdownProps> = ({
  owner,
  handleDelete,
  handleEdit,
  handleQuote,
  handleReport,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as={Toggle}
        id="dropdown-custom-components"
      ></Dropdown.Toggle>
      <Dropdown.Menu align={{ sm: "right" }} style={{ textAlign: "right" }}>
        {owner ? (
          <>
            <Dropdown.Item onClick={handleEdit}>editar</Dropdown.Item>
            <Dropdown.Item onClick={handleDelete}>excluir</Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item onClick={handleQuote}>citar</Dropdown.Item>
            <Dropdown.Item onClick={handleReport}>reportar</Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export { CommentDropdown }
