import { Button, Pagination } from "react-bootstrap"
import { Header } from "@components"
import { GetServerSideProps } from "next"
import ListTopics from "./_ListTopics"
import { data } from "./_constants"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "@contexts/User"
import { useRouter } from "next/router"
import { TopicItemProps } from "@shared/topicProps"
import { GetTopics } from "@src/services/Topics"

export interface ListTopicsProps {
  topics: TopicItemProps[]
}

export default function listTopics({ topics }: ListTopicsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = new Array(10).fill(1).map((x, index) => index)
  const { dispatch } = useContext(UserContext)
  const router = useRouter()
  const data = topics

  useEffect(() => {}, [])

  function handleNewTopic() {
    router.push("/category")
  }
  return (
    <>
      <Header
        callToAction={{
          label: "cadastre-se",
          onClick: () => {
            dispatch({ type: "success" })
          },
        }}
      />
      <ListTopics handleNewTopic={handleNewTopic} data={data} />
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ListTopicsProps> = async context => {
  return {
    props: {
      topics: await GetTopics(),
    },
  }
}
