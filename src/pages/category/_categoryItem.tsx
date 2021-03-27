/* eslint-disable camelcase */
import { Col, Row } from "react-bootstrap"
import { PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { TopicLink, UserLink, TopicLinkProps } from "@components/Links"
export interface CategoryProps {
  id: string
  name: string
  description: string
  topicsCount: number
  repliesCount: number
  lastActivity: string
  lastTopic: {
    author: ComponentProps.UserProps
    id: string
    title: string
  }
}

export function ListCategoryItem({
  description,
  id,
  lastActivity,
  lastTopic,
  name,
  repliesCount,
  topicsCount,
}: CategoryProps) {
  return (
    <PlantasiaCard className="mt-4 py-4">
      <Col xs="3" className="d-flex justify-content-center">
        <img
          src="/assets/hortalicas.jpg"
          style={{
            width: "75%",
            aspectRatio: "1/1",
          }}
        />
      </Col>
      <Col
        md="4"
        lg="5"
        className="d-flex flex-column justify-content-between "
      >
        <h3>{name}</h3>
        <p>{description}</p>
      </Col>
      <Col md="5" lg="4" className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="">
            <h6>Tópicos</h6>
            <p>{topicsCount}</p>
          </div>

          <div className="" style={{ minWidth: 150 }}>
            <h6>Última atividade</h6>
            <p>{lastActivity}</p>
          </div>

          <div className="">
            <h6>Comentário</h6>
            <p>{repliesCount}</p>
          </div>
        </div>

        <div className="d-flex flex-column">
          <h6 style={{ fontWeight: 300 }} className="mb-2">
            {/* API INCOMPATIBILITY */}
            {/* último tópico - <UserLink id={authorId} name={author} /> */}
          </h6>

          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/seed/picsum/50"
              style={{ borderRadius: "50%" }}
            />
            <h5 className="ml-3">
              {/* API INCOMPATIBILITY */}
              {/* <TopicLink id={lastTopicId} title={title} /> */}
            </h5>
          </div>
        </div>
      </Col>
    </PlantasiaCard>
  )
}
