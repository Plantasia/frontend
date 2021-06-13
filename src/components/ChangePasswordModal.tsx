import React, { useState } from "react"
import { SelfApi } from "@src/services/Api"
import { Form, Modal, ModalProps, Button } from "react-bootstrap"

const ChangePasswordModal: React.FC<
  ModalProps & { show: boolean; onHide(): void }
> = ({ show, onHide }) => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [unmatch, setUnmatch] = useState<boolean>(false)
  const [confirmationPassword, setConfirmationPassword] = useState("")

  const handleChangePassword = async () => {
    if (newPassword !== confirmationPassword) return setUnmatch(true)
    onHide()
    try {
      const {
        data: { message },
      } = await SelfApi.patch("/api/user", {
        oldPassword,
        newPassword,
      })
      window.flash(message, "success")
    } catch ({ response }) {
      window.flash(response.data.message, "danger")
    }
  }

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
              value={oldPassword}
              onChange={({ target: { value } }) => setOldPassword(value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Digite sua nova senha</Form.Label>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={({ target: { value } }) => setNewPassword(value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirme a sua nova senha</Form.Label>
            <Form.Control
              type="password"
              value={confirmationPassword}
              onChange={({ target: { value } }) => {
                setUnmatch(false)
                setConfirmationPassword(value)
              }}
              isInvalid={unmatch}
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
