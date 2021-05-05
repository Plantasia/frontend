import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useRouter } from "next/router"

export const RequestAuthModal = ({ visible, onHide }) => {
  const router = useRouter()
  return (
    <Modal show={visible} onHide={onHide}>
      <Modal.Header>Realize o login</Modal.Header>
      <Modal.Body>
        É necessário realizar o login para realizar esta ação
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary-outline" onClick={onHide}>
          cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            router.push("/signin")
          }}
        >
          entrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
