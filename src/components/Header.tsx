import { Heading, Keyboard, TextInput, Box, Anchor, Nav } from "grommet"
import { Search } from "grommet-icons"
import { useRouter } from "next/router"
import { ILayoutHeader } from "@/components/types/Header"
import { Container } from "@/components/layouts/Header"

export default function PlantasiaHeader({
  inputSearch = "",
  setInputSearch,
}: ILayoutHeader) {
  const router = useRouter()

  return (
    <Container>
      {/* LOGO */}
      <Box
        onClick={() => {
          router.push("/")
        }}
      >
        <Heading>Plantasia</Heading>
      </Box>

      {/* SEARCH INPUT */}
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
        <Anchor label="Entrar" href="/login" />
        <Anchor
          label={
            <Box
              border={{ side: "all" }}
              pad={{ vertical: "5px", horizontal: "10px" }}
            >
              <span>Registrar-se</span>
            </Box>
          }
          href="/register"
        />
      </Nav>
    </Container>
  )
}
