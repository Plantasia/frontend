import { Container } from "reactstrap"

import { Header } from "@components"
import CategoryListingOneItem from "../components/CategoryListingItem"
import CategoryBeforeItems from "@components/CategoryBeforeItems"

export default function ListCategories() {
  return (
    <>
      <Container>
        <Header actionText="Registre-se" />
      </Container>

      <CategoryBeforeItems />

      <CategoryListingOneItem />
      <CategoryListingOneItem />
    </>
  )
}
