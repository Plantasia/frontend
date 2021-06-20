import React, { useState } from "react"
import { Button, Row, Col, Image } from "react-bootstrap"
import {
  Editor,
  AppLayout,
  RequestAuthModal,
  SEO,
  TopicDropdown,
} from "@components"
import { InlineGap, PlantasiaCard } from "@styled/Shared"
import { CommentProps, Comment } from "../../components/pages/topics/comment"
import { ComponentProps } from "@utils/types"
import { SelfApi } from "@src/services/Api"
import { useUser } from "@src/lib"
import { useRouter } from "next/router"
import useSWR from "swr"
import { axiosFetcher } from "@src/lib/fetchJson"
import { FaComment } from "react-icons/fa"
import TimeAgo from "javascript-time-ago"
import pt from "javascript-time-ago/locale/pt"

TimeAgo.addLocale(pt)
export interface BadgeCategoryProps {
  id: string
  name: string
  color: "primary" | "secondary" | "danger"
}
export interface TopicProps {
  id?: string
  title: string
  description: string
  categories: BadgeCategoryProps[]
  comments: CommentProps[]
  author: ComponentProps.UserProps
  image: string
}

export default function ShowTopic(props) {
  const timeAgo = new TimeAgo("pt")
  const [modalVisible, setModalVisible] = useState(false)
  const [newComment, setNewComment] = useState("")
  const { user } = useUser()
  const router = useRouter()
  const { mutate: mutateTopic, data: topic } = useSWR<TopicProps>(
    router.query.id ? `/api/topic/${router.query.id as string}` : null,
    axiosFetcher
  )

  const submitNewComment = async () => {
    if (!user?.isLoggedIn) return setModalVisible(true)

    const previewComment: CommentProps = {
      id: "fake_id",
      createdAt: "agora mesmo",
      content: newComment,
      ownerUser: {
        id: null,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        name: user.name,
        createdAt: timeAgo.format(new Date(user.created_at)),
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
  }
  const handleDelete = () => {
    console.log(topic.id)
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
              <div className="d-flex justify-content-between align-items-baseline">
                <h2 className="mb-3">{topic.title}</h2>
                {user.id === topic.author.id && (
                  <TopicDropdown handleDelete={handleDelete} />
                )}
              </div>
              <InlineGap>
                {topic
                  ? topic.categories.map(({ name, color, id }, i) => (
                      <Button
                        variant={`outline-${color}`}
                        key={i}
                        size="sm"
                        onClick={() => {
                          router.push(`/topics?category=${id}`)
                        }}
                        className="mb-2"
                      >
                        {name}
                      </Button>
                    ))
                  : null}
              </InlineGap>
              <div
                dangerouslySetInnerHTML={{ __html: topic.description }}
              ></div>

              {topic.image && (
                <Image
                  src={topic.image}
                  className="mb-3"
                  fluid
                  style={{ maxHeight: 600 }}
                />
              )}
            </Col>
            <Col xs="12" className="d-flex justify-content-end mb-3">
              <Button
                variant="primary"
                href="#new-comment"
                className="d-flex align-items-center"
              >
                novo comentário
                <FaComment className="ml-2" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              {topic.comments?.map((item, index) => (
                <Comment
                  {...item}
                  onQuote={({ text, username }) => {
                    setNewComment(
                      `${newComment} <blockquote> ${text} </blockquote> 
                      <b>semente do ${username}</b>&nbsp;`
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
