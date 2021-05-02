/* eslint-disable camelcase */

export namespace BackendDTO {
  export interface CategoryObject {
    id: string
    name: string
    imageStorage: string
    description: string
    lastTopicId: string
    lastTopicName: string
    lastActivity: string
    countComments: string
    countTopics: string
  }
  export interface CategoriesDTO {
    categories: CategoryObject[]
    currentPage: number | null
    prevPage: number | null
    nextPage: number | null
    perPage: number | null
    totalRegisters: number | null
  }
  export interface UserObject {
    id: string
    name: string
    avatar: string
  }
  export namespace UserSignIn {
    export type Response = {
      access_token?: string
      error?: string
    }

    export interface Params {
      email: string
      password: string
    }
  }
  export namespace UserSignUp {
    export type Response = {
      name: string
      email: string
      error?: string
    }

    export interface Params {
      email: string
      password: string
      name: string
    }
  }
  export interface CommentObject {
    id: string
    updated_at: string
    created_at: string
    user: UserObject
  }
  export interface TopicObject {
    id: string
    name: string
    textBody: string
    imageStorage: string
    created_at: string
    updated_at: string
    comments: CommentObject[]
    user: UserObject
  }
  export interface TopicsDTO {
    topics: TopicObject[]
    currentPage: number | null
    prevPage: number | null
    perPage: number | null
  }
  export interface TopicDTO {
    topic: TopicObject
    comments: CommentObject[]
    user: UserObject
  }
}
