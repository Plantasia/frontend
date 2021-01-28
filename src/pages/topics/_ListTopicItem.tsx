import { Col, Row } from "react-bootstrap"

type User = {
  id: string
  name: string
}
export type ListItemProps = {
  topicTitle: string | ""
  topicDescription: string
  ranking: number
  replies: number
  lastReply: {
    user: User
    when: string
  }
  createAt: string
  author: User
}

export function ListItem({
  topicTitle,
  topicDescription,
  ranking,
  lastReply,
  replies,
  createAt,
  author,
}: ListItemProps) {
  return (
    <Col
      xs="12"
      style={{
        cursor: "pointer",
        boxShadow: "-1px 1.5px 3px 0px #0000004f",
        marginBottom: "1em",
        borderRadius: "5px",
      }}
      className="py-2 px-4"
    >
      <Row className="d-flex align-items-end">
        <Col xs="12" lg="8">
          <div className="mb-2">
            <h4>{topicTitle}</h4>
            <a href={`/users/${author.id}`}>{author.name}</a>{" "}
            <span>{createAt}</span>
          </div>
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
        <Col xs="12" lg="4" className="d-flex justify-content-between">
          <div className="d-flex-column">
            <b>ranking: &nbsp;#{ranking}</b>
            <p>replies: &nbsp;&nbsp;&nbsp; {replies}</p>
          </div>
          <div className="d-flex">
            <img
              width="50"
              height="50"
              src="https://picsum.photos/50"
              className="mr-2"
              style={{ borderRadius: "50%" }}
            ></img>
            <div className="d-flex-column justify-content-center">
              <p style={{ margin: 0 }}>último reply</p>
              <a href={`/users/${lastReply.user.id}`}>{lastReply.user.name}</a>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  )
}
