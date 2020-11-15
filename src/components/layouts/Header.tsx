import { Box, Header, BoxTypes } from "grommet"
import React from "react"

import styled from "styled-components"

class TypesContainer extends React.Component<BoxTypes, {}> {
  render() {
    const { children } = this.props
    return (
      <Header
        background="white"
        border={{ side: "bottom" }}
        gap="xsmall"
        margin={{ bottom: "50px" }}
      >
        {children}
      </Header>
    )
  }
}

const Container = styled(TypesContainer)``

export { Container }
