export interface IThumbnail {
  name: string
  width: number
  height: number
  url: string
}
export interface IArticle {
  id: number
  title: string
  content: string
  description: string
  slug: string
  thumbnail?: IThumbnail
}
export interface HomeProps {
  articles: IArticle[]
}
