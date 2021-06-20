import React from "react"
import { Pagination, Row, Col } from "react-bootstrap"
import { AppLayout, SEO, RequestAuthModal } from "@components"
import { GetServerSideProps } from "next"
import { useState } from "react"
import { useRouter } from "next/router"
import { ComponentProps } from "@utils/types"
import { TopicHeader } from "@styled/Topics"
import { GetTopics } from "@src/services/Topics"
import { ListItem } from "../../components/pages/topics/topic-item"

export interface ListTopicsProps {
  topics: ComponentProps.TopicItemProps[]
  pages?: number | string
  currentPage?: number | string | null
  nextPage?: number | string | null
  prevPage?: number | string | null
}
export default function listTopics({ topics, pages }: ListTopicsProps) {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(
    +router.query.page || 1
  )
  const paginationItems = new Array(pages).fill(1).map((x, index) => index + 1)

  return (
    <AppLayout>
      <SEO title="Tópicos" />
      <RequestAuthModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
      />
      <Row>
        <TopicHeader>
          <h2>Topicos</h2>
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
              const query = router.query.category
                ? { category: router.query.category, page }
                : { page }
              router.push({
                pathname: "/topics",
                query,
              })
            }}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps<ListTopicsProps> =
  async context => {
    const {
      query: { page, category },
    } = context
    return {
      props: await GetTopics(page as string, category as string),
    }
  }
