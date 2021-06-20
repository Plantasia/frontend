import React, { useContext, useEffect, useState } from "react"
import { Button, Row, Col, Image, Alert } from "react-bootstrap"
import { FaSeedling } from "react-icons/fa"
import { PlantasiaCard, InlineGap } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { CommentDropdown } from "@components/CommentDropdown"
import { Editor } from "@components"
import { CommentDeleteModal } from "./CommentDeleteModal"
import { useUser } from "@src/lib"
import { SelfApi } from "@src/services/Api"
import { useRouter } from "next/router"

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
  id,
  topicId,
}: CommentProps) {
  const [editMode, setEditMode] = useState(false)
  const [currentContent, setCurrentContent] = useState<string>(content)
  const [visible, setVisible] = useState<boolean>(false)
  const [deleted, setDeleted] = useState<boolean>(false)
  const { user } = useUser()
  const router = useRouter()

  const handleEdit = async () => {
    setEditMode(true)
  }

  const handleSaveComment = async () => {
    try {
      const { data } = await SelfApi.patch("/api/comment", {
        textBody: currentContent,
        id,
      })
      window.flash(data.message, "success")
    } catch ({ response }) {
      window.flash(response.data.message, response.data.type)
    }
    setEditMode(false)
  }
  const handleReport = () => {}
  const handleDelete = async () => {
    try {
      const { data } = await SelfApi.delete(`/api/comment?id=${id}`)
      window.flash(data.message, "success")
      setDeleted(true)
    } catch (error) {
      window.flash(error.data.message, error.data.type)
    }
  }

  const handleQuote = () => {
    onQuote && onQuote({ text: content, username: ownerUser.name })
  }

  if (deleted) {
    return <></>
  }

  return (
    <PlantasiaCard className="mt-2">
      <ProfileComment user={{ ...ownerUser }} />
      <CommentDeleteModal
        visible={visible}
        onHide={() => setVisible(false)}
        action={handleDelete}
      />
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
                    <Button variant="primary" onClick={handleSaveComment}>
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
