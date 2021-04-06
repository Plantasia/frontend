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
}
