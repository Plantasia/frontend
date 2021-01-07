import SEO from "@/components/SEO"
import SideForm from "@/components/SideForm"
import { GetServerSideProps } from "next"

import { useState } from "react"
import { Container } from "reactstrap"

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
  return <Container></Container>
}
