import { Add, Close } from "grommet-icons"

import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  Select,
  TextArea,
  TextInput,
} from "grommet"
import { useState } from "react"

interface ISideForm {
  onClose(): void
  visible?: boolean
}
export const FormLayer = ({ onClose, visible = false }: ISideForm) => {
  const [select, setSelect] = useState("")

  return (
    <>
      {visible && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
            onSubmit={onClose}
          >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
                Add
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
              <FormField label="First">
                <TextInput />
              </FormField>
              <FormField label="Second">
                <Select
                  options={[
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                  ]}
                  value={select}
                  onSearch={() => {}}
                  onChange={({ option }) => setSelect(option)}
                />
              </FormField>
              <FormField label="Third">
                <TextArea />
              </FormField>
            </Box>
            <Box flex={false} as="footer" align="start">
              <Button type="submit" label="Submit" onClick={onClose} primary />
            </Box>
          </Box>
        </Layer>
      )}
      )
    </>
  )
}

export default FormLayer
