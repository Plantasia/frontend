import React from "react"
import { Grid, GridProps } from "grommet"

class DesktopGrid extends React.Component<GridProps, {}> {
  render() {
    const { children } = this.props
    return (
      <Grid
        rows={["1fr", "5fr", "1fr"]}
        areas={[
          ["header", "header", "header"],
          ["sidebar", "sidebar", "main"],
          ["footer", "footer", "footer"],
          ,
        ]}
        gap="medium"
        pad={{ horizontal: "150px" }}
      >
        {children}
      </Grid>
    )
  }
}

export { DesktopGrid }
