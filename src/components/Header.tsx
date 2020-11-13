import { Header, Heading, Keyboard, TextInput, Box, Anchor, Nav } from "grommet"
import { Search } from "grommet-icons"

interface IHeader {
  readonly inputSearch: string
  setInputSearch(value: string): void
}
export default function ({ inputSearch = "", setInputSearch }: IHeader) {
  return (
    <Header
      background="white"
      border={{ side: "bottom" }}
      gap="xsmall"
      margin={{ bottom: "100px" }}
    >
      <Heading>Plantasia</Heading>
      <Box width="medium" align="center" gap="small">
        <Keyboard onEnter={() => console.log(inputSearch)}>
          <TextInput
            type="search"
            icon={<Search />}
            value={inputSearch}
            onChange={({ target: { value } }) => setInputSearch(value)}
          />
        </Keyboard>
      </Box>
      {/* 
        REFATORAR PARA PASSAR ESTADO PARA ESTE COMPONENTE
        [] LOGGED
        [] GUEST
      */}
      <Nav direction="row" pad="medium" gap="medium" align="center">
        <Anchor label="Entrar" />
        <Anchor
          label={
            <Box
              border={{ side: "all" }}
              pad={{ vertical: "5px", horizontal: "10px" }}
            >
              <span>Registrar-se</span>
            </Box>
          }
        />
      </Nav>
    </Header>
  )
}
