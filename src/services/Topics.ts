/* eslint-disable camelcase */
import { TopicDTO } from "./protocols"
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

  return data.data.map(
    ({ id, name, textBody, imageStorage, created_at, updated_at }) => ({
      id,
      name,
      textBody,
      imageStorage: imageStorage || "",
      created_at,
      updated_at,
    })
  )
}
