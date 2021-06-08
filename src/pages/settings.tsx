import React, { useEffect, useState } from "react"
import { AppLayout, ChangePasswordModal } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { Button, Row, Col, Image, Form } from "react-bootstrap"
import { useRouter } from "next/router"
import { SelfApi, ServerSideApi } from "@src/services/Api"
import { AuxLink } from "@src/styles/components/Auth"
import { withIronSession } from "next-iron-session"
import { sessionOptions } from "./api/_iron-session/helpers"

export default function Settings(user) {
  console.log(user)
  const router = useRouter()
  const [modalVisibility, setModalvisibility] = useState(false)
  const [name, setName] = useState(user.name)
  const [media, setMedia] = useState<File>({ name: user.avatar } as File)
  const [bio, setBio] = useState(user.bio)
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)

  const handleSaveUser = async () => {
    const formData = new FormData()
    media.size && formData.append("file", media, media.name)
    formData.append("name", name)
    formData.append("bio", bio)
    try {
      const { data } = await SelfApi.post("/api/user", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      console.log(data)
      setAvatarUrl(data.avatarUrl)
      setBio(data.bio)
      setName(data.name)
      window.flash("Perfil alterado com sucesso", data.type)
    } catch ({ response }) {
      window.flash(response.data.message, response.data.type)
    }
  }

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
                  <Image src={avatarUrl} roundedCircle fluid />
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
                        id="topicForm.avatar"
                        label={media?.name || ""}
                        data-browse="Carregar foto"
                        custom
                        formEncType="multipart/form-data"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={({ target: { files } }) => {
                          setMedia(files[0])
                        }}
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
