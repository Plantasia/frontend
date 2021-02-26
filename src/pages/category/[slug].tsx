import { Header } from "@components"
import { Button } from "react-bootstrap"
import { useRouter } from "next/router"

export default function ListCategories() {
  const router = useRouter()
  const { id, slug } = router.query
  console.log(router.query)

  return (
    <>
      <Header>
        {{
          right: <Button></Button>,
        }}
      </Header>
      Tópico: {slug}
    </>
  )
}
