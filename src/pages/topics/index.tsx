import { Button, Pagination } from "react-bootstrap"
import { Header } from "@components"
import ListTopics from "./_ListTopics"
import { data } from "./_constants"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "@contexts/User"
import { useRouter } from "next/router"

export default function listTopics() {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = new Array(10).fill(1).map((x, index) => index)
  const { storeUser } = useContext(UserContext)
  const router = useRouter()
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
            storeUser({ name: "teste", id: "teste" })
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
