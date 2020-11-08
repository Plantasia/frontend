import SEO from "@/components/SEO"
import SideForm from "@/components/SideForm"
import { GetServerSideProps } from "next"
import { Button, Header, Menu, TextInput, Box } from "grommet"
import { Home } from "grommet-icons"

import { useState } from "react"

interface IThumbnail {
  name: string
  width: number
  height: number
  url: string
}
interface IArticle {
  id: number
  title: string
  content: string
  description: string
  thumbnail?: IThumbnail
}
interface HomeProps {
  articles: IArticle[]
}

const suggestions = Array(100)
  .fill({})
  .map((_, i) => `${i} teste`)

export default function HomePage({ articles }: HomeProps) {
  const [value, setValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const onOpen = () => {
    setModalVisible(true)
  }

  const onChange = event => setValue(event.target.value)

  const onSelect = event => setValue(event.suggestion)

  return (
    <Box>
      <Header background="brand">
        <Button icon={<Home />} hoverIndicator />
        <Menu
          label="account"
          items={[
            { label: "Entrar" },
            { label: "Mensagens" },
            { label: "Sair" },
          ]}
          dropProps={{ align: { top: "bottom", left: "right" } }}
        />
      </Header>
      <TextInput />
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            onChange={onChange}
            onSelect={onSelect}
            placeholder={<span>Enter something...</span>}
            suggestions={suggestions}
          />
        </Box>
        <Button label="open form" onClick={onOpen} />
        <SideForm
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </Box>
    </Box>
  )
}
