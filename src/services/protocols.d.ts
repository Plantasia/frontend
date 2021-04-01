/* eslint-disable camelcase */

export namespace BackendDTO {
  export interface UserTopicByIdDTO {
    id: string
    name: string
    avatar: string
    email: string
    created_at: string
  }
  export interface UserDTO {
    id: string
    name?: string
    avatar?: string
  }

  export type CommentCategoryInfo = {
    id: string
    updated_at: string
  }

  export type TopicCategoryByIdInfo = {
    id: string
    name: string
    textBody: string
    imageStore: string
    comments: CommentCategoryInfo[]
  }
  export interface CategoryDTO {
    name: string
    id: string
    description: string
    authorId: string

    lastComment?: {
      created_at: string
    }
    countComments?: number
    countTopics?: number
    lastTopic?: {
      id?: string
      name?: string
      textBody?: string
      imageStore?: string
      isActive?: boolean
      created_at?: string
      updatedt_at?: string
    }
    topics: TopicCategoryByIdInfo[]
  }
  export interface CategoryTopicByIdRouteDTO {
    name: string
    id: string
    description: string
    authorId: string
    imageStorage: string
    created_at: string
    updated_at: string
    countComments?: number
    user: UserDTO
  }

  export type TopicDTO = {
    id: string
    name: string
    user: UserDTO
    textBody: string
    comments: any[]
    imageStorage: string
    created_at: string
    updated_at: string
  }

  export type CommentsDTO = {
    id: string
    textBody: string
    updated_at?: string
    created_at?: string
    user: UserTopicByIdDTO
  }

  export type TopicByIdDTO = {
    id: string
    name: string
    textBody: string
    imageStorage: string
    created_at: string
    updated_at: string
    comments: CommentsDTO[]
    user: UserTopicByIdDTO
  }
}
