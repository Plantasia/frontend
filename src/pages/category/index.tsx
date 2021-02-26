import { Header } from "@components"
import { InlineGap } from "@styled/Shared"
import { ListCategoryItem, CategoryProps } from "./_categoryItem"
import { Button, Row, Col } from "react-bootstrap"
import { GetServerSideProps } from "next"

export interface ListCategoriesProps {
  categories: CategoryProps[]
}

export default function ListCategories({ categories }: ListCategoriesProps) {
  return (
    <>
      <Header>
        {{
          right: <Button>Registre-se aqui</Button>,
        }}
      </Header>
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
      {categories.map(category => (
        <ListCategoryItem {...category} />
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ListCategoriesProps> = async context => {
  const category: CategoryProps = {
    name: "Hortaliças",
    description:
      "Et ut esse irure tempor eu aliquip labore proident duis ullamco proident. Aliqua in est cillum. Amet voluptate laborum Lorem exercitation commodo ",
    repliesCount: 10,
    topicsCount: 20,
    lastActivity: "10/04/2021",
    lastTopic: {
      author: { name: "matheus faggi", id: "2012930909asbh1bhnwb10" },
      id: "12381297812738123",
      title: "Cuidados com alecrim",
    },
  }
  const categories = new Array(5).fill(category)

  return {
    props: { categories },
  }
}
