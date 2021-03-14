import { useContext } from "react"
import { GetServerSideProps } from "next"
import { UserContext } from "@contexts/User"
import { Header } from "@components"
import { InlineGap } from "@styled/Shared"
import { ListCategoryItem, CategoryProps } from "./_categoryItem"
import axios from "axios"
import { Button, Row, Col } from "react-bootstrap"
import { GetCategories } from "@src/services/Categories"
export interface ListCategoriesProps {
  categories: CategoryProps[]
}

export default function ListCategories({ categories }: ListCategoriesProps) {
  const { dispatch } = useContext(UserContext)
  // console.log(categories)
  return (
    <>
      <Header
        callToAction={{
          label: "cadastre-se",
          onClick: () => {
            dispatch({
              type: "success",
            })
          },
        }}
      />
      <Row>
        <Col xs="2">
          <h2>Categorias</h2>
        </Col>
        <Col xs="10" className="d-flex justify-content-end">
          <InlineGap>
            <Button variant="outline-primary">novo tópico</Button>
          </InlineGap>
        </Col>
      </Row>
      {categories &&
        categories.map((category, key) => (
          <ListCategoryItem {...category} key={key} />
        ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ListCategoriesProps> = async context => {
  return {
    props: {
      categories: await GetCategories(),
    },
  }
}
