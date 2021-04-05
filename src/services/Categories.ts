/* eslint-disable camelcase */
import { ComponentProps } from "@utils/types"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"
import { count } from "console"

export const GetCategories = async (): Promise<
  ComponentProps.CategoryProps[]
> => {
  const { data } = await ServerSideApi.get<BackendDTO.CategoriesDTO>(
    "/forum/categories/page/1"
  )
  // @TO-DO tratar exceções
  console.log(data)
  return data.categories.map(
    // API keys
    ({
      id,
      name,
      lastTopicId,
      lastActivity,
      countComments,
      countTopics,
      description,
      imageStorage,
      lastTopicName,
    }) => ({
      id,
      name
      image: imageStorage,
      description,
      lastTopic: { id: lastTopicId, title: lastTopicName },
      lastActivity,
      repliesCount:countComments,
      topicsCount:countTopics

    })
  )
}
