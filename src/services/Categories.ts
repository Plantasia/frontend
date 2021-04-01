/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await ServerSideApi.get<{
    data: BackendDTO.CategoryDTO[]
    prevPage: number
    nextPage: number
    perPage: number
    totalRegisters: number
  }>("/forum/categories/page/1")
  // @TO-DO tratar exceções
  console.log(data)
  return data.categories.map(
    // API keys
    ({
      authorId,
      topics,
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
        topics,
        repliesCount: 0,
        topicsCount: topics.length,
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
            bio: "teste",
          },
          title: (lastTopic && lastTopic.name) || "teste",
        },
      })
  )
}
