import { Button, Row, Col } from "react-bootstrap"
import { GetServerSideProps } from "next"
import { Header } from "@components"
import { InlineGap } from "@styled/Shared"
import { CommentProps, Comment } from "./_comment"
import { ComponentProps } from "@utils/types"

export interface BadgeCategoryProps {
  id: string
  name: string
  color: "primary" | "secondary" | "danger"
}

export interface TopicProps {
  title: string
  categories: BadgeCategoryProps[]
  comments: CommentProps[]
  author: ComponentProps.UserProps
}

export default function showTopicsByCategory({
  title,
  categories,
  comments,
}: TopicProps) {
  return (
    <>
      <Header
        callToAction={{
          label: "cadastre-se",
          onClick: () => {},
        }}
      />
      <Row>
        <Col xs="12" className="mb-4">
          <h1>{title}</h1>
        </Col>
        <Col xs="12" className="d-flex justify-content-between mb-3">
          <InlineGap>
            {categories.map(({ name, color }, i) => (
              <Button variant={`outline-${color}`} key={i} size="sm">
                {name}
              </Button>
            ))}
          </InlineGap>
          <InlineGap>
            <Button variant="outline-primary">acompanhar</Button>
            <Button variant="primary">novo comentário</Button>
          </InlineGap>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          {comments.map((item, index) => (
            <Comment {...item} key={index} />
          ))}
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<TopicProps> = async ({
  query,
}) => {
  return {
    props: {
      title: "Árvores de fruto em vasos",
      categories: [
        { color: "secondary", id: "022913282", name: "suculentas" },
        { color: "danger", id: "022913282", name: "solos" },
      ],
      comments: [
        {
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</p>",
          likes: 20,
          user: {
            id: "200",
            name: "Matheus Faggi",
            createdAt: "10/01/2020",
            bio:
              "Duis dolor nisi consequat in pariatur. Quis cillum ad ad exercitation cillum occaecat.",
          },
          createdAt: "05/01/2020",
          owner: true,
        },
        {
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</p>",
          likes: 20,
          user: {
            id: "1928309182",
            name: "Matheus Faggi",
            createdAt: "10/01/2020",
            bio:
              "Duis dolor nisi consequat in pariatur. Quis cillum ad ad exercitation cillum occaecat.",
          },
          createdAt: "05/01/2020",
          owner: false,
        },
        {
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</p>",
          likes: 20,
          user: {
            id: "1928309182",
            name: "Matheus Faggi",
            createdAt: "10/01/2020",
            bio:
              "Duis dolor nisi consequat in pariatur. Quis cillum ad ad exercitation cillum occaecat.",
          },
          createdAt: "05/01/2020",
          owner: false,
        },
      ],
      author: {
        id: "1928309182",
        name: "Matheus Faggi",
        createdAt: "10/01/2020",
        bio:
          "Duis dolor nisi consequat in pariatur. Quis cillum ad ad exercitation cillum occaecat. In est magna reprehenderit dolore duis qui id dolore culpa labore ex commodo. Eiusmod ipsum adipisicing commodo dolore ullamco aliquip.",
      },
    },
  }
}
