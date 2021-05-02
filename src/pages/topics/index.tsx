import { Pagination, Row, Button, Col } from "react-bootstrap"
import { Layout, SEO } from "@components"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ComponentProps } from "@utils/types"
import { TopicHeader } from "@styled/Topics"
import { GetTopics } from "@src/services/Topics"
import { ListItem } from "./_ListTopicItem"

export interface ListTopicsProps {
  topics: ComponentProps.TopicItemProps[]
  pages?: number | string
  currentPage?: number | string | null
  nextPage?: number | string | null
  prevPage?: number | string | null
}
export default function listTopics({ topics, pages }: ListTopicsProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(
    parseInt(router.query.page as string) || 1
  )

  const paginationItems = new Array(pages).fill(1).map((x, index) => index + 1)

  useEffect(() => {}, [])

  function handleNewTopic() {
    router.push("/category")
  }

  return (
    <Layout>
      <SEO title="Categorias" />

      <Row>
        <TopicHeader>
          <h2>Tópicos</h2>
          <Button variant="primary" onClick={handleNewTopic}>
            novo tópico
          </Button>
        </TopicHeader>
        <Col xs="12">
          {topics.map((item, index) => (
            <ListItem {...item} key={index} />
          ))}
        </Col>
      </Row>

      <Pagination className="d-flex justify-content-center">
        {paginationItems.map(page => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => {
              setCurrentPage(page)
              router.push(`/topics?page=${page}`)
            }}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<ListTopicsProps> = async context => {
  const {
    query: { page },
  } = context
  return {
    props: await GetTopics(page as string),
  }
}
