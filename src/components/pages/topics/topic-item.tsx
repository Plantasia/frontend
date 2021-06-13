/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from "react"
import { Image, Col } from "react-bootstrap"
import { TopicStats, TopicContent } from "@styled/Topics"
import { useRouter } from "next/router"
import { PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import user from "@src/pages/api/user"

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
        <p
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {textBody}
        </p>
      </TopicContent>
      {lastComment ? (
        <TopicStats>
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex mb-2">
              <Image
                height="50"
                width="50"
                src={lastComment.user.avatar}
                className="mr-2"
                roundedCircle
              />
              <div className="d-flex-column justify-content-center">
                <p style={{ margin: 0 }}>
                  último comentário, {lastComment.updated_at}
                </p>

                <a href={`/profile/${lastComment.user.id}`}>
                  {lastComment.user.name}
                </a>
              </div>
            </div>
            <p>
              {countComments} comentário{countComments > 1 ? "s" : null}{" "}
            </p>
          </div>
        </TopicStats>
      ) : (
        <Col className="h-100 d-flex justify-content-end">
          <p> Sem comentários</p>
        </Col>
      )}
    </PlantasiaCard>
  )
}
