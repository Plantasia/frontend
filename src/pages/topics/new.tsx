import React, { useState } from "react"
import { AppLayout, Editor } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { Button, Row, Col, Form } from "react-bootstrap"
import { useRouter } from "next/router"
import { useUser } from "@src/lib"
import { GetServerSidePropsResult } from "next"
import { SelfApi, ServerSideApi } from "@src/services/Api"
import { withIronSession } from "next-iron-session"
import { sessionOptions } from "../api/_iron-session/helpers"

interface Props {
  categories?: { id: string; name: string }[]
}
export default function NewTopic(props: Props) {
  const router = useRouter()
  const [media, setMedia] = useState<File>(null as File)
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const { categories } = props

  const handleNewTopic = async () => {
    if (!title) return window.flash("Seu tópico precisa de um título", "danger")
    if (!content)
      return window.flash("Seu tópico precisa de um conteúdo", "danger")

    const formData = new FormData()

    formData.append("file", media, media.name)
    formData.append("category_id", category)
    formData.append("textBody", content)
    formData.append("name", title)
    try {
      const { data } = await SelfApi.post("/api/topic", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
        onUploadProgress: event => {
          console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
          )
        },
        timeout: 1000,
        timeoutErrorMessage:
          "Ops, acho que estamos com algum problema no servidor. Volte mais tarde",
      })
      data.id && router.push(`/topics/${data.id}`)
    } catch (error) {
      if (error.response) {
        const {
          data: { error: message },
        } = error.response
        window.flash(message, "danger")
      }

      window.flash(error.message, "danger")
    }
  }

  return (
    <AppLayout>
      <Row>
        <Col xs="12" md={{ span: 12, offset: 0 }}>
          <PlantasiaCard>
            <Col>
              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="topicForm.title">
                      <Form.Label>Título</Form.Label>
                      <Form.Control
                        placeholder="Título do tópico"
                        type="text"
                        value={title}
                        onChange={({ target: { value } }) => setTitle(value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="topicForm.textBody">
                      <Form.Label>Descrição</Form.Label>
                      <Editor
                        content={content}
                        onChange={value => setContent(value)}
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group className="col">
                        <Form.Label>Envie uma foto</Form.Label>
                        <Form.File
                          id="topicForm.avatar"
                          label={media?.name || ""}
                          data-browse="Carregar foto"
                          custom
                          formEncType="multipart/form-data"
                          accept="image/jpeg, image/png, image/jpg"
                          onChange={({ target: { files } }) => {
                            console.log(files[0])
                            setMedia(files[0])
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="col"
                        controlId="topicForm.categories"
                      >
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={({ target: { value } }) =>
                            setCategory(value)
                          }
                        >
                          {categories.map(item => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Group className="d-flex justify-content-end">
                      <InlineGap>
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            router.push("/category")
                          }}
                        >
                          Cancelar
                        </Button>
                        <Button onClick={handleNewTopic}>Criar</Button>
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

export const getServerSideProps = withIronSession(async ({ req, res }): Promise<
  GetServerSidePropsResult<Props>
> => {
  const jwt: string = req.session.get("jwt")
  const headers = jwt ? { authorization: `Bearer ${jwt}` } : null

  try {
    const { data } = await ServerSideApi.get<{ id: string; name: string }[]>(
      "forum/categories/combobox",
      {
        headers,
      }
    )
    return {
      props: { categories: data },
    }
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    }
  }
}, sessionOptions)
