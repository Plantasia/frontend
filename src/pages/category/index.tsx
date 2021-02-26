import { Header } from "@components"
import CategoryListingOneItem from "@components/CategoryListingItem"
import CategoryBeforeItems from "@components/CategoryBeforeItems"
import { Button } from "react-bootstrap"

export default function ListCategories() {
  return (
    <>
      <Header>
        {{
          right: <Button>Registre-se aqui </Button>,
        }}
      </Header>
      <CategoryBeforeItems />

      <CategoryListingOneItem />
      <CategoryListingOneItem />
    </>
  )
}
