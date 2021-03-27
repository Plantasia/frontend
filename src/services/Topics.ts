/* eslint-disable camelcase */
import { BackendDTO } from "./protocols"
import { Api } from "./Api"
import { ComponentProps } from "@utils/types"

export const GetTopics = async (
  page: number
): Promise<ComponentProps.TopicItemProps[]> => {
  const { data } = await Api.get<{
    data: BackendDTO.TopicDTO[]
    prevPage: number
    nextPage: number
    perPage: number
    totalRegisters: number
  }>("/topics")
  // @TO-DO tratar exceções
  console.log(data)

  const comments = data.data

  for (const comment of comments) {
    console.log("****COMMENNTS")
    console.log(comment.comments)
  }

  return data.data.map(
    ({
      id,
      user,
      name,
      textBody,
      comments,
      imageStorage,
      created_at,
      updated_at,
    }) => ({
      id,
      name,
      topicOwner: user,
      lastComment: comments[0],
      countComments: comments.length,
      textBody,
      imageStorage: imageStorage || "",
      created_at,
      updated_at,
    })
  )
}

export const GetTopicById = async (
  id: number
): Promise<BackendDTO.TopicByIdDTO> => {
  const { data } = await Api.get<{
    data: BackendDTO.TopicByIdDTO
  }>(`topics/${id}`)

  return data.data
}
