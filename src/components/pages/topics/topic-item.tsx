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
          <a onClick={() => router.push(`/topics/${id}`)} className="mb-1 h4">
            {name}
          </a>
        </div>
        <div>
          <b>{topicOwner.name}</b>
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
          <div className="d-flex align-items-center">
            <div>
              <p>
                <a onClick={() => router.push(`/topics/${id}`)} className="a">
                  {countComments} comentário{countComments > 1 ? "s" : null}{" "}
                </a>
              </p>
              <div className="d-flex align-items-center">
                <Image
                  height="50"
                  width="50"
                  src={lastComment.user.avatar}
                  className="mr-2"
                  roundedCircle
                />
                <span>
                  <b>{lastComment.user.name}</b> comentou{" "}
                  {lastComment.updated_at}
                </span>
              </div>
            </div>
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
