import { useRouter } from "next/router"
import { Button, Col } from "react-bootstrap"

export default function HomePage(props) {
  const router = useRouter()
  return (
    <Col className="d-flex justify-content-between align-items-center vh-100">
      <Button
        onClick={() => {
          router.push("/topics")
        }}
      >
        Topicos
      </Button>
      <Button
        onClick={() => {
          router.push("/category")
        }}
      >
        Categorias
      </Button>

      <Button
        onClick={() => {
          router.push("/signin")
        }}
      >
        login
      </Button>

      <Button
        onClick={() => {
          router.push("/signup")
        }}
      >
        cadastro
      </Button>
    </Col>
  )
}
