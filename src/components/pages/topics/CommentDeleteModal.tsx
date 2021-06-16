import React from "react"
import { Modal, Button } from "react-bootstrap"

export const CommentDeleteModal = ({ visible, onHide, action }) => {
  return (
    <Modal show={visible} onHide={onHide}>
      <Modal.Header>Realize o login</Modal.Header>
      <Modal.Body>Você tem certeza que deseja exluir este tópico</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          cancelar
        </Button>
        <Button variant="primary" onClick={action}>
          entrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
