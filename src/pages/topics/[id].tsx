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
import { getStaticProps } from ".."
import { GetServerSideProps, GetStaticProps } from "next"
import { GetTopic } from "@src/services/Topics"
import { TopicDeleteModal } from "@src/components/pages/topics/TopicDeleteModal"

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
  const [authModalVisible, setAuthModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [newComment, setNewComment] = useState("")
  const { user } = useUser()
  const router = useRouter()
  const { mutate: mutateTopic, data: topic } = useSWR<TopicProps>(
    `/api/topic/${props.id}`,
    { initialData: props, fetcher: axiosFetcher }
  )

  const submitNewComment = async () => {
    if (!user?.isLoggedIn) return setAuthModalVisible(true)

    const previewComment: CommentProps = {
      id: "fake_id",
      createdAt: "agora mesmo",
      content: newComment,
      ownerUser: {
        id: null,
        avatarUrl: user.avatarUrl,
        bio: user?.bio,
        name: user?.name,
        createdAt: timeAgo.format(new Date(user.created_at)),
      },
    }

    const previewComments = topic.comments
      ? [...topic.comments, previewComment]
      : [previewComment]

    mutateTopic({ ...topic, comments: previewComments }, false)

    const commentPayload = {
      textBody: newComment,
      topic_id: props.id,
    }

    try {
      const {
        data: { message, type },
      } = await SelfApi.post("/api/comment", commentPayload, {
        headers: {
          "Content-type": "application/json",
        },
      })
      window.flash(message, type)
    } catch ({ response }) {
      console.log(response)
    }
    setNewComment("")
  }

  const handleDelete = async () => {
    try {
      const { data } = await SelfApi.delete(`/api/topic/${topic.id}`)

      window.flash(data.message, data.type)
      router.push("/topics")
    } catch ({ response: data }) {
      window.flash(data.message, data.type)
    }
  }
  return (
    <AppLayout>
      <TopicDeleteModal
        visible={deleteModalVisible}
        onHide={() => {
          setDeleteModalVisible(false)
        }}
        action={handleDelete}
      />
      <SEO title={topic.title} />
      <RequestAuthModal
        visible={authModalVisible}
        onHide={() => setAuthModalVisible(false)}
      />
      <Row>
        <Col xs="12" className="mb-4">
          <div className="d-flex justify-content-between align-items-baseline">
            <h2 className="mb-3">{topic.title}</h2>
            {user?.id === topic?.author?.id && (
              <TopicDropdown
                handleDelete={() => {
                  setDeleteModalVisible(true)
                }}
              />
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
          <div dangerouslySetInnerHTML={{ __html: topic.description }}></div>

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
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps<TopicProps> =
  async context => {
    const {
      query: { id },
    } = context
    return {
      props: await GetTopic(id as string),
    }
  }
