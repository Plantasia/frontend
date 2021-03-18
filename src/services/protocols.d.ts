/* eslint-disable camelcase */

export interface CategoryDTO {
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
    id?: string
    name?: string
    textBody?: string
    imageStore: string
    isActive: boolean
    created_at: string
  }
}

export type TopicDTO = {
  id: string
  name: string
  textBody: string
  imageStorage: string
  created_at: string
  updated_at: string
}
