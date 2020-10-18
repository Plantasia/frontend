import { GetStaticPaths, GetStaticProps } from "next"
import { StrapiAPI } from "../../../lib/strapi"

interface ArticleProps {
  title: string
  description: string
  content: string
}
export default function Article({ title, description, content }: ArticleProps) {
  console.log(title)

  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{content}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: articles } = await StrapiAPI.get(`articles`)
  const paths = articles.map(article => {
    return {
      params: {
        slug: article.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const { data: articles } = await StrapiAPI.get(`articles`, {
    params: { slug },
  })
  const { title, description, content } = articles[0]

  return {
    props: { title, description, content },
  }
}
