/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { CategoryDTO } from "./protocols"
import { Api } from "./Api"

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await Api.get<{
    categories: CategoryDTO[]
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
        lastActivity:
          lastComment === undefined
            ? ""
            : new Date(lastComment.created_at)
                .toLocaleString("pt-BR")
                .split(",")[0],
        // FAILURE API COMPATIBILITY
        lastTopic: {
          id: (lastTopic && lastTopic.id) || "12389",
          author: {
            name: "teste",
            id: "testeee",
          },
          title: (lastTopic && lastTopic.name) || "teste",
        },
      })
  )
}
