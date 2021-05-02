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
}
export default function listTopics({ topics }: ListTopicsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = new Array(10).fill(1).map((x, index) => index)
  const router = useRouter()

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
        {pages.map(page => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => {
              setCurrentPage(page)
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
  return {
    props: {
      topics: await GetTopics(1),
    },
  }
}
