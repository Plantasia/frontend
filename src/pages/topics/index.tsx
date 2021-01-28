import { Button, Pagination } from "react-bootstrap"
import { Header } from "@components"
import ListTopics from "./_ListTopics"
import { data } from "./_constants"
import { useEffect, useState } from "react"

export default function listTopics() {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = new Array(10).fill(1).map((x, index) => index)

  useEffect(() => {}, [])
  function handleNewTopic() {}
  return (
    <>
      <Header>
        {{
          right: <Button variant="outline-primary">Registre-se aqui </Button>,
        }}
      </Header>
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
