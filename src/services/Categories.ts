/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"
import { count } from "console"

export const GetCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await ServerSideApi.get<{
    data: BackendDTO.CategoriesDTO[]
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
      id,
      name,
      description,
      imageStorage,
      lastTopicId,
      lastTopicName,
      lastActivity,
      countTopics,
      countComments,
    }) => ({
      id,
      name,
      imageStorage,
      countComments,
      countTopics,
      description,
      lastActivity:
        lastActivity === null
          ? ""
          : new Date(lastActivity).toLocaleString("pt-BR").split(",")[0],

      lastTopicId,
      lastTopicName,
    })
  )
}
