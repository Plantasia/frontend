import { Header } from "@components"
import CategoryListingOneItem from "../components/CategoryListingItem"
import CategoryBeforeItems from "@components/CategoryBeforeItems"

export default function ListCategories() {
  return (
    <>
      <Header actionText="Registre-se" />

      <CategoryBeforeItems />

      <CategoryListingOneItem />
      <CategoryListingOneItem />
    </>
  )
}
