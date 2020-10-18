import { useEffect, useState } from "react"
import axios from "axios"
import { Title } from "../styles/pages/Home"

interface IThumbnail {
  name: string
}
interface IArticle {
  id: number
  title: string
  content: string
  description: string
  thumbnail: IThumbnail
}
export default function Home() {
  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    // Este trecho n faz parte daqui
    const api = axios.create({
      baseURL: "http://0.0.0.0:1337",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyOTk1MjY0LCJleHAiOjE2MDU1ODcyNjR9.uKYRJBw_NrNHbL4Qoid8UPVnwBGV2v2al998vBpTyVs",
      },
    })
    //

    api
      .get("articles")
      .then(response => {
        console.log(response.data)
        setArticles(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <Title>Hello World</Title>
      <ul>
        {articles.map(({ id, title, content, description, thumbnail }) => {
          return (
            <li key={id}>
              {title}
              <p>{description}</p>
              <img src={thumbnail.name}></img>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
