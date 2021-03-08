import { useEffect, useRef, useState } from "react"
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
type EditorRefType = {
  CKEditor: any
  ClassicEditor: any
}

export function Comment({ content, likes, user, createdAt }: CommentProps) {
  const { bio, name } = user
  const editorRef = useRef<EditorRefType>()

  const { CKEditor, ClassicEditor } = editorRef.current || {}

  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
  }, [])
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
      <Col xs="10" className={`d-flex flex-column`}>
        <Row>
          <Col xs="12">
            <div className="d-flex flex-column align-items-end">
              <InlineGap className="mb-3">
                <span>{createdAt}</span>
                <FaEllipsisV
                  onClick={() => {
                    setEditMode(true)
                  }}
                />
              </InlineGap>
            </div>
          </Col>
        </Row>
        <Row className="h-100">
          <Col xs="12" className="d-flex flex-column justify-content-between ">
            {editMode ? (
              <>
                <CKEditor
                  editor={ClassicEditor}
                  data={content}
                  onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor)
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    console.log({ event, editor, data })
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor)
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor)
                  }}
                />
                <div className="d-flex justify-content-between w-100 flex-row-reverse align-items-end">
                  <InlineGap className="mt-3">
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setEditMode(false)
                      }}
                    >
                      cancelar
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
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
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
