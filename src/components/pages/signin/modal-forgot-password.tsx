import React, { useState } from "react"
import { Form, Modal, ModalProps, Button } from "react-bootstrap"
import { ClientSideApi } from "@src/services/Api"

const ModalForgotPassword: React.FC<
  ModalProps & { show: boolean; onHide: any }
> = ({ show, onHide }) => {
  const [email, setEmail] = useState("")

  const handleSubmitPasswordRecover = async () => {
    try {
      onHide()
      const {
        data: { message },
      } = await ClientSideApi.post<{ message: string }>("send-recover-email", {
        email,
      })

      window.flash(message, "success")
    } catch ({ response }) {
      onHide()
      const {
        data: { message },
      } = response

      window.flash(message, "danger")
    }
    setEmail("")
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <h3>Redefina sua senha</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              Informe seu email para enviarmos o link de redefinição
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="digite o seu email"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} variant="outline-primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmitPasswordRecover}>Enviar link</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalForgotPassword
