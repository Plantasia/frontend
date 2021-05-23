import { Button, Row, Col } from "react-bootstrap"
import { Editor, AppLayout, RequestAuthModal, SEO } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { CommentProps, Comment } from "./_comment"
import { ComponentProps } from "@utils/types"
import { useEffect, useState } from "react"
import { GetTopic } from "@src/services/Topics"
import { SelfApi } from "@src/services/Api"
import useUser from "@src/lib/useUser"
import { useRouter } from "next/router"
import useSWR, { mutate } from "swr"
import { axiosFetcher } from "@src/lib/fetchJson"
export interface BadgeCategoryProps {
  id: string
  name: string
  color: "primary" | "secondary" | "danger"
}
export interface TopicProps {
  title: string
  description: string
  categories: BadgeCategoryProps[]
  comments: CommentProps[]
  author: ComponentProps.UserProps
}

export default function ShowTopic(props) {
  const [modalVisible, setModalVisible] = useState(false)
  const [newComment, setNewComment] = useState("")
  const { user, mutateUser } = useUser()
  const router = useRouter()
  const { mutate: mutateTopic, data: topic } = useSWR<TopicProps>(
    router.query.id ? `/api/topic/${router.query.id as string}` : null,
    axiosFetcher,
    { refreshInterval: 5000 }
  )

  const submitNewComment = async () => {
    if (user?.isLoggedIn) {
      const previewComment: CommentProps = {
        id: "teste",
        createdAt: "agora mesmo",
        content: newComment,
        ownerUser: {
          id: user.id,
          avatar: user.avatar,
          bio: user.bio,
          name: user.name,
          createdAt: user.createdAt,
        },
      }
      mutateTopic(data => {
        const comments = data.comments
          ? [...data.comments, previewComment]
          : [previewComment]

        return {
          ...data,
          comments,
        }
      }, false)

      const commentPayload = {
        textBody: newComment,
        topic_id: router.query.id,
      }

      const {
        data: { message, type },
      } = await SelfApi.post("/api/comment", commentPayload)
      window.flash(message, type)
      setNewComment("")
    } else {
      setModalVisible(true)
    }
  }
  return (
    <AppLayout>
      {topic && (
        <>
          <SEO title={topic.title} />
          <RequestAuthModal
            visible={modalVisible}
            onHide={() => setModalVisible(false)}
          />
          <Row>
            <Col xs="12" className="mb-4">
              <h2 className="mb-3">{topic.title}</h2>
              <p>{topic.description}</p>
            </Col>
            <Col xs="12" className="d-flex justify-content-between mb-3">
              <InlineGap>
                {topic
                  ? topic.categories.map(({ name, color }, i) => (
                      <Button variant={`outline-${color}`} key={i} size="sm">
                        {name}
                      </Button>
                    ))
                  : null}
              </InlineGap>
              <InlineGap>
                <Button variant="primary" href="#new-comment">
                  novo comentário
                </Button>
              </InlineGap>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              {topic.comments?.map((item, index) => (
                <Comment
                  {...item}
                  onQuote={({ text }) => {
                    setNewComment(
                      `${newComment} <blockquote> ${text} </blockquote> 
                      <b>semente do ${user.name}</b>&nbsp;`
                    )
                  }}
                  key={index}
                />
              )) || null}
            </Col>
          </Row>

          <PlantasiaCard id="new-comment">
            <Col xs="12" className="mb-3">
              <h3>Deixe um comentário</h3>
              <Editor
                content={newComment}
                onChange={value => setNewComment(value)}
              />
            </Col>
            <Col xs="12" className="d-flex justify-content-end">
              <Button onClick={submitNewComment}>comentar</Button>
            </Col>
          </PlantasiaCard>
        </>
      )}
    </AppLayout>
  )
}
