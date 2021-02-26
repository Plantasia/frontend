import { Row, Button } from "react-bootstrap"
import { ListItemProps, ListItem } from "./_ListTopicItem"
import { TopicHeader } from "@styled/Topics"

type ListTopicProps = {
  data: ListItemProps[]
  handleNewTopic(): void
}

export default function listTopics({ data, handleNewTopic }: ListTopicProps) {
  return (
    <Row>
      <TopicHeader>
        <h2>Tópicos</h2>
        <Button variant="primary" onClick={handleNewTopic}>
          Novo tópico
        </Button>
      </TopicHeader>
      {data.map((item, index) => (
        <ListItem {...item} key={index} />
      ))}
    </Row>
  )
}
