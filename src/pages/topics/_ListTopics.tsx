import { Row, Button, Col } from "react-bootstrap"
import { UserProps } from "@utils/types"
import { TopicHeader } from "@styled/Topics"
import { ListItem } from "./_ListTopicItem"

type ListTopicProps = {
  data: TopicItemProps[]
  handleNewTopic(): void
}
export type TopicItemProps = {
  id: string
  topicTitle: string | ""
  topicDescription: string
  ranking: number
  replies: number
  lastReply: {
    user: UserProps
    when: string
  }
  createAt: string
  author: UserProps
}

export default function listTopics({ data, handleNewTopic }: ListTopicProps) {
  return (
    <Row>
      <TopicHeader>
        <h2>Tópicos</h2>
        <Button variant="primary" onClick={handleNewTopic}>
          novo tópico
        </Button>
      </TopicHeader>
      <Col xs="12">
        {data.map((item, index) => (
          <ListItem {...item} key={index} />
        ))}
      </Col>
    </Row>
  )
}
