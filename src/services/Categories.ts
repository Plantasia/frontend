/* eslint-disable camelcase */
import axios from "axios"
import { CategoryProps } from "@src/pages/category/_categoryItem"

export interface CategoryAPI {
  name: string
  id: string
  description: string
  authorId: string
  lastComment: {
    created_at: string
  }
  qtdeComments?: number
  qtdeTopics: number
  lastTopic: {
    id: string
    name: string
    textBody: string
    imageStore: string
    isActive: boolean
    created_at: string
  }
}

export type TopicAPI = {
  id: string
  name: string
  textBody: string
  imageStorage: string
  created_at: string
  updated_at: string
}

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await axios.get<{ categories: CategoryAPI[] }>(
    "http://backend:3333/forum/categories/"
  )
  const response = data.categories.map(
    ({
      authorId,
      description,
      id,
      lastComment,
      lastTopic,
      name,
      qtdeTopics,
      qtdeComments,
    }) => ({
      id,
      repliesCount: qtdeComments || 0,
      topicsCount: qtdeTopics || 0,
      name,
      description,
      lastActivity: lastComment === undefined ? "" : lastComment.created_at,
      // FAILURE API COMPATIBILITY
      lastTopic: null,
    })
  )

  return response
}
