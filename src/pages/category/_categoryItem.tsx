/* eslint-disable camelcase */
import { Col, Row } from "react-bootstrap"
import { PlantasiaCard } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import Image from "next/image"
import { TopicLink } from "@components/Links"
import { useRouter } from "next/router"

export function ListCategoryItem({
  description,
  id,
  lastActivity,
  lastTopic,
  name,
  repliesCount,
  topicsCount,
  image,
}: ComponentProps.CategoryProps) {
  const router = useRouter()
  return (
    <PlantasiaCard>
      <Col xs="12" md="3" lg="2" className="d-flex justify-content-center">
        <Image
          loader={({ src, width, quality }) => `https://picsum.photos/${width}`}
          src={image?.src || "/picsum/150"}
          width={150}
          height={150}
          className="rounded"
        />
      </Col>
      <Col
        xs="12"
        md="4"
        lg="5"
        className="d-flex flex-column justify-content-between"
      >
        <h3
          onClick={() => {
            router.push(`/topics?category=${id}`)
          }}
          style={{ cursor: "pointer" }}
        >
          {name}
        </h3>
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

        <div className="d-flex flex-column w-100">
          <h6 style={{ fontWeight: 300 }} className="mb-2">
            último tópico
            {/* <UserLink id={lastTopic.author.id} name={lastTopic.author.name} /> */}
          </h6>

          <div className="d-flex align-items-center">
            <img
              src="https://picsum.photos/seed/picsum/50"
              style={{ borderRadius: "50%" }}
            />
            <h6 className="ml-3">
              <TopicLink id={lastTopic.id} title={lastTopic.title} />
            </h6>
          </div>
        </div>
      </Col>
    </PlantasiaCard>
  )
}
