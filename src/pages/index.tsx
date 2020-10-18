import { GetServerSideProps } from "next"
import { useEffect } from "react"
import { StrapiAPI } from "../lib/strapi/index"
import { Title } from "../styles/pages/Home"

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
  thumbnail: IThumbnail
}
interface HomeProps {
  articles: IArticle[]
}

export default function Home({ articles }: HomeProps) {
  useEffect(() => {}, [])
  return (
    <div>
      <Title>Hello World</Title>
      <ul>
        {articles.map(({ id, title, content, description, thumbnail }) => {
          const { name, width, height } = thumbnail[0]
          return (
            <li key={id}>
              {title}
              <p>{description}</p>
              <img src={name} width={width} height={height}></img>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Este trecho n faz parte daqui
  // Tentar abstrair o máximo possivel da StrapiAPI
  const { data: articles } = await StrapiAPI.get("articles")

  return {
    props: { articles },
  }
}
