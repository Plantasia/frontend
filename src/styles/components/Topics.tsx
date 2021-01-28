import styled from "styled-components"
import { Col, ColProps } from "react-bootstrap"

export const TopicHeader = styled(Col).attrs(
  (): ColProps => ({
    className: "d-flex justify-content-between align-items-end mb-5",
    xs: 12,
  })
)``

export const ItemWrapper = styled(Col).attrs(
  (): ColProps => ({
    xs: 12,
    className: "py-2 px-4",
  })
)`
  cursor: pointer;
  box-shadow: -1px 1.5px 3px 0px #0000004f;
  margin-bottom: 1em;
  border-radius: 5px;
`
