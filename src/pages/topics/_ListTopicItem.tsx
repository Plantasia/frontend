/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Row, Image } from "react-bootstrap"
import { TopicDescription, TopicStats, TopicContent } from "@styled/Topics"
import { useRouter } from "next/router"
import { PlantasiaCard } from "@styled/Shared"
import { TopicItemProps } from "@utils/types"

export function ListItem({
  id,
  name,
  imageStorage,
  user,
  textBody,
  comments,
  replies,
  created_at,
  updated_at,
}: TopicItemProps) {
  const router = useRouter()
  console.log("comments")
  console.log(comments)
  created_at = `${new Date(created_at).toLocaleDateString("pt-br")}`

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
            <Image
              height="50"
              width="50"
              src={imageStorage}
              className="mr-2"
              roundedCircle
            />

            {name}
          </h4>
          <a href={`/users/${user.id}`}>{user.name}</a>
          <span> - {created_at}</span>
        </div>
        <TopicDescription>{textBody}</TopicDescription>
      </TopicContent>
      <TopicStats>
        <div className="d-flex-column">
          <b>ranking: &nbsp;#{""}</b>
          <p>replies: &nbsp;&nbsp;&nbsp; {replies || ""}</p>
        </div>
        <div className="d-flex">
          <Image
            height="50"
            width="50"
            src={user.avatar}
            className="mr-2"
            roundedCircle
          />
          <div className="d-flex-column justify-content-center">
            <p style={{ margin: 0 }}>último reply</p>

            <a href={user.id}>{user.name}</a>
          </div>
        </div>
      </TopicStats>
    </PlantasiaCard>
  )
}
