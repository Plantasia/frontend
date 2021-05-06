import { Button, Row, Col } from "react-bootstrap"
import { GetServerSideProps } from "next"
import { Editor, AppLayout, RequestAuthModal } from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { CommentProps, Comment } from "./_comment"
import { ComponentProps } from "@utils/types"
import { useState } from "react"
import { GetTopic } from "@src/services/Topics"
import { SelfApi } from "@src/services/Api"
import useUser from "@src/lib/useUser"
import { useRouter } from "next/router"
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

export default function showTopicsByCategory({
  title,
  categories,
  comments,
  description,
}: TopicProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const [newComment, setNewComment] = useState("")
  const { user, mutateUser } = useUser()

  const submitNewComment = () => {
    if (user.isLoggedIn) {
    } else {
      setModalVisible(true)
    }
  }
  return (
    <AppLayout>
      <RequestAuthModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
      />
      <Row>
        <Col xs="12" className="mb-4">
          <h2 className="mb-3">{title}</h2>
          <p>{description}</p>
        </Col>
        <Col xs="12" className="d-flex justify-content-between mb-3">
          <InlineGap>
            {categories.map(({ name, color }, i) => (
              <Button variant={`outline-${color}`} key={i} size="sm">
                {name}
              </Button>
            ))}
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
          {comments.map((item, index) => (
            <Comment
              {...item}
              onQuote={text => {
                setNewComment(
                  `${newComment} <blockquote> ${text} </blockquote> `
                )
              }}
              key={index}
            />
          ))}
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
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps<TopicProps> = async ({
  query,
}) => {
  const { data: currentUser } = await SelfApi.get("/api/user")

  const { id } = query
  return {
    props: await GetTopic(id as string),
  }
}
