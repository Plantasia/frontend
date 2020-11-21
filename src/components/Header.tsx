import { Keyboard, Anchor, ResponsiveContext } from "grommet"
import { useRouter } from "next/router"
import { ILayoutHeader } from "@/components/types/HeaderTypes"

import {
  Container,
  ContainerSearchInput,
  Logo,
  SearchInput,
  Navigation,
  RegisterButton,
} from "@/components/layouts/HeaderLayout"
import { useContext } from "react"

export default function PlantasiaHeader({
  inputSearch = "",
  setInputSearch,
}: ILayoutHeader) {
  const router = useRouter()
  const size = useContext(ResponsiveContext)
  const handleInputSearchChange = ({ target: { value } }) => {
    setInputSearch(value)
  }

  return (
    <Container>
      <Logo onClick={() => router.push("/")} />

      {size !== "small" ? (
        <ContainerSearchInput>
          <Keyboard onEnter={() => console.log(inputSearch)}>
            <SearchInput
              value={inputSearch}
              onChange={handleInputSearchChange}
            />
          </Keyboard>
        </ContainerSearchInput>
      ) : null}

      {/* 
        REFATORAR PARA PASSAR ESTADO PARA ESTE COMPONENTE
        [] LOGGED
        [] GUEST
      */}
      <Navigation>
        <Anchor label="Entrar" href="/login" />
        <RegisterButton href="/register" />
      </Navigation>
    </Container>
  )
}
