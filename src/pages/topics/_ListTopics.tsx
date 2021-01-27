import { Col, Row, Button } from "react-bootstrap"
import { ListItemProps, ListItem } from "./_ListTopicItem"

type ListTopicProps = {
  data: ListItemProps[]
  handleNewTopic(): void
}

export default function listTopics({ data, handleNewTopic }: ListTopicProps) {
  return (
    <Row>
      <Col
        className="d-flex justify-content-between align-items-end mb-5"
        xs="12"
      >
        <h2>Tópicos</h2>
        <Button variant="primary" onClick={handleNewTopic}>
          Novo tópico
        </Button>
      </Col>
      {data.map((item, index) => (
        <ListItem {...item} key={index} />
      ))}
    </Row>
  )
}
