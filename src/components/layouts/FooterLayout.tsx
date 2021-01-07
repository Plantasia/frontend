import { BoxProps, Footer } from "grommet"
import styled from "styled-components"
import { gridAreasCommon } from "../types/GridTypes"

const Container = styled(Footer).attrs(
  (): BoxProps => ({
    background: "brand",
    height: "1fr",
    gridArea: gridAreasCommon.Footer,
  })
)``

export { Container }
