import styled from "styled-components"
import { Row, RowProps } from "react-bootstrap"

export const InlineGap = styled.div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
`
export const PlantasiaCard = styled(Row).attrs(
  (): RowProps => ({
    className: "pt-3 pb-4 px-1 mb-3",
  })
)`
  filter: drop-shadow(0px 2px 10px rgba(125, 72, 163, 0.13));
  border-radius: 10px;
  background-color: #f5f5f5;
`
