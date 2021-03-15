/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { CategoryAPI } from "./protocols"
import { Api } from "./Api"

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await Api.get<{
    categories: CategoryAPI[]
    prevPage: number
    nextPage: number
    perPage: number
    totalRegisters: number
  }>("/forum/categories/")
  // @TO-DO tratar exceções

  return data.categories.map(
    // API keys
    ({
      authorId,
      description,
      id,
      lastComment,
      lastTopic,
      name,
      qtdeTopics,
      qtdeComments,
    }) =>
      // Component props
      ({
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
}
