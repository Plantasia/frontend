/* eslint-disable camelcase */
import { ComponentProps } from "@utils/types"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"

export const GetCategories = async (
  page?: any
): Promise<ComponentProps.CategoryProps[]> => {
  const params = {
    page,
  }
  const { data } = await ServerSideApi.get<BackendDTO.CategoriesDTO>(
    `/forum/categories`,
    { params }
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
      description,
      image: { src: imageStorage },
      lastActivity: lastActivity,
      lastTopic: { id: lastTopicId, title: lastTopicName },
      topicsCount: countTopics,
      repliesCount: countComments,
      name,
    })
  )
}
