import { Pagination } from "react-bootstrap"
import { Header, Layout } from "@components"
import { GetServerSideProps } from "next"
import ListTopics from "./_ListTopics"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ComponentProps } from "@utils/types"
import { GetTopics } from "@src/services/Topics"

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
      <ListTopics handleNewTopic={handleNewTopic} data={topics} />
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
  const { query } = context
  console.log("$$$$$$$$$$$")
  console.log(query)

  return {
    props: await GetTopics(query.page)
}
