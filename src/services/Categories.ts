/* eslint-disable camelcase */
import { ComponentProps } from "@utils/types"
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"
import { ListCategoriesProps } from "@src/pages/category"

export const GetCategories = async (
  page?: any
): Promise<ListCategoriesProps> => {
  const params = {
    page,
  }
  const { data } = await ServerSideApi.get<BackendDTO.CategoriesDTO>(
    `/forum/categories`,
    { params }
  )
  const categories: ComponentProps.CategoryProps[] = data.categories.map(
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
      lastActivity: new Date(lastActivity).toLocaleDateString("pt-br"),
      lastTopic: { id: lastTopicId, title: lastTopicName },
      topicsCount: countTopics,
      repliesCount: countComments,
      name,
    })
  )

  const { totalRegisters, perPage, prevPage, nextPage } = data
  return {
    categories,
    pages: Math.ceil(totalRegisters / perPage),
    prevPage,
    nextPage,
  }
}
