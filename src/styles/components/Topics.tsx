import styled from "styled-components"
import { Col, ColProps } from "react-bootstrap"

export const TopicHeader = styled(Col).attrs(
  (): ColProps => ({
    className: "d-flex justify-content-between align-items-center mb-3",
    xs: 12,
  })
)``

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
