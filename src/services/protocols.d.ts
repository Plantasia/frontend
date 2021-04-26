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
    perPage: number | null
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
  export interface TopicObject {
    id: string
    textBody: string
  }
  export interface TopicsDTO {
    topics: TopicObject[]
    currentPage: number | null
    prevPage: number | null
    perPage: number | null
  }
}
