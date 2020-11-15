import React from "react"
import { BoxProps, Footer } from "grommet"
import styled from "styled-components"

const TypesFooter: React.FC<BoxProps> = ({ children }) => {
  return (
    <Footer background="brand" height="1fr" gridArea="footer">
      {children}
    </Footer>
  )
}

const Container = styled(TypesFooter)``

export { Container }
