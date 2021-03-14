import { useContext } from "react"
import { GetServerSideProps } from "next"
import { UserContext } from "@contexts/User"
import { Header } from "@components"
import { InlineGap } from "@styled/Shared"
import { ListCategoryItem, CategoryProps } from "./_categoryItem"
import axios from "axios"
import { Button, Row, Col } from "react-bootstrap"
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
export interface CategoryAPI {
  name: string
  id: string
  description: string
  authorId: string
  lastComment: {
    // eslint-disable-next-line camelcase
    created_at: string
  }
  qtdeComments?: number
  qtdeTopics: number
  lastTopic: {
    id: string
    name: string
    textBody: string
    imageStore: string
    isActive: boolean
    // eslint-disable-next-line camelcase
    created_at: string
  }
}

export const getServerSideProps: GetServerSideProps<ListCategoriesProps> = async context => {
  const { data } = await axios.get<{ categories: CategoryAPI[] }>(
    "http://backend:3333/forum/categories/"
  )
  console.log("**data")
  console.log(
    data.categories.map(
      ({
        authorId,
        description,
        id,
        lastComment,
        lastTopic,
        name,
        qtdeComments,
        qtdeTopics,
      }) => ({
        id,
        countComments: qtdeComments || 0,
        countTopics: qtdeComments || 0,
        name,
        description,
        lastComment: lastComment === undefined ? "" : lastComment.created_at,
      })
    )
  )
  return {
    props: {
      categories: data.categories.map(
        ({
          authorId,
          description,
          id,
          lastComment,
          lastTopic,
          name,
          qtdeComments,
          qtdeTopics,
        }) => ({
          id,
          countComments: qtdeComments || 0,
          countTopics: qtdeComments || 0,
          name,
          description,
          lastComment: lastComment === undefined ? "" : lastComment.created_at,
        })
      ),
    },
  }
}
