import { Col, Row, ColProps } from "react-bootstrap"
import { FaEllipsisV } from "react-icons/fa"
import styled from "styled-components"

const Stats = styled(Col).attrs(
  (): ColProps => ({
    xs: "1",
    className: "d-flex align-items-center my-4",
  })
)`
  border-left: 1px solid black;
`
export type ListItemProps = {
  topicTitle: string | ""
  topicDescription: string
  ranking: number
  replies: number
  lastReply: {
    user: string
    when: string
  }
}

export function ListItem({
  topicTitle,
  topicDescription,
  ranking,
  lastReply,
  replies,
}: ListItemProps) {
  return (
    <Col xs="12">
      <Row>
        <Col xs="8">
          <h4>{topicTitle}</h4>
          <p
            className="text-break"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {topicDescription}
          </p>
        </Col>
        <Stats>{ranking}</Stats>
        <Stats>
          <a href="/">{lastReply.user}</a> {lastReply.when}
        </Stats>
        <Stats>{replies}</Stats>
        <Col className="d-flex align-items-center">
          <FaEllipsisV />
        </Col>
      </Row>
    </Col>
  )
}
