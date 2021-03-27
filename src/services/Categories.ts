/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { BackendDTO } from "./protocols"
import { Api } from "./Api"

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await Api.get<{
    data: BackendDTO.CategoryDTO[]
    prevPage: number
    nextPage: number
    perPage: number
    totalRegisters: number
  }>("/forum/categories/")
  // @TO-DO tratar exceções
  console.log(data)
  return data.data.map(
    // API keys
    ({
      authorId,
      description,
      id,
      lastComment,
      lastTopic,
      name,
      countTopics,
      countComments,
    }) =>
      // Component props
      ({
        id,
        repliesCount: countComments || 0,
        topicsCount: countTopics || 0,
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
