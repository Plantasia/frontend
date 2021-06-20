import React, { useState } from "react"
import { AppLayout, ChangePasswordModal, SEO } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { Button, Row, Col, Image, Form } from "react-bootstrap"
import { SelfApi, ServerSideApi } from "@src/services/Api"
import { AuxLink } from "@src/styles/components/Auth"
import { withIronSession } from "next-iron-session"
import { sessionOptions } from "../lib/iron-session/helpers"
import { ComponentProps } from "@src/utils/types"
import { useUser } from "@src/lib"

interface Props {
  user: ComponentProps.UserProps
}

const Settings: React.FC<Props> = ({ user }) => {
  const [modalVisibility, setModalvisibility] = useState(false)
  const [name, setName] = useState(user.name)
  const [media, setMedia] = useState<File>({ name: user.avatar } as File)
  const [bio, setBio] = useState(user.bio)
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)
  const { mutateUser } = useUser()

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
      mutateUser(data)
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
      <SEO title="configurações" />
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
                  <Image
                    src={avatarUrl}
                    roundedCircle
                    width="100%"
                    style={{ aspectRatio: "1/1" }}
                  />
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
export default Settings

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
      props: { user },
    }
  } catch (error) {
    return {
      redirect: { destination: "/signin" },
    }
  }
}, sessionOptions)
