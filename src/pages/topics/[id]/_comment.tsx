import React, { useEffect, useRef, useState } from "react"
import { Button, Row, Col, Image } from "react-bootstrap"
import { FaSeedling } from "react-icons/fa"
import { PlantasiaCard, InlineGap } from "@styled/Shared"
import { ComponentProps } from "@utils/types"
import { CommentDropdown } from "@components/CommentDropdown"
import { Editor } from "@components"
import dynamic from "next/dynamic"

export interface CommentProps {
  user: ComponentProps.UserProps
  content: string
  likes: number
  createdAt: string
  owner: boolean
}
type EditorRefType = {
  CKEditor: any
  ClassicEditor: any
}

type ProfileCommentProps = {
  user: ComponentProps.UserProps
}

const ProfileComment: React.FC<ProfileCommentProps> = ({
  user: { name, createdAt, bio },
}) => {
  return (
    <Col xs="2" className="d-flex flex-column align-items-center text-center">
      <Image src="https://picsum.photos/100" roundedCircle className="mb-3" />
      <div className="mb-3" style={{ borderBottom: "1px solid black" }}>
        <h5>{name}</h5>
        <p>Membro desde {createdAt}</p>
      </div>
      <div>
        <p className="font-weight-normal">{bio}</p>
      </div>
    </Col>
  )
}

export function Comment({
  content,
  likes,
  user,
  createdAt,
  owner,
}: CommentProps) {
  const [currentContent, setCurrentContent] = useState(content)
  const handleEdit = () => {
    setEditMode(true)
  }
  const handleReport = () => {}
  const handleDelete = () => {
    alert("Você tem certeza disso?")
  }
  const handleQuote = () => {}

  const [editMode, setEditMode] = useState(false)

  useEffect(() => {}, [])

  return (
    <PlantasiaCard className="mt-2">
      <ProfileComment user={{ ...user }} />
      <Col xs="10" className={`d-flex flex-column`}>
        <Row>
          {editMode ? null : (
            <Col xs="12">
              <div className="d-flex flex-column align-items-end">
                <InlineGap className="mb-3">
                  <span>{createdAt}</span>
                  <CommentDropdown
                    owner={owner}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleReport={handleReport}
                    handleQuote={handleQuote}
                  />
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
                      onClick={() => {
                        setCurrentContent(content)
                        setEditMode(false)
                      }}
                    >
                      cancelar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        // @TO-DO
                        // request para salvar no banco de dados
                        setEditMode(false)
                      }}
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
                    <Button variant="outline-primary">
                      semear <FaSeedling />
                    </Button>
                    <Button variant="primary">responder</Button>
                  </InlineGap>
                  <div>
                    <a href="#">{likes} sementes</a>
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Col>
    </PlantasiaCard>
  )
}
