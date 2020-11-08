import { Grid, Box } from "grommet"
export default function Search() {
  return (
    <Grid
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] },
      ]}
      a11yTitle="olá"
      fill
    >
      <Box gridArea="header" background="brand" />
      <Box gridArea="nav" background="light-5" />
      <Box gridArea="main" background="light-2" />
    </Grid>
  )
}
