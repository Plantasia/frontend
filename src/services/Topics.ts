/* eslint-disable camelcase */
import { TopicByIdDTO, TopicDTO } from "./protocols"
import { Api } from "./Api"
import { TopicItemProps } from "@utils/types"

export const GetTopics = async (): Promise<TopicItemProps[]> => {
  const { data } = await Api.get<{
    data: TopicDTO[]
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

export const GetTopicsById = async (id: number): Promise<TopicByIdDTO> => {
  await Api.get<{
    data: TopicByIdDTO
  }>(`topics/${id}`)

  return null
}
