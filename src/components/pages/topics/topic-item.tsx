/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Row, Image, Col } from "react-bootstrap"
import { TopicDescription, TopicStats, TopicContent } from "@styled/Topics"
import { useRouter } from "next/router"
import { PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"

export function ListItem({
  id,
  name,
  imageStorage,
  lastComment,
  topicOwner,
  textBody,
  countComments,
  replies,
  created_at,
  updated_at,
}: ComponentProps.TopicItemProps) {
  const router = useRouter()

  return (
    <PlantasiaCard className="d-flex align-items-start">
      <TopicContent>
        <div className="mb-2 d-flex align-items-center">
          <h4
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push(`/topics/${id}`)
            }}
            className="mb-1"
          >
            {name}
          </h4>
        </div>
        <div>
          <a href={`/users/${topicOwner.id}`}>{topicOwner.name}</a>
          <span> - {created_at}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: textBody,
          }}
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        ></div>
      </TopicContent>
      {lastComment ? (
        <TopicStats>
          <div className="d-flex-column">
            <p>replies: &nbsp;&nbsp;&nbsp; {countComments}</p>
          </div>
          <div className="d-flex">
            <Image
              height="50"
              width="50"
              src={lastComment.user.avatar}
              className="mr-2"
              roundedCircle
            />
            <div className="d-flex-column justify-content-center">
              <p style={{ margin: 0 }}>
                último reply, {lastComment.updated_at}
              </p>

              <a href={`/profile/${lastComment.user.id}`}>
                {lastComment.user.name}
              </a>
            </div>
          </div>
        </TopicStats>
      ) : (
        <Col className="h-100 d-flex justify-content-end ">
          <p> Sem comentários</p>
        </Col>
      )}
    </PlantasiaCard>
  )
}
