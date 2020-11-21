import React, { useContext } from "react"
import { Grid, ResponsiveContext } from "grommet"
import { IGrid, TypesAreas } from "@/components/types/GridTypes"

const DesktopGrid = ({ gridType, children }: IGrid) => {
  const size = useContext(ResponsiveContext)
  return (
    <Grid
      rows={TypesAreas[gridType].rows}
      areas={TypesAreas[gridType].areas}
      columns={TypesAreas[gridType].columns}
      gap="medium"
      pad={size === "medium" ? { horizontal: "15px" } : { horizontal: "150px" }}
    >
      {children}
    </Grid>
  )
}

export { DesktopGrid }
