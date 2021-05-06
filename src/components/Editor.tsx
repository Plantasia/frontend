import React, { useEffect, useRef, useState } from "react"

type EditorRefType = {
  CKEditor: any
  CustomBuild: any
}

const Editor: React.FC<{ content: string; onChange(data: string): void }> = ({
  content,
  onChange,
}) => {
  const editorRef = useRef<EditorRefType>()
  const [isEditorLoaded, setIsEditorLoaded] = useState(false)
  const { CKEditor, CustomBuild } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      CustomBuild: require("ckeditor5-custom-build/build/ckeditor"),
    }
    setIsEditorLoaded(true)
  }, [])

  return (
    isEditorLoaded && (
      <CKEditor
        className="mt-3"
        config={{
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "bulletedList",
              "numberedList",
              "|",
              "outdent",
              "indent",
              "|",
              "blockQuote",
              "insertTable",
              "undo",
              "redo",
            ],
          },
          language: "pt-br",
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
          licenseKey: "",
        }}
        editor={CustomBuild}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData()
          console.log({ event, editor, data })
          onChange(data)
        }}
      />
    )
  )
}

export { Editor }
