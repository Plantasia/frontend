import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"
import StrapiAPI from "@/lib/strapi"
import ReactMarkdown from "react-markdown"

interface ArticleProps {
  title: string
  description: string
  content: string
}
export default function Article({ title, description, content }: ArticleProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <ReactMarkdown source={content} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const api = new StrapiAPI()

  const articles = await api.getArticles()

  const paths = articles.map(article => {
    return {
      params: {
        slug: article.slug,
      },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const api = new StrapiAPI()

  const article = await api.getArticleBySlug(String(slug))

  const { title, description, content } = article[0]

  return {
    props: { title, description, content },
  }
}
