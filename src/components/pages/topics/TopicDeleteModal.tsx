import React from "react"
import { Modal, Button } from "react-bootstrap"

interface Props {
  visible: boolean
  onHide(): void
  action(): void
}
export const TopicDeleteModal: React.FC<Props> = ({
  visible,
  onHide,
  action,
}) => {
  return (
    <Modal show={visible} onHide={onHide}>
      <Modal.Header>Realize o login</Modal.Header>
      <Modal.Body>Você tem certeza que deseja exluir este tópico</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          cancelar
        </Button>
        <Button variant="primary" onClick={action}>
          excluir
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
