import { Heading, Keyboard, TextInput, Box, Anchor, Nav } from "grommet"
import { useRouter } from "next/router"
import { ILayoutHeader } from "@/components/types/HeaderTypes"
import {
  Container,
  ContainerSearchInput,
  Logo,
  SearchInput,
} from "@/components/layouts/HeaderLayout"

export default function PlantasiaHeader({
  inputSearch = "",
  setInputSearch,
}: ILayoutHeader) {
  const router = useRouter()
  const handleInputSearchChange = ({ target: { value } }) => {
    setInputSearch(value)
  }
  return (
    <Container>
      <Logo onClick={() => router.push("/")} />

      <ContainerSearchInput>
        <Keyboard onEnter={() => console.log(inputSearch)}>
          <SearchInput value={inputSearch} onChange={handleInputSearchChange} />
        </Keyboard>
      </ContainerSearchInput>

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
