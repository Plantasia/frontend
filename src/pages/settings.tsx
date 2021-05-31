import React, { useEffect, useState } from "react"
import { AppLayout, ChangePasswordModal } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { Button, Row, Col, Image, Form } from "react-bootstrap"
import { useRouter } from "next/router"
import { SelfApi, ServerSideApi } from "@src/services/Api"
import { AuxLink } from "@src/styles/components/Auth"
import { withIronSession } from "next-iron-session"
import { sessionOptions } from "./api/_iron-session/helpers"

export default function Settings(user) {
  const router = useRouter()
  const [modalVisibility, setModalvisibility] = useState(false)
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)

  const handleSaveUser = async () => {
    SelfApi.patch("/api/user", { name, bio })
  }
  console.log(user)

  return (
    <AppLayout>
      <ChangePasswordModal
        show={modalVisibility}
        onHide={() => setModalvisibility(false)}
      />
      <Row>
        <Col xs="12" md={{ span: 6, offset: 3 }}>
          <PlantasiaCard>
            <Col>
              <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                  <Image src={user?.avatar} roundedCircle fluid />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="userForm.name">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        placeholder="digite seu nome"
                        type="text"
                        value={name}
                        onChange={({ currentTarget: { value } }) =>
                          setName(value)
                        }
                      />
                    </Form.Group>
                    <Form.Group controlId="userForm.bio">
                      <Form.Label>Biografia</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={bio}
                        onChange={({ currentTarget: { value } }) =>
                          setBio(value)
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.File
                        id="userForm.avatar"
                        label="foto-perfil.jpg"
                        data-browse="Selecionar foto"
                        custom
                      />
                      <Form.Group>
                        <AuxLink
                          onClick={() => {
                            setModalvisibility(true)
                          }}
                        >
                          Alterar Senha
                        </AuxLink>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-end">
                      <InlineGap>
                        <Button variant="outline-primary">Cancelar</Button>
                        <Button onClick={handleSaveUser}>Salvar</Button>
                      </InlineGap>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Col>
          </PlantasiaCard>
        </Col>
      </Row>
    </AppLayout>
  )
}

export const getServerSideProps = withIronSession(async ({ req, res }) => {
  const jwt: string = req.session.get("jwt")
  const headers = jwt ? { authorization: `Bearer ${jwt}` } : null
  console.log(headers)

  try {
    const { data: user, status } = await ServerSideApi.get(`/users/findme`, {
      headers,
    })
    console.log(status)
    return {
      props: user,
    }
  } catch (error) {
    return {
      redirect: { destination: "/signin" },
    }
  }
}, sessionOptions)
