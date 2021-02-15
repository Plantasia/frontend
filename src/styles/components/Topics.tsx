import styled from "styled-components"
import { Col, ColProps } from "react-bootstrap"
import { ReactHTMLElement } from "react"

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
  box-shadow: -1px 1.5px 3px 0px #0000004f;
  margin-bottom: 1em;
  border-radius: 5px;
`

export const TopicDescription = styled.p.attrs({
  className: "text-break",
})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const TopicContent = styled(Col).attrs(
  (): ColProps => ({
    xs: "12",
    lg: "8",
  })
)``

export const TopicStats = styled(Col).attrs(
  (): ColProps => ({
    xs: "12",
    lg: "4",
    className: "d-flex justify-content-between",
  })
)``
