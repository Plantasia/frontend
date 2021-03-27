import { Header } from "@components"

import { useRouter } from "next/router"

export default function ListCategories() {
  const router = useRouter()
  const { id, slug } = router.query
  console.log(router.query)

  return (
    <>
      <Header callToAction={{ label: "Teste", onClick: () => {} }} />
      Tópico: {slug}
    </>
  )
}
