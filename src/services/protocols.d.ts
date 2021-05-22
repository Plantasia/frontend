/* eslint-disable camelcase */

export namespace BackendDTO {
  export interface CategoryObject {
    id: string
    name: string
    imageStorage: string
    description: string
    lastTopicId?: string
    lastTopicName?: string
    lastActivity?: string
    countComments?: string
    countTopics?: string
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
    created_at: string
    bio: string
  }
  export interface CommentObject {
    id: string
    updated_at: string
    created_at: string
    user: UserObject
    textBody: string
  }
  export interface TopicObject {
    id: string
    name: string
    textBody: string
    imageStorage: string
    created_at: string
    updated_at: string
    comments?: CommentObject[]
    user: UserObject
    category: CategoryObject
  }

  export interface TopicsDTO {
    topics: TopicObject[]
    currentPage: number | string | null
    perPage: number
    prevPage: number | string | null
    nextPage: number | string | null
    totalRegisters: number
  }
  export interface TopicDTO extends TopicObject

  // USE CASES
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
  export namespace CreateComment {
    export type Response = {}

    export interface Params {
      textBody: string
      topic_id: string
    }
  }
  export namespace ShowTopic {
    export type Response = {}

    export interface Params {
      id: string
    }
  }
}
