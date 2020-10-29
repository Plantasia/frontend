import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { useState } from "react"

const CategoryModal = dynamic(
  () => import("../../../components/CategoryModal"),
  { loading: () => <p>Carregando...</p>, ssr: false }
)

export default function Category() {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)
  function handleClick() {
    setIsModalVisible(true)
  }
  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleClick}>Show Modal</button>

      {isModalVisible && <CategoryModal />}
    </div>
  )
}
