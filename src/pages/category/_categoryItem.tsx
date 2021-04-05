/* eslint-disable camelcase */
import { Col, Row } from "react-bootstrap"
import { PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import Image from "next/image"
import { TopicLink, UserLink, TopicLinkProps } from "@components/Links"

export interface CategoriesProps {
  id: string
  name: string
  description: string
  imageStorage: string
  lastTopicId: string
  lastTopicName: string
  lastActivity: string
  countTopics: string
  countComments: string
}
export interface CategoryProps {
  categories: CategoriesProps[]
  currentPage: number | null
  prevPage: number | null
  nextPage: number | null
  perPage: number | null
}

export function ListCategoryItem({
  id,
  name,
  description,
  imageStorage,
  lastTopicId,
  lastTopicName,
  lastActivity,
  countTopics,
  countComments,
}: CategoryProps) {
  return (
    <PlantasiaCard>
      <Col xs="12" md="3" lg="2" className="d-flex justify-content-center">
        <Image
          loader={({ src, width, quality }) => `https://picsum.photos/${width}`}
          src={imageStorage || "/picsum/150"}
          width={150}
          height={150}
          className="rounded"
        />
      </Col>
      <Col
        xs="12"
        md="4"
        lg="5"
        className="d-flex flex-column justify-content-betwee"
      >
        <h3>{name}</h3>
        <p>{description}</p>
      </Col>
      <Col
        xs="12"
        md="5"
        lg="5"
        className="d-flex flex-column justify-content-between"
      >
        <div className="d-flex flex-wrap justify-content-between">
          <div className="">
            <h6>Tópicos</h6>
            <p>{countTopics}</p>
          </div>

          <div className="" style={{ minWidth: 150 }}>
            <h6>Última atividade</h6>
            <p>{lastActivity}</p>
          </div>

          <div className="">
            <h6>Comentários</h6>
            <p>{countComments}</p>
          </div>
        </div>

        <div className="d-flex flex-column w-100">
          <h6 style={{ fontWeight: 300 }} className="mb-2">
            último tópico - {/* <UserLink name={"df"} /> */}
          </h6>

          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/seed/picsum/50"
              style={{ borderRadius: "50%" }}
            />
            <h6 className="ml-3">
              <TopicLink id={lastTopicId} title={lastTopicName} />
            </h6>
          </div>
        </div>
      </Col>
    </PlantasiaCard>
  )
}
