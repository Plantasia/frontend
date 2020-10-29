import { GetServerSideProps } from "next"
import { useEffect } from "react"
import StrapiAPI from "../lib/strapi/index"
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
  thumbnail?: IThumbnail
}
interface HomeProps {
  articles: IArticle[]
}

export default function Home({ articles }: HomeProps) {
  console.log(articles)
  return (
    <div>
      <Title>Hello World</Title>
      <ul>
        {articles.map(({ id, title, content, description, thumbnail }) => {
          return (
            <li key={id}>
              {title}
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const api = new StrapiAPI()
  const articles = await api.getArticles()

  return {
    props: { articles },
  }
}
