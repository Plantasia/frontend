/* eslint-disable camelcase */
import { ComponentProps } from "@utils/types"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"

export const GetCategories = async (
  pageNumber?: number
): Promise<ComponentProps.CategoryProps[]> => {
  const { data } = await ServerSideApi.get<BackendDTO.CategoriesDTO>(
    `/forum/categories/page/${pageNumber}`
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
      name,
      image: { src: imageStorage },
      description,
      lastTopic: { id: lastTopicId, title: lastTopicName },
      lastActivity: new Date(lastActivity)
        .toLocaleDateString("pt-br")
        .split(",")[0],
      repliesCount: countComments,
      topicsCount: countTopics,
    })
  )
}
