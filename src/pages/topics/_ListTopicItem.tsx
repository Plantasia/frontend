/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Row, Image } from "react-bootstrap"
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
    <PlantasiaCard className="d-flex align-items-end">
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

        <TopicDescription>{textBody}</TopicDescription>
      </TopicContent>
      <TopicStats>
        <div className="d-flex-column">
          <b>ranking: &nbsp;#{""}</b>
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
            <p style={{ margin: 0 }}>último reply</p>

            <a href={`/profile/${lastComment.user.id}`}>
              {lastComment.user.name}
            </a>
          </div>
        </div>
      </TopicStats>
    </PlantasiaCard>
  )
}
