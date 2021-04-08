import { GetServerSideProps } from "next"
import { Header, Layout } from "@components"
import { InlineGap } from "@styled/Shared"
import { ListCategoryItem } from "./_categoryItem"
import { ComponentProps } from "@utils/types"
import { Button, Row, Col } from "react-bootstrap"
import { GetCategories } from "@src/services/Categories"
import { useRouter } from "next/router"
export interface ListCategoriesProps {
  categories: ComponentProps.CategoryProps[]
}

export default function ListCategories({ categories }: ListCategoriesProps) {
  const router = useRouter()
  return (
    <Layout>
      <Row>
        <Col xs="2" className="mb-4">
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
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<ListCategoriesProps> = async context => {
  return {
    props: {
      categories: await GetCategories(),
    },
  }
}
