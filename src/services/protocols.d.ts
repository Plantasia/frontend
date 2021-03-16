/* eslint-disable camelcase */

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
    id?: string
    name?: string
    textBody?: string
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
