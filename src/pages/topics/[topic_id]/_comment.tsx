import { Button, Row, Col, Image } from "react-bootstrap"
import { FaEllipsisV, FaSeedling } from "react-icons/fa"
import { PlantasiaCard, InlineGap } from "@styled/Shared"
import { UserProps } from "@utils/types"

export interface CommentProps {
  user: UserProps
  content: string
  likes: number
  createdAt: string
}

export function Comment({ content, likes, user, createdAt }: CommentProps) {
  const { bio, name } = user
  return (
    <PlantasiaCard className="mt-2">
      <Col xs="2" className="d-flex flex-column align-items-center text-center">
        <Image src="https://picsum.photos/100" roundedCircle className="mb-3" />
        <div className="mb-3" style={{ borderBottom: "1px solid black" }}>
          <h5>{name}</h5>
          <p>Membro desde {user.createdAt}</p>
        </div>
        <div>
          <p className="font-weight-normal">{bio}</p>
        </div>
      </Col>
      <Col xs="10" className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column align-items-end">
          <InlineGap className="mb-3">
            <span>{createdAt}</span>
            <FaEllipsisV />
          </InlineGap>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>

        <div className="d-flex justify-content-between w-100 flex-row-reverse align-items-end">
          <InlineGap>
            <Button variant="outline-primary">
              semear <FaSeedling />
            </Button>
            <Button variant="primary">responder</Button>
          </InlineGap>
          <div>
            <a href="#">{likes} sementes</a>
          </div>
        </div>
      </Col>
    </PlantasiaCard>
  )
}
