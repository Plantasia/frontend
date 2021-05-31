import React, { useState } from "react"
import { Form, Modal, ModalProps, Button } from "react-bootstrap"

const ChangePasswordModal: React.FC<
  ModalProps & { show: boolean; onHide(): void }
> = ({ show, onHide }) => {
  const [password, setPassowrd] = useState("")
  const [newPassword, setNewPassowrd] = useState("")

  const handleChangePassword = async () => {}

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <h3>Altere a sua senha</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Digite sua senha atual</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassowrd(value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Digite sua nova senha</Form.Label>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={({ target: { value } }) => setNewPassowrd(value)}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} variant="outline-primary">
          Cancelar
        </Button>
        <Button onClick={handleChangePassword}>Trocar senha</Button>
      </Modal.Footer>
    </Modal>
  )
}
export { ChangePasswordModal }
