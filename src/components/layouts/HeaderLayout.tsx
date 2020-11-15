import { Header, BoxTypes, Box, Heading, TextInput } from "grommet"
import { Search } from "grommet-icons"
import React from "react"

import styled from "styled-components"

const TypesContainer = ({ children }: BoxTypes) => {
  return (
    <Header
      background="white"
      border={{ side: "bottom" }}
      gap="xsmall"
      margin={{ bottom: "50px" }}
      gridArea="header"
    >
      {children}
    </Header>
  )
}
const Container = styled(TypesContainer)``

const TypesContainerSearchInput = ({ children }: BoxTypes) => {
  return (
    <Box width="medium" align="center" gap="small">
      {children}
    </Box>
  )
}
const ContainerSearchInput = styled(TypesContainerSearchInput)``

const Logo = ({ onClick }: BoxTypes) => (
  <Box onClick={onClick}>
    <Heading>Plantasia</Heading>
  </Box>
)

const SearchInput = ({ ...props }) => {
  return <TextInput type="search" icon={<Search />} {...props} />
}
export { Container, ContainerSearchInput, Logo, SearchInput }
