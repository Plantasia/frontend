/* eslint-disable camelcase */
import { Row, Button, Col } from "react-bootstrap"
import { TopicHeader } from "@styled/Topics"
import { ListItem } from "./_ListTopicItem"
import { ComponentProps } from "@utils/types"

export default function listTopics({
  data,
  handleNewTopic,
}: ComponentProps.ListTopicProps) {
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
