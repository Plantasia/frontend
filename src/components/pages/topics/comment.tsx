import React, { useContext, useEffect, useState } from "react"
import { Button, Row, Col, Image } from "react-bootstrap"
import { FaSeedling } from "react-icons/fa"
import { PlantasiaCard, InlineGap } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { CommentDropdown } from "@components/CommentDropdown"
import { Editor } from "@components"
import { useUser } from "@src/lib"



type ProfileCommentProps = {
  user: ComponentProps.UserProps
}

const ProfileComment: React.FC<ProfileCommentProps> = ({
  user: { name, createdAt, bio, avatarUrl },
}) => {
  return (
    <Col xs="2" className="d-flex flex-column align-items-center text-center">
      <Image
        src={avatarUrl}
        roundedCircle
        className="mb-3"
        style={{ aspectRatio: "1", width: "100%" }}
      />
      <div
        className="mb-3"
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <h5>{name}</h5>
        <p>Membro desde {createdAt}</p>
      </div>
      <div>
        <p className="font-weight-normal">{bio}</p>
      </div>
    </Col>
  )
}
export interface CommentProps {
  id: string
  ownerUser: ComponentProps.UserProps
  content: string
  onQuote?(data: { text: string; username: string }): void
  createdAt: string
  topicId?: string
}

export function Comment({
  content,
  ownerUser,
  createdAt,
  onQuote,
  topicId
}: CommentProps) {
  const [currentContent, setCurrentContent] = useState(content)
  const { user, mutateUser } = useUser()

  const handleEdit = () => {
    console.log(topicId)
    setEditMode(true)
  }
  const handleSaveComment = () => {
    console.log(topicId)
    setEditMode(false)
  }
  const handleReport = () => {}
  const handleDelete = () => {
    alert("Você tem certeza disso?")
  }

  const handleQuote = () => {
    onQuote && onQuote({ text: content, username: ownerUser.name })
  }

  const [editMode, setEditMode] = useState(false)

  useEffect(() => {}, [])

  return (
    <PlantasiaCard className="mt-2">
      <ProfileComment user={{ ...ownerUser }} />
      <Col xs="10" className={`d-flex flex-column`}>
        <Row>
          {editMode ? null : (
            <Col xs="12">
              <div className="d-flex flex-column align-items-end">
                <InlineGap className="mb-3">
                  <span>{createdAt}</span>
                  {user?.id === ownerUser.id && (
                    <CommentDropdown
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      handleReport={handleReport}
                    />
                  )}
                </InlineGap>
              </div>
            </Col>
          )}
        </Row>
        <Row className="h-100">
          <Col xs="12" className="d-flex flex-column justify-content-between ">
            {editMode ? (
              <>
                <Editor content={currentContent} onChange={setCurrentContent} />
                <div className="d-flex justify-content-between w-100 flex-row-reverse align-items-end">
                  <InlineGap className="mt-3">
                    <Button
                      variant="outline-primary"
                      onClick={() => setEditMode(false)}
                    >
                      cancelar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSaveComment}
                    >
                      salvar
                    </Button>
                  </InlineGap>
                </div>
              </>
            ) : (
              <>
                <div dangerouslySetInnerHTML={{ __html: currentContent }}></div>
                <div className="d-flex justify-content-between w-100 flex-row-reverse align-items-end">
                  <InlineGap>
                    <Button variant="outline-primary" onClick={handleQuote}>
                      mencionar <FaSeedling />
                    </Button>
                  </InlineGap>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Col>
    </PlantasiaCard>
  )
}
