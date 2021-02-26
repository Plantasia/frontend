import { Button, Row, Col } from "react-bootstrap"
import { GetServerSideProps } from "next"
import { Header } from "@components"
import { InlineGap } from "@styled/Shared"
import { CommentProps, Comment } from "./_comment"
import { UserProps } from "@utils/types"

export interface BadgeCategoryProps {
  id: string
  name: string
  color: "primary" | "secondary" | "danger"
}

export interface TopicProps {
  title: string
  categories: BadgeCategoryProps[]
  comments: CommentProps[]
  author: UserProps
}

export default function showTopicsByCategory({
  title,
  categories,
}: TopicProps) {
  return (
    <>
      <Header>
        {{ right: <Button variant="outline-primary">Login</Button> }}
      </Header>
      <Row>
        <Col xs="12" className="mb-4">
          <h1>{title}</h1>
        </Col>
        <Col xs="12" className="d-flex justify-content-between mb-3">
          <InlineGap>
            {categories.map((item, i) => (
              <Button variant="outline-secondary" key={i} size="sm">
                {item}
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
          <Comment
            content="<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</h1>"
            likes={10}
            user={{}}
          />
          <Comment
            content="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</p>"
            likes={10}
            user={{}}
          />
          <Comment
            content="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic modi provident veniam mollitia. Velit vitae quidem perferendis corrupti dolore saepe neque earum. Eaque quos nobis at quibusdam unde laudantium!</p>"
            likes={10}
            user={{}}
          />
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<TopicProps> = async context => {
  return {
    props: {
      title: "Árvores de fruto em vasos",
      categories: ["suculentas", "solos", "fertilizante"],
      comments: [],
    },
  }
}
