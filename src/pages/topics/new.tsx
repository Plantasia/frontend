import React, { useState } from "react"
import { Header, AppLayout, Editor } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { Button, Row, Col, Image, Form, FormGroup } from "react-bootstrap"
import { useRouter } from "next/router"
import { useUser } from "@src/lib"

export default function NewTopic(props: ComponentProps.TopicItemProps) {
  const router = useRouter()
  const [content, setContent] = useState("")
  const { user } = useUser()

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
                          label=""
                          data-browse="Carregar foto"
                          custom
                        />
                      </Form.Group>
                      <Form.Group
                        className="col"
                        controlId="topicForm.categories"
                      >
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select">
                          <option>Suculentas</option>
                          <option>Hortaliças</option>
                          <option>Sansevieras</option>
                          <option>Angiospermas</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Group className="d-flex justify-content-end">
                      <InlineGap>
                        <Button variant="outline-primary">Cancelar</Button>
                        <Button>Salvar</Button>
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

// export const getStaticProps: GetStaticProps<ComponentProps.UserProps> = async context => {
//   console.log(context)

//   return {
//     props: {
//       id: "2add7cd9-ffd8-43fe-a20c-9a2b9d4e8c5f",
//     },
//   }
// }
