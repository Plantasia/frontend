import {
  Header,
  BoxTypes,
  Box,
  Heading,
  TextInput,
  Nav,
  Anchor,
  AnchorProps,
} from "grommet"
import { Search } from "grommet-icons"
import React from "react"

import styled from "styled-components"
import { gridAreasCommon } from "../types/GridTypes"

const Container = styled(Header).attrs(
  (): BoxTypes => ({
    background: "white",
    border: { side: "bottom" },
    gap: "xsmall",
    gridArea: gridAreasCommon.Header,
  })
)``

const ContainerSearchInput = styled(Box).attrs(
  (): BoxTypes => ({
    width: "medium",
    align: "center",
    gap: "small",
  })
)``

const Logo = ({ onClick }: BoxTypes) => (
  <Box onClick={onClick}>
    <Heading>Plantasia</Heading>
  </Box>
)

const SearchInput = ({ ...props }) => {
  return <TextInput type="search" icon={<Search />} {...props} />
}

const Navigation = styled(Nav).attrs(
  (): BoxTypes => ({
    direction: "row",
    pad: "medium",
    gap: "medium",
    align: "center",
  })
)``

const RegisterButton = ({ ...props }: AnchorProps) => (
  <Anchor
    label={
      <Box
        border={{ side: "all" }}
        pad={{ vertical: "5px", horizontal: "10px" }}
      >
        <span>Registrar-se</span>
      </Box>
    }
    {...props}
  />
)
export {
  Container,
  ContainerSearchInput,
  Logo,
  SearchInput,
  Navigation,
  RegisterButton,
}
