import styled from "styled-components"
import { Box, Card, BoxTypes, Form as GrommetForm } from "grommet"

export const FormCard = styled(Card).attrs(
  (): BoxTypes => ({
    fill: "vertical",
    justify: "start",
    pad: { vertical: "large", horizontal: "medium" },
    elevation: "xsmall",
  })
)``

export const Form = styled(GrommetForm)`
  border-bottom: 1px solid black;
  padding-bottom: 30px;
`

export const FormWrapper = styled(Box).attrs(
  (): BoxTypes => ({
    gap: "small",
  })
)``
