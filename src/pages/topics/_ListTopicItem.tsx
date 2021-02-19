import { Row, Image } from "react-bootstrap"
import { TopicDescription, TopicStats, TopicContent } from "@styled/Topics"
import { useRouter } from "next/router"
import { PlantasiaCard } from "@styled/Shared"
import { TopicItemProps } from "./_ListTopics"

export function ListItem({
  id,
  topicTitle,
  topicDescription,
  ranking,
  lastReply,
  replies,
  createAt,
  author,
}: TopicItemProps) {
  const router = useRouter()
  return (
    <PlantasiaCard className="d-flex align-items-end">
      <TopicContent>
        <div className="mb-2">
          <h4
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push(`/topics/${id}`)
            }}
          >
            {topicTitle}
          </h4>
          <a href={`/user/${author.id}`}>{author.name}</a>
          <span> - {createAt}</span>
        </div>
        <TopicDescription>{topicDescription}</TopicDescription>
      </TopicContent>
      <TopicStats>
        <div className="d-flex-column">
          <b>ranking: &nbsp;#{ranking}</b>
          <p>replies: &nbsp;&nbsp;&nbsp; {replies}</p>
        </div>
        <div className="d-flex">
          <Image
            height="50"
            width="50"
            src={lastReply.user.avatar}
            className="mr-2"
            roundedCircle
          />
          <div className="d-flex-column justify-content-center">
            <p style={{ margin: 0 }}>último reply</p>
            <a href={`/user/${lastReply.user.id}`}>{lastReply.user.name}</a>
          </div>
        </div>
      </TopicStats>
    </PlantasiaCard>
  )
}
